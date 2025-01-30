import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalInfo from './components/PersonalInfo.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-info', PersonalInfo)
app.mount('#app')