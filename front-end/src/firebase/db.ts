import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "./firebaseConfig"; // Ensure Firebase is initialized

const db = getDatabase(app);

export const fetchBinsData = (callback: (data: any) => void) => {
  const binsRef = ref(db, "wasteBins");
  onValue(binsRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
