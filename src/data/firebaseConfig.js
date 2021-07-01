import firebase from 'firebase'
const settings = { timestampsInSnapshots: true }

const config = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID
}
firebase.initializeApp(config)
firebase.analytics()
firebase.firestore().settings(settings)

export default firebase
