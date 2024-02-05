import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUser)
library.add(faBasketShopping)
library.add(faBars)
library.add(faRectangleXmark)


createApp(App)
.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
