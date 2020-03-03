import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAQtimFwRniecljSZfqhiW31oyoYJ9DkT0",
  authDomain: "todoist-493a9.firebaseapp.com",
  databaseURL: "https://todoist-493a9.firebaseio.com",
  projectId: "todoist-493a9",
  storageBucket: "todoist-493a9.appspot.com",
  messagingSenderId: "22677055111",
  appId: "1:22677055111:web:bdaca637a17018724c3a22",
  measurementId: "G-H9TWYGC5ZC"
});

export { firebaseConfig as firebase };
