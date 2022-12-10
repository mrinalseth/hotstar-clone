import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD5B1apgdNsZteDOizgG65834Kkq5VFkAw",
    authDomain: "hotstar-clone-3d83f.firebaseapp.com",
    projectId: "hotstar-clone-3d83f",
    storageBucket: "hotstar-clone-3d83f.appspot.com",
    messagingSenderId: "936252685498",
    appId: "1:936252685498:web:59a95df181e45e6d551683"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export {auth, provider, storage}
  export default db