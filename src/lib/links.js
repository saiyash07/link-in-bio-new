import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase";

export async function getUserLinks(userId) {
  if (!userId) return [];
  const q = query(collection(db, "users", userId, "links"), orderBy("order", "asc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}