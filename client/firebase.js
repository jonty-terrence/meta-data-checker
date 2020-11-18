import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDlvYyJk13Oa2dIb5TlmuFRvTyfTZ6b-44',
  authDomain: 'meta-data-checker.firebaseapp.com',
  databaseURL: 'https://meta-data-checker.firebaseio.com',
  projectId: 'meta-data-checker',
  storageBucket: 'meta-data-checker.appspot.com',
  messagingSenderId: '275652737293',
  appId: '1:275652737293:web:e32267586219ff64bb1844',
  measurementId: 'G-BP0VV7EMG4'
}

const db = firebase.initializeApp(firebaseConfig)

export default db
