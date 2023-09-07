import { createApp } from 'vue';
import { registerPlugins } from './plugins';
import App from './App.vue';
import router from './router';
import './assets/scss/style.scss';
/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);

registerPlugins(app);
library.add(fas, fab);

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
