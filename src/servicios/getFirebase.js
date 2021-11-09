import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {

  apiKey: "AIzaSyCRhApU2YgdiYGztr7Zmd5GPEYBxwVnwXc",

  authDomain: "millfiore-coderhouse.firebaseapp.com",

  projectId: "millfiore-coderhouse",

  storageBucket: "millfiore-coderhouse.appspot.com",

  messagingSenderId: "949244642184",

  appId: "1:949244642184:web:a5c527118cc21d8096b03d"

};

  


const app = firebase.initializeApp(firebaseConfig)


export function getFirestore(){
    return firebase.firestore(app)
}