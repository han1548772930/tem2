import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import 'virtual:windi.css'
import 'uno.css'

// 这里就是vite-plugin-pages生成的路由信息，正常使用即可
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(MotionPlugin)
app.use(router)

app.mount('#app')
