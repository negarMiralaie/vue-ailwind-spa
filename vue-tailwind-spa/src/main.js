import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

import aboutUs from './modules/webapp/components/about-us.vue'
import services from './modules/webapp/components/services.vue'
import blog from './modules/webapp/components/blog.vue'
import desktopNavbar from './modules/webapp/components/layouts/components/partials/header/navbar/desktop-navbar.vue'
import mobileNavbar from './modules/webapp/components/layouts/components/partials/header/navbar/mobile-navbar.vue'
import navbar from './modules/webapp/components/layouts/components/partials/header/navbar/navbar.vue'
import contactUs from './modules/webapp/components/contact-us.vue'
import homeHero from './modules/webapp/components/layouts/components/partials/home-partials/home-hero.vue'

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("about-us",aboutUs);
app.component("services", services);
app.component("blog", blog);
app.component("desktop-navbar", desktopNavbar);
app.component("mobile-navbar", mobileNavbar);
app.component("navbar", navbar);
app.component("contact-us", contactUs);
app.component("home-hero", homeHero);

app.use(store).use(router).mount("#app");
