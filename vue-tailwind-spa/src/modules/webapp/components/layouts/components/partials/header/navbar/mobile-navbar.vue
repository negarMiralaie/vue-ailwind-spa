<template>
    <section @click="closeSideNavbar" class="sideNavbarBg fixed w-screen bg-[rgba(0,0,0,0.6)] z-10">
      <section class="sideNavContent transform -translate-x-full transition duration-1000 ease-in-out flex gap-8 py-8 text-center flex-col items-center min-h-screen fixed z-20 top-0 right-0 w-full w-1/2 bg-customBlue text-white">
      <section class="overflow-hidden hover:bg-blue-300 w-full">
      <router-link to="/" class="sideNavElement block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeHorizontalNavElement: $route.name==='Home'}">Home</router-link>
    </section>
    <section class="overflow-hidden hover:bg-blue-300 w-full">
      <router-link to="/about-us" class="sideNavElement block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeHorizontalNavElement: $route.name==='aboutUs'}">About us</router-link>
    </section>
    <section class="overflow-hidden hover:bg-blue-300 w-full">
      <router-link to="/services" class="sideNavElement block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeHorizontalNavElement: $route.name==='services'}">Services</router-link>
    </section>
    <section class="overflow-hidden hover:bg-blue-300 w-full">
      <router-link to="/pricing" class="sideNavElement block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeHorizontalNavElement: $route.name==='pricing'}">Pricing</router-link>
    </section>
    <section class="overflow-hidden hover:bg-blue-300 w-full">
      <router-link to="/testimonial" class="sideNavElement block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeHorizontalNavElement: $route.name==='testimonial'}">Testimonial</router-link>
    </section>
    <section class="overflow-hidden hover:bg-blue-300 w-full">
      <router-link to="/blog" class="sideNavElement block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeHorizontalNavElement: $route.name==='blog'}">Blog</router-link>
    </section>
    <section class="hover:scale-105">
      <router-link to="/navbar-buttons" class="sideNavElement py-4 bg-white px-6 rounded text-black transition ease-in-out delay-150" :class="{activeHorizontalNavElement: $route.name==='buttons'}">Buttons</router-link>
    </section>
    </section>
    </section>
</template>

<script>
export default {
  methods:{
    closeSideNavbar(event){
      if(event.target.classList.contains("sideNavbarBg") || event.target.classList.contains("sideNavElement")){
        this.$emit('closeSideNavbar');
      }
    }
  }
};
</script>

<style scoped>
  .sideNavbarBg{
    min-height:200vh;
  }
  .activeHorizontalNavElement{
    background-color: white;
    color: #2765E7;
  }
</style>