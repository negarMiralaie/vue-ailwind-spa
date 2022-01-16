
<template>
  <section class="flex items-center py-6">
    <desktop-navbar/>
    <section class="w-12 bg-customPink h-12 rounded-3xl flex items-center justify-center ml-auto md:hidden cursor-pointer">
      <font-awesome-icon :icon="['fas', 'bars']" @click="toggleisMobileNavbarOpen()" class="text-black inline"/>
    </section>
    <mobile-navbar :isMobileNavbarOpen="isMobileNavbarOpen" @closeSideNavbar="closeSideNavbar"/>
      <!-- <router-link to="/" class="text-left text-2xl md:text-3xl font-bold">MED</router-link> -->
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