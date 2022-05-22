import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '@/router';
import App from '@/app.vue';

import '@/assets/style/main.scss';

const app = createApp(App);
app.use(router).use(createPinia()).mount('#app');
