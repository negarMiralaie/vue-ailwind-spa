import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import aboutUs from '../modules/webapp/components/about-us.vue'
import services from "../modules/webapp/components/services.vue";
import blog from "../modules/webapp/components/blog.vue";
import contactUs from "../modules/webapp/components/contact-us.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: aboutUs,
  },
  {
    path: "/services",
    name: "services",
    component: services,
  },
  {
    path: "/blog",
    name: "blog",
    component: blog,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: contactUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
