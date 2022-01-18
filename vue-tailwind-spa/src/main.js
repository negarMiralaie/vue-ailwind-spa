import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assetes/css/style.css'

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
import testimonialsCard from './modules/webapp/components/testimonials/testimonials-card.vue'
import testimonialsOpeningHours from './modules/webapp/components/testimonials/testimonials-opening-hours.vue'
import testimonialsAppointment from './modules/webapp/components/testimonials/testimonials-appointment.vue'
import testimonialsFindDoctors from './modules/webapp/components/testimonials/testimonials-find-doctors.vue'
import testimonialsFindLocations from './modules/webapp/components/testimonials/testimonials-find-locations.vue'
import testimonials from './modules/webapp/components/testimonials/testimonials.vue'

import homeAbout from './modules/webapp/components/layouts/components/partials/home-partials/home-about.vue'
import homeServices from './modules/webapp/components/layouts/components/partials/home-partials/home-services.vue'
import homeFeatures from './modules/webapp/components/layouts/components/partials/home-partials/home-features.vue'

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
app.component("testimonials-card", testimonialsCard);
app.component("testimonials-opening-hours", testimonialsOpeningHours);
app.component("testimonials-appointment", testimonialsAppointment);
app.component("testimonials-find-doctors", testimonialsFindDoctors);
app.component("testimonials-find-locations", testimonialsFindLocations);
app.component("testimonials", testimonials);
app.component("home-about", homeAbout);
app.component("home-services", homeServices);
app.component("home-features", homeFeatures);

app.use(store).use(router).mount("#app");
