import firebase from './firebaseConfig'
const db = firebase
  .firestore()
  .collection('highScore')
  .doc('test')

export const getHighScore = async () => await (await db.get()).data()

export const updateHighScore = async score => await db.update(score)
