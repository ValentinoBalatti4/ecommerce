// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqUxeOYkQ1danmx-TD7iGZ9qqNkyCB9uU",
  authDomain: "my-ecommerce-411e7.firebaseapp.com",
  projectId: "my-ecommerce-411e7",
  storageBucket: "my-ecommerce-411e7.appspot.com",
  messagingSenderId: "429818306473",
  appId: "1:429818306473:web:f87e1f386a2e0590cc2eb8",
  measurementId: "G-0EF1J3XPDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;