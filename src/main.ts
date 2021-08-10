import { createApp } from 'vue'
import App from './App.vue'
import 'vfonts/Lato.css'
import router from './router'
import naive from 'naive-ui'

// import { NButton,create,NConfigProvider } from 'naive-ui'
// const naive = create({
//     components: [NButton,NConfigProvider]
// })
createApp(App).use(router).use(naive).mount('#app')
