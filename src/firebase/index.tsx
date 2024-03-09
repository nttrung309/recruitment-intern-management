// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPAR71RW9JvPdreJv-gozG7EkFa-cp2AM",
  authDomain: "recruitment-intern-management.firebaseapp.com",
  projectId: "recruitment-intern-management",
  storageBucket: "recruitment-intern-management.appspot.com",
  messagingSenderId: "187202742301",
  appId: "1:187202742301:web:847cc3438c3b7f2e5b7ef4",
  measurementId: "G-H47MCS2TXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;
export {analytics, db};