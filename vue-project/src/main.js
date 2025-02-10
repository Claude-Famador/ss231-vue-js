import { createApp } from 'vue'
import App from './App.vue'
import Comment from './components/Comment.vue'
import CommentForm from './components/CommentForm.vue'
import PersonalInfo from './components/PersonalInfo.vue'

const app = createApp(App)
app.component('personal-info', PersonalInfo)
app.component('comment', Comment)
app.component('comment-form', CommentForm)
app.mount('#app')