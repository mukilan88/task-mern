import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALL0Xccxbxr8n0rpYzBt6B5C5l89nOyMM",
  authDomain: "task-mern-1d90d.firebaseapp.com",
  projectId: "task-mern-1d90d",
  storageBucket: "task-mern-1d90d.appspot.com",
  messagingSenderId: "521265539023",
  appId: "1:521265539023:web:0174376b1866e97a9fd4ba",
  measurementId: "G-C3Q6L6MS92",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
