
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZ4fK5PyTadTO60SDR0iwMoOmirTXB308",
  authDomain: "sistema-b163a.firebaseapp.com",
  projectId: "sistema-b163a",
  storageBucket: "sistema-b163a.appspot.com",
  messagingSenderId: "97053880901",
  appId: "1:97053880901:web:a7b8a28c81c4c65481292c",
  measurementId: "G-XDRQLVXYNM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;