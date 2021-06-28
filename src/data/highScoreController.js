import firebase from './firebaseConfig'
const db = firebase.firestore().collection('highScore')

export const getHighScore = async () => {
  const highScore = await db.doc('test').get()

  return highScore
}

export const updateHighScore = async score => {
  console.log(process.env.VUE_APP_APIKEY)
  console.log(score)
  await db.doc('test').update(score)
}
