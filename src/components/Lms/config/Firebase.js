import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import {getDatabase} from 'firebase/database'
// The Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTw54B4YuILrwx_cPWZFC5rytTHMBe7VI",
  authDomain: "sail-lms-45a69.firebaseapp.com",
  databaseURL: "https://sail-lms-45a69-default-rtdb.firebaseio.com",
  projectId: "sail-lms-45a69",
  storageBucket: "sail-lms-45a69.appspot.com",
  messagingSenderId: "546353667848",
  appId: "1:546353667848:web:b64c71e03fd669605896bd"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };


// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const Logout = () => {
//   signOut(auth);
//   const navigate= useNavigate()
//   navigate('/login')

// };


  
  // Initialize Firebase
  export {
    auth,
    db
    // sendPasswordReset,
    // Logout,
  };

  
  