import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupI18n } from './i18n'

import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

async function bootstrap() {
  await setupI18n(app)
  app.mount('#app')
}

bootstrap()
