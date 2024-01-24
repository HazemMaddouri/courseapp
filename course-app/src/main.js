import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useRunningStore } from './stores/running'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//onMounted(() => useRunningStore.fetchDataFromAPI())
/*if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then((registration) => {
      console.log('Service worker registered with scope:', registration)
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error)
    })
}*/