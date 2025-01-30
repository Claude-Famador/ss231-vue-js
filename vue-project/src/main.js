import { createApp } from 'vue'
import App from './App.vue'
import PersonalInfo from './components/PersonalInfo.vue'

const app = createApp(App)
app.component('personal-info', PersonalInfo)
app.mount('#app')