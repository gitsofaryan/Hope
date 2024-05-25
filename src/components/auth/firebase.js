import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCl46c3gztp8DfM7O4ewkwUNjBnyt9J30",
  authDomain: "vibechat-57009.firebaseapp.com",
  projectId: "vibechat-57009",
  storageBucket: "vibechat-57009.appspot.com",
  messagingSenderId: "338667499289",
  appId: "1:338667499289:web:267e41d5a7af48d6cedf88",
  measurementId: "G-ENZGDYK80R",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
