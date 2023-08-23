import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr1Lv5beaTjKOfxw_zlKAvvruQcQ31aKk",
  authDomain: "nativelindomar.firebaseapp.com",
  projectId: "nativelindomar",
  storageBucket: "nativelindomar.appspot.com",
  messagingSenderId: "370071930923",
  appId: "1:370071930923:web:c6a23a48dfacadb814c26e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app