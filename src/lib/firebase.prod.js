import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// we need to somehow seed the database

// we need a config here
const config = {
    apiKey: "AIzaSyAtAy_aAJJYsk6Ysfmuwnw0BJljpnmuk8M",
    authDomain: "netflix-clone-548b8.firebaseapp.com",
    projectId: "netflix-clone-548b8",
    storageBucket: "netflix-clone-548b8.appspot.com",
    messagingSenderId: "416878083951",
    appId: "1:416878083951:web:c2801c46b64d880166f29a"
};

const firebase = Firebase.initializeApp(config)

export { firebase }