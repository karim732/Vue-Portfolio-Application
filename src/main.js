/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// only one of styles and scss should be used
// import 'vuetify/styles'
import './main.scss'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
