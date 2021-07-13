import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDJzSpksXrBPk3EsqvElZBcd4mSVEORA5E",
    authDomain: "vinos-mielgo-1622234028247.firebaseapp.com",
    projectId: "vinos-mielgo-1622234028247",
    storageBucket: "vinos-mielgo-1622234028247.appspot.com",
    messagingSenderId: "309283166830",
    appId: "1:309283166830:web:46155826ccb1f214ab647f",
    measurementId: "G-3KV1V5HMQD"
  };
firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics;
const storage = firebase.storage;

export { firebase, storage, analytics }