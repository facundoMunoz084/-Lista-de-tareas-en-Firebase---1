import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCK2oaFS0DRy9wR1zqwZGSQ6iOXOavOyyk",
    authDomain: "todo-crud-f21ab.firebaseapp.com",
    projectId: "todo-crud-f21ab",
    storageBucket: "todo-crud-f21ab.appspot.com",
    messagingSenderId: "429515334953",
    appId: "1:429515334953:web:97073cf4ac0c277ece4338"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};