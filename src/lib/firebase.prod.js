import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config = {
  apiKey: "AIzaSyBXhjU7HqZBNKYZz8oyQS14LrmVUl-HY-I",
  authDomain: "netflix2-b4b1b.firebaseapp.com",
  projectId: "netflix2-b4b1b",
  storageBucket: "netflix2-b4b1b.appspot.com",
  messagingSenderId: "695100000587",
  appId: "1:695100000587:web:d1a566524199cf2c7f00ce"
}

const firebase = Firebase.initializeApp(config)

export { firebase }