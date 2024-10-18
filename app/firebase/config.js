import {initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMIAN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;

// const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
// const auth = getAuth(app)

// export {app, auth}

// Import Firebase Auth functions
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// Your Firebase config (replace with your actual config)
// const firebaseConfig = {
//   apiKey: 'your-api-key',
//   authDomain: 'your-auth-domain',
//   projectId: 'your-project-id',
//   storageBucket: 'your-storage-bucket',
//   messagingSenderId: 'your-messaging-sender-id',
//   appId: 'your-app-id',
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// export default auth;
