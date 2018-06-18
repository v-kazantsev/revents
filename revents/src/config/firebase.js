import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5xnD1Ts4mhxeXr-2jrM1EGwZ8JJydRPs",
  authDomain: "revents-207402.firebaseapp.com",
  databaseURL: "https://revents-207402.firebaseio.com",
  projectId: "revents-207402",
  storageBucket: "revents-207402.appspot.com",
  messagingSenderId: "952838409062"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
