import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBeiF_LfP5JetYKfe9j4nnpiHFh2eqTSmI",
    authDomain: "auth-development-85e82.firebaseapp.com",
    projectId: "auth-development-85e82",
    storageBucket: "auth-development-85e82.appspot.com",
    messagingSenderId: "592366402470",
    appId: "1:592366402470:web:ed8ee653603d04ab422d67"
})

export const auth = app.auth();
export default app