import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAeHeaft3aJtY2IBIK13LYQhdjIiNEohoo",
  authDomain: "down-ut-load.firebaseapp.com",
  databaseURL: "https://down-ut-load-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "down-ut-load",
  storageBucket: "down-ut-load.appspot.com",
  messagingSenderId: "449895751087",
  appId: "1:449895751087:web:46826c0a001459aace635a"
};

const firebaseApp = initializeApp(firebaseConfig);

// Récupérer les instances des différents services Firebase
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);
const storageRef = ref(getStorage(firebaseApp))

export { auth, storage, db, storageRef };

