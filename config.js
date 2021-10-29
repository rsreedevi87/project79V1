import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC7WEg4x-INtbx-66uyjpvdTZssz-FwizI",
  authDomain: "racing-81971.firebaseapp.com",
  databaseURL: "https://racing-81971-default-rtdb.firebaseio.com",
  projectId: "racing-81971",
  storageBucket: "racing-81971.appspot.com",
  messagingSenderId: "860747858117",
  appId: "1:860747858117:web:26c1c71204cfcf21d5f0ac"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
