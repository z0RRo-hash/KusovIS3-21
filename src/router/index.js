import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ServicesPage from '../pages/ServicesPage.vue';
import PricePage from '../pages/PricePage.vue';
import AboutPage from '../pages/AboutPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/uslugi', component: ServicesPage },
  { path: '/price', component: PricePage },
  { path: '/about', component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
