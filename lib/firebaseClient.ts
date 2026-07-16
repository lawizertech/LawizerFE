import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, connectAuthEmulator, Auth } from "firebase/auth";
import { getDatabase, Database } from "firebase/database";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "",
};

if (!firebaseConfig.apiKey && typeof window !== "undefined") {
  console.warn("Firebase API key is missing. Auth state might be inactive.");
}

// let app, auth, db, rtdb;
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let rtdb: Database;

try {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth(app);
  if (typeof window !== "undefined") {
    const emulatorHost = process.env.NEXT_PUBLIC_FIREBASE_AUTH_EMULATOR_HOST;
    const authAny = auth as unknown as { emulatorConfig?: unknown };

    if (emulatorHost && !authAny.emulatorConfig) {
      connectAuthEmulator(auth, `http://${emulatorHost}`, {
        disableWarnings: true,
      });
    }
  }
  db = getFirestore(app);
  if (firebaseConfig.databaseURL) {
    rtdb = getDatabase(app);
  } else {
    rtdb = {} as any;
  }
} catch (error) {
  console.warn("Firebase initialized with dummy values or failed. Using mocks.", error);
  auth = {} as any;
  db = {} as any;
  rtdb = {} as any;
}

export { auth, db, rtdb };
