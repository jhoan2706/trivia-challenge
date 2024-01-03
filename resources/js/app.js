// resources/js/app.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Make sure this path is correct

// Import Bulma styles
import '../css/app.css';

const app = createApp(App);
app.use(store); // Use Vuex before Vue Router
app.use(router);

app.mount('#app');
