import * as firebase from'./fire';

const firebaseConfig = {
  apiKey: "AIzaSyDOUOMcQ2_2KDKEyLrEuyTWryPTJUjlFaY",
  authDomain: "login-b028a.firebaseapp.com",
  projectId: "login-b028a",
  storageBucket: "login-b028a.appspot.com",
  messagingSenderId: "468343693781",
  appId: "1:468343693781:web:39e4c26a01b4eddb295d5c",
  measurementId: "G-WLSRKY2JY0"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

export function initializeApp(firebaseConfig) {
  throw new Error('Function not implemented.');
}
  