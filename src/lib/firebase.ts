import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);

// The set_up_firebase tool might provide the databaseId in the config
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Test connection strictly from server to diagnose network/config issues
async function testConnection() {
  try {
    // Attempting to reach the server directly
    await getDocFromServer(doc(db, '_connection_test_', 'ping'));
  } catch (error) {
    console.warn("Firebase Connection Test:", error);
  }
}
testConnection();
