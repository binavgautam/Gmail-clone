import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCb8G4_5knkd16Iff9ezzEKKXjmgV1wnM8",
  authDomain: "clone-3d75e.firebaseapp.com",
  projectId: "clone-3d75e",
  storageBucket: "clone-3d75e.appspot.com",
  messagingSenderId: "362303506470",
  appId: "1:362303506470:web:2ffe8c89860272da993ee7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
