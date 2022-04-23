import firebaseApp from "./Firebase";
import firebase from "firebase/app";
//import * as firebase from "firebase";
const db = firebase.firestore(firebaseApp);

export async function isUserAdmin(uid) {
  const response = await db
    .collection("admins")
    .doc(uid)
    .get();
  return response.exists;
}



