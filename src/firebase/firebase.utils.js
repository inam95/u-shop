import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAtpUiiKbh0_B9KJOxapGzCYQUmsMw4F0I',
  authDomain: 'u-shop-4ef82.firebaseapp.com',
  databaseURL: 'https://u-shop-4ef82.firebaseio.com',
  projectId: 'u-shop-4ef82',
  storageBucket: 'u-shop-4ef82.appspot.com',
  messagingSenderId: '690837391387',
  appId: '1:690837391387:web:ae8735cdee561a00cbd0be',
  measurementId: 'G-X6VDXC64VS'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
