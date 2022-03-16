import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:windi.css'
import 'uno.css'
import { createRouter, createWebHistory } from 'vue-router'
// 这里就是vite-plugin-pages生成的路由信息，正常使用即可
import routes from 'virtual:generated-pages'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
