import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCZ4fK5PyTadTO60SDR0iwMoOmirTXB308",
  authDomain: "sistema-b163a.firebaseapp.com",
  projectId: "sistema-b163a",
  storageBucket: "sistema-b163a.appspot.com",
  messagingSenderId: "97053880901",
  appId: "1:97053880901:web:a7b8a28c81c4c65481292c",
  measurementId: "G-XDRQLVXYNM"
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}


export default firebase;