import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getUserProfile(slug) {
  if (!slug) return null;
  const ref = doc(db, "users", slug);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}