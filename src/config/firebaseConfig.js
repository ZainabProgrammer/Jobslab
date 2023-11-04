import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGD0CivbuhEkv7SsHeIHPR-4b8MtqhsYs",
  authDomain: "jobslab-915a6.firebaseapp.com",
  projectId: "jobslab-915a6",
  storageBucket: "jobslab-915a6.appspot.com",
  messagingSenderId: "69626704885",
  appId: "1:69626704885:web:b85f5096ef47062f9aa6bc",
  measurementId: "G-5J922X36VR",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default firebaseConfig;
