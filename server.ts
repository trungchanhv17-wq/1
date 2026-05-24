import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import Stripe from "stripe";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check for Cloud Run
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Logging middleware
  app.use((req, _res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  // Initialize Gemini
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  }) : null;

  // Lazy Stripe Initialization
  let stripeClient: Stripe | null = null;
  const getStripe = () => {
    if (!stripeClient && process.env.STRIPE_SECRET_KEY) {
      stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2024-12-18.acacia",
      });
    }
    return stripeClient;
  };

  // API Routes directly on app to avoid router mounting confusion
  app.post("/api/create-checkout-session", async (req, res) => {
    const { priceId, userId, userEmail } = req.body;

    const stripe = getStripe();
    if (!stripe) {
      return res.status(503).json({ 
        error: "Stripe is not configured. Please provide STRIPE_SECRET_KEY in your settings to enable international payments." 
      });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: priceId.includes("lifetime") ? "payment" : "subscription",
        success_url: `${process.env.APP_URL || `http://localhost:${PORT}`}/?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.APP_URL || `http://localhost:${PORT}`}/pricing`,
        customer_email: userEmail,
        metadata: {
          userId: userId,
        },
      });

      res.json({ url: session.url });
    } catch (error: unknown) {
      console.error("Stripe Error:", error);
      res.status(500).json({ error: error instanceof Error ? error.message : "Stripe session creation failed" });
    }
  });

  app.get("/api/verify-session", async (req, res) => {
    const { sessionId } = req.query;
    const stripe = getStripe();
    
    if (!stripe || !sessionId) {
      return res.status(400).json({ error: "Invalid request" });
    }

    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId as string);
      if (session.payment_status === "paid") {
        res.json({ success: true, userId: session.metadata?.userId });
      } else {
        res.json({ success: false });
      }
    } catch (error: unknown) {
      res.status(500).json({ error: error instanceof Error ? error.message : "Session verification failed" });
    }
  });

  // API Route for translation analysis
  app.post("/api/analyze-translation", async (req, res) => {
    const { prompt, translation, level, context, nativeLanguage } = req.body;

    if (!prompt || !translation) {
      return res.status(400).json({ error: "Missing prompt or translation" });
    }

    if (!ai) {
      return res.status(503).json({ error: "Gemini API key not configured" });
    }

    const languageName = nativeLanguage === 'vi' ? 'Vietnamese (Tiếng Việt)' : 'English';

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: [{
          role: "user",
          parts: [{
            text: `Analyze this German translation.
Native language of the student: ${languageName}
Source Prompt (meaning to render in German): "${prompt}"
German Translation written by student: "${translation}"
User Level: ${level || 'B1'}
Context: ${context || 'General'}

CRITICAL INSTRUCTION FOR EXPLANATIONS AND LANGUAGE:
- You must explain everything, including the "feedback", individual bullet items in "improvements", and the "explanation" fields, entirely in ${languageName}.
- Keep all German training terms, German sample words, and the "correctedSentence" strictly in standard natural German. Do NOT translate the German training text or corrected German structures into the student's native language.

Provide feedback in JSON format with the following structure:
{
  "isCorrect": boolean,
  "feedback": "An encouraging review sum in ${languageName}",
  "grammarScore": number (0-100),
  "precisionScore": number (0-100),
  "naturalnessScore": number (0-100),
  "improvements": ["Precise bullet points in ${languageName} describing vocabulary adjustments, word prep, or verb placements"],
  "explanation": "A structural overview explaining specific German casing rules, verbs, or conjunctions in ${languageName}",
  "correctedSentence": "A flawless, natural, standard German translation matching native fluency"
}`
          }]
        }],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              isCorrect: { type: Type.BOOLEAN },
              feedback: { type: Type.STRING },
              grammarScore: { type: Type.NUMBER },
              precisionScore: { type: Type.NUMBER },
              naturalnessScore: { type: Type.NUMBER },
              improvements: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              explanation: { type: Type.STRING },
              correctedSentence: { type: Type.STRING }
            },
            required: ["isCorrect", "feedback", "grammarScore", "precisionScore", "naturalnessScore", "improvements", "explanation", "correctedSentence"]
          }
        }
      });

      const resultText = response.text;
      if (!resultText) {
        throw new Error("Empty response from Gemini");
      }
      res.json(JSON.parse(resultText));
    } catch (error: unknown) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to analyze translation" });
    }
  });

  // Catch-all for /api 404s
  app.all("/api/*", (req, res) => {
    res.status(404).json({ error: `Route ${req.method} ${req.url} not found` });
  });


  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, the bundle is in dist/server.cjs, so index.html is in the same directory
    // However, during local build, dist/ is a sibling of server.ts.
    // Using path.resolve('dist') is safer if the CWD is the project root.
    const distPath = path.resolve('dist');
    console.log(`Serving static files from: ${distPath}`);
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`Current directory: ${process.cwd()}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
