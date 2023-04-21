// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7AzTNYSKZlAqXwRRaKrEcMla5ZY9OZZM",
  authDomain: "kelflix-b208d.firebaseapp.com",
  projectId: "kelflix-b208d",
  storageBucket: "kelflix-b208d.appspot.com",
  messagingSenderId: "702623591947",
  appId: "1:702623591947:web:3fb9b709f7a38d9b20610e",
}

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig)
// Use these for db & auth
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }
