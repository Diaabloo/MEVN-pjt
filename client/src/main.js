import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './axios'
import store from './vuex'

// createApp(App).use(router,store).mount('#app')
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
