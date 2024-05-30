import { initializeApp } from "firebase/app";
import { getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwv6rIrIrmj0AkDqUzb6AzIx5Rw8WepUI",
  authDomain: "crwn-clothing-e85f2.firebaseapp.com",
  projectId: "crwn-clothing-e85f2",
  storageBucket: "crwn-clothing-e85f2.appspot.com",
  messagingSenderId: "527369273377",
  appId: "1:527369273377:web:60eef6fe013e006c5a6360"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.getCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect =  () => signInWithRedirect(auth, provider )

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            })
        } catch (error) {
            console.log("error generated from creating user", error)
        }
    }
    return userDocRef;
 
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
    return await signOut(auth)
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)