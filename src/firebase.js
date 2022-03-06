import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD30c-dwZ2eLVoX8Uk4Qjv1eZUuWR3X-BA",
  authDomain: "disneyplus-clone-53918.firebaseapp.com",
  projectId: "disneyplus-clone-53918",
  storageBucket: "disneyplus-clone-53918.appspot.com",
  messagingSenderId: "787072469704",
  appId: "1:787072469704:web:b6f03cdbb84e44a68533fd",
  measurementId: "G-WTFRG5N6EV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
