import { createRouter, createWebHistory , createWebHashHistory } from 'vue-router';
import Employment from '../views/Employment.vue';
import EmploymentReceived from '../views/EmploymentReceived.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import KidsTeensPrivateClasses from '../views/KidsTeensPrivateClasses.vue' ;
import schoolsanddaycares from '../views/schoolsanddaycares.vue' ;

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
           path : '/schools-daycares'  ,
           name : 'schools-daycares'  ,
           component : schoolsanddaycares
       } ,
    {
        path : '/kids-teens-private-classes' ,
        name : 'KidsTeensPrivateClasses' ,
        component : KidsTeensPrivateClasses
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
