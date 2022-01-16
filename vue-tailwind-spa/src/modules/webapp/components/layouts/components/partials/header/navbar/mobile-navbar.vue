<template>
    <section @click="closeSideNavbar" class="mobile-navbar-bg pointer fixed w-screen bg-[rgba(0,0,0,0.6)] z-10">
      <section class="mobile-navbar-content transform -translate-x-full transition duration-1000 ease-in-out flex gap-8 py-8 text-center flex-col items-center min-h-screen fixed z-20 top-0 right-0 w-full w-1/2 bg-customPink text-black">
    <section class="overflow-hidden hover:bg-white w-full">
      <router-link to="/about-us" class="mobile-navbar-element block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeDesktopNavbarElement: $route.name==='about-us'}">درباره ما</router-link>
    </section>
    <section class="overflow-hidden hover:bg-white w-full">
      <router-link to="/services" class="mobile-navbar-element block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeDesktopNavbarElement: $route.name==='services'}">خدمات</router-link>
    </section>
     <section class="overflow-hidden hover:bg-white w-full">
      <router-link to="/blog" class="mobile-navbar-element block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeDesktopNavbarElement: $route.name==='blog'}">بلاگ</router-link>
    </section>
     <section class="overflow-hidden hover:bg-white w-full">
      <router-link to="/contact-us" class="mobile-navbar-element block py-4 transition ease-in-out delay-150 hover:scale-125" :class="{activeDesktopNavbarElement: $route.name==='contact-us'}">ارتباط با ما</router-link>
    </section>
    </section>
    </section>
</template>

<script>
export default {
  methods:{
    closeSideNavbar(event){
      if(event.target.classList.contains("mobile-navbar-bg") || event.target.classList.contains("mobile-navbar-element")){
        this.$emit('closeSideNavbar');
      }
    }
  }
};
</script>

<style scoped>
  .mobile-navbar-bg{
    min-height:200vh;
    /* background-color: #E35057; */
  }
  .activeDesktopNavbarElement{
    background-color: #F3E217;
  }
</style>