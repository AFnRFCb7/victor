import { createRouter, createWebHistory , createWebHashHistory } from 'vue-router';
import Employment from '../views/Employment.vue';
import EmploymentReceived from '../views/EmploymentReceived.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  } ,
  {
     path: '/about',
     name: 'About',
     component: About
   } ,
  {
    path : '/employment',
    name : 'Employment',
    component : Employment
   } ,
  {
    path : '/employment-received',
    name : 'EmploymentReceived',
    component : EmploymentReceived
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;