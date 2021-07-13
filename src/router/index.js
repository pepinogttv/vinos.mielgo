import { createRouter, createWebHistory } from "vue-router";
const lazyLoad = (view) => () => import(`../views/${view}.vue`);
const routes = [
  {
    path: "/",
    name: "Home",
    component: lazyLoad('Home')
  },
  {
    path: "/admin",
    name: "Admin",
    component: lazyLoad('Admin')
  },
  {
    path: "/vinos/:id",
    name: "Vino",
    component: lazyLoad('Vino')
  },
  {
    path: "/admin/:id",
    name: "VinoCrud",
    component: lazyLoad('VinoCrud')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
