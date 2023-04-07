import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCfQ2ouEG1snBX5UflyEr3TvE0F8SXesKw",
    authDomain: "fajrins-work-db.firebaseapp.com",
    projectId: "fajrins-work-db",
    storageBucket: "fajrins-work-db.appspot.com",
    messagingSenderId: "34754191744",
    appId: "1:34754191744:web:a7cc96fef50abce30ba165"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email, uid } = userAuth;
        const createdAt = new Date();

        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
          });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
}