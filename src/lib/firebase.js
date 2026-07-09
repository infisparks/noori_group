import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCiDY2tXfTphkwM86FkVMYf-B3m_2ih0jo",
  authDomain: "ambulance-89a48.firebaseapp.com",
  databaseURL: "https://ambulance-89a48-default-rtdb.firebaseio.com",
  projectId: "ambulance-89a48",
  storageBucket: "ambulance-89a48.firebasestorage.app",
  messagingSenderId: "910123117464",
  appId: "1:910123117464:web:4852538866e4a431f599ed",
  measurementId: "G-BS76WR1G13"
};

// Initialize Firebase (safeguarding against duplicate initialization in Hot Reloading)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

export { db, ref, push };
