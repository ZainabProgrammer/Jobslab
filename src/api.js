import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseConfig from "./config/firebaseConfig";

export const fetchJobsData = async () => {
  try {
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, "Jobs");
    const querySnapshot = await getDocs(colRef);
    const jobsData = querySnapshot.docs.map((doc) => doc.data());
    return jobsData;
  } catch (error) {
    console.error("Error fetching Firestore data:", error.message);
    return [];
  }
};

export const fetchCandidates = async () => {
  try {
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const colRef = collection(db, "candidates");
    const querySnapshot = await getDocs(colRef);
    const candsData = querySnapshot.docs.map((doc) => doc.data());
    return candsData;
  } catch (error) {
    console.error("Error fetching Firestore data:", error.message);
    return [];
  }
};
