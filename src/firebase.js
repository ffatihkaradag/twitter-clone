import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBBpWU2wCYVyHF5nYIDnmUc6kb4cfQN7OM',
  authDomain: 'twitter-clone-400f5.firebaseapp.com',
  databaseURL: 'https://twitter-clone-400f5.firebaseio.com',
  projectId: 'twitter-clone-400f5',
  storageBucket: 'twitter-clone-400f5.appspot.com',
  messagingSenderId: '766796434129',
  appId: '1:766796434129:web:935f13b8d0f4759f49d3f0',
  measurementId: 'G-36E253W5FN'
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
