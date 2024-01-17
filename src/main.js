import './css/application.sass'

import { createApp } from 'vue'
import App from './components/App.vue'
import { loadCurrencies } from './currency'

const app = createApp(App)
app.mount('#app')
//console.log("test:", app.hej.test)

// load math.js currencies
loadCurrencies()
setInterval(loadCurrencies, 1000 * 3600 * 4)
