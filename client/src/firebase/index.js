import firebase from "firebase/app";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCp7HG43i7vQmHk65ZE7_IilijGoBIh88w",
  authDomain: "share-storage-86abb.firebaseapp.com",
  projectId: "share-storage-86abb",
  storageBucket: "share-storage-86abb.appspot.com",
  messagingSenderId: "711138272253",
  appId: "1:711138272253:web:821017751887aa972d6f94"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export { storage, firebase as default }

