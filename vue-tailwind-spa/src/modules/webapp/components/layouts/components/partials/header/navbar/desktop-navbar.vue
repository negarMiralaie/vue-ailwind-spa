<template>
    <section class="flex flex-col md:flex-row items-center justify-between hidden md:flex md:w-2/3 lg:w-1/2">
      <router-link to="/about-us" class="card"  :class="{activeDesktopNavbarElement: $route.name==='about-us'}">درباره ما</router-link>
      <router-link to="/services" :class="{activeDesktopNavbarElement: $route.name==='services'}">خدمات</router-link>
      <router-link to="/blog" :class="{activeDesktopNavbarElement: $route.name==='blog'}">بلاگ</router-link>
       <router-link to="/contact-us" :class="{activeDesktopNavbarElement: $route.name==='contact-us'}">ارتباط با ما</router-link>
    </section>
</template>

<script>
export default {
};
</script>

<style scoped>
  .activeDesktopNavbarElement{
    background-color:#E35057;
    padding: 0.75rem 1.5rem;
    color: white;
    border-radius: 0.25rem;
  }
</style>