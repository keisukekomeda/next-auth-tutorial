import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount =
  // require("../../../next-auth-tutorial-bfcf9-firebase-adminsdk-p3tv3-0d30ba6838.json");
  {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  };
export const firebaseAdmin =
  getApps()[0] ?? initializeApp({ credential: cert(serviceAccount) });

export const auth = getAuth();
