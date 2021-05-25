import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/app.scss'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCog);

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.use(router)
.mount('#app')
