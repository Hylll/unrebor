import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/scss/style.scss';

const app = createApp(App)

registerPlugins(app)

app.use(router)
app.mount('#app')
