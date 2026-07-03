import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, connectAuthEmulator, Auth } from "firebase/auth";
import { getDatabase, Database } from "firebase/database";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
 // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDummyKeyDummyKeyDummyKeyDummyKey",
 // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dummy-auth-domain.firebaseapp.com",
 // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dummy-project-id",
 // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dummy-project-id.appspot.com",
 // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID || "123456789012",
 // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789012:web:1234567890abcdef",
 // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || "https://dummy-project-id.firebaseio.com",

 apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID!,
appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL!,
};

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
 rtdb = getDatabase(app);
} catch (error) {
 console.warn("Firebase initialized with dummy values or failed. Using mocks.", error);
 auth = {} as any;
 db = {} as any;
 rtdb = {} as any;
}

export { auth, db, rtdb };
