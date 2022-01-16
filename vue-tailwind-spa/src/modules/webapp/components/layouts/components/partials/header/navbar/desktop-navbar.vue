<template>
    <section class="flex flex-col md:flex-row items-center justify-between hidden md:flex md:w-2/3 lg:w-1/2">
    <router-link to="/" :class="{activeHorizontalNavElement: $route.name==='Home'}">Home</router-link>
      <router-link to="/about-us" class="card"  :class="{activeHorizontalNavElement: $route.name==='aboutUs'}">About us</router-link>
      <router-link to="/services" :class="{activeHorizontalNavElement: $route.name==='services'}">Services</router-link>
      <router-link to="/pricing" :class="{activeHorizontalNavElement: $route.name==='pricing'}">Pricing</router-link>
      <router-link to="/testimonial" :class="{activeHorizontalNavElement: $route.name==='testimonial'}">Testimonial</router-link>
      <router-link to="/blog" :class="{activeHorizontalNavElement: $route.name==='blog'}">Blog</router-link>
      <router-link to="/navbar-buttons" class="bg-customBlue py-3 px-6 rounded text-white">Buttons</router-link>
    </section>
</template>

<script>
export default {
};
</script>

<style scoped>
  .activeHorizontalNavElement{
    background-color:#2765E7;
    padding: 0.75rem 1.5rem;
    color: white;
    border-radius: 0.25rem;
  }
</style>