import { getApp, getApps, initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMIAN,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const auth = getAuth(app)

export {app, auth}