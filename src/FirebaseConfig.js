import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3dDoOhe35-ij_0z7LdDGrq9XNg0haayI",
  authDomain: "blog-for-windows.firebaseapp.com",
  projectId: "blog-for-windows",
  storageBucket: "blog-for-windows.appspot.com",
  messagingSenderId: "934030907486",
  appId: "1:934030907486:web:5823a1db1cada17ffcbccf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
