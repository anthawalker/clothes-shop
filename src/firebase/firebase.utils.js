import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAp1i0ymH5hN6zzNMBPSVbkcMLgkZHZvzw',
  authDomain: 'dapper-designs.firebaseapp.com',
  projectId: 'dapper-designs',
  storageBucket: 'dapper-designs.appspot.com',
  messagingSenderId: '721848424749',
  appId: '1:721848424749:web:eb8675951ed25fbcfe9ba4',
  measurementId: 'G-B9QC32J060',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
