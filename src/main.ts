import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Welcome from '@/components/Welcome.vue';
import Appointment from '@/components/Appointment.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/rendez-vous', component: Appointment },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');
