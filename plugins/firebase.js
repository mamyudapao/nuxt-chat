import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB4bsP3J2wSsltN_0ZykCXlL_QJbbun1Bg",
  authDomain: "nuxt-fire-chat.firebaseapp.com",
  projectId: "nuxt-fire-chat",
  storageBucket: "nuxt-fire-chat.appspot.com",
  messagingSenderId: "878890562660",
  appId: "1:878890562660:web:06793be53b0e4ae1aa9b71",
  measurementId: "G-83MBDPBS9X"
};
let firebaseApp
if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}
export default firebaseApp;
