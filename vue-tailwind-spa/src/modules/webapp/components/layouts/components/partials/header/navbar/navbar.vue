
<template>
  <section class="flex items-center justify-between py-6">
    <desktop-navbar/>
    <section class="w-12 bg-customPink h-12 ml-auto rounded-3xl flex items-center justify-center md:hidden cursor-pointer">
      <font-awesome-icon :icon="['fas', 'bars']" @click="toggleisMobileNavbarOpen()" class="text-black inline"/>
    </section>
    <mobile-navbar :isMobileNavbarOpen="isMobileNavbarOpen" @closeSideNavbar="closeSideNavbar"/>
  </section>
  <router-view />
</template>

<script>
export default {
  data(){
    return{
      isMobileNavbarOpen : false
    }
  },
  methods:{
    toggleisMobileNavbarOpen(){
      this.isMobileNavbarOpen = !this.isMobileNavbarOpen;
    },
    closeSideNavbar(payload){
      this.isMobileNavbarOpen = !this.isMobileNavbarOpen;
    }
  }
}
</script>