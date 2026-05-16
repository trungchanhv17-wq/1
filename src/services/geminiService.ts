import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function translateAndCorrect(text: string, targetLang: string = "German") {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Translate the following English sentence into ${targetLang}. Also check for grammar and suggest more natural ways to say it in ${targetLang}. Respond in JSON format with fields: translatedText, correction (if any), explanation, and alternatives (array of strings).
      
      Sentence: "${text}"`,
      config: {
        responseMimeType: "application/json",
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Error:", error);
    return { error: "Failed to process translation." };
  }
}
