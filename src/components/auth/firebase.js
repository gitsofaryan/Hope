import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwkwQmgu4Q57cxP1a316qgiTXoL82Xhmk",
  authDomain: "lifestylebot-703b4.firebaseapp.com",
  projectId: "lifestylebot-703b4",
  storageBucket: "lifestylebot-703b4.appspot.com",
  messagingSenderId: "962219481644",
  appId: "1:962219481644:web:829cf1745c8d0c8c48cf89",
  measurementId: "G-NQNJ0HVX82"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
