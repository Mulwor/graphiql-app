import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCim-iZCuVV4cn6ZPY5nf3avCstX1c_7Kc',
  authDomain: 'fir-auth-4c03f.firebaseapp.com',
  projectId: 'fir-auth-4c03f',
  storageBucket: 'fir-auth-4c03f.appspot.com',
  messagingSenderId: '498168737342',
  appId: '1:498168737342:web:382ec0d32ccad8ac312b6f',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
}

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  const res = await createUserWithEmailAndPassword(auth, email, password)
  const user = res.user
  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name,
    authProvider: 'local',
    email,
  })
}

const logout = () => {
  signOut(auth)
}

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout }
