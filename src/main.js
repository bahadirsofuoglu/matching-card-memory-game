import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebase from 'firebase'
import { firebaseConfig } from './data/firebaseConfig'

library.add(fas)
firebase.initializeApp(firebaseConfig)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
