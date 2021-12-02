import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPSqbiHoQl1fAz1Mrr3ovqUJs4jEYz5x4",
  authDomain: "ted-school.firebaseapp.com",
  projectId: "ted-school",
  storageBucket: "ted-school.appspot.com",
  messagingSenderId: "391224762616",
  appId: "1:391224762616:web:9bc6b7982f2e0444b89b0d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
