import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount = require("../../../next-auth-tutorial-bfcf9-firebase-adminsdk-p3tv3-0d30ba6838.json");
export const firebaseAdmin =
  getApps()[0] ?? initializeApp({ credential: cert(serviceAccount) });

export const auth = getAuth();
