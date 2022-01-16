
<template>
  <section class="flex items-center py-6">
    <desktop-navbar/>
    <section class="w-12 bg-customPink h-12 rounded-3xl flex items-center justify-center ml-auto md:hidden cursor-pointer">
      <font-awesome-icon :icon="['fas', 'bars']" @click="toggleIsSideNavbarOpen()" class="text-black inline"/>
    </section>
    <mobile-navbar v-if="isSideNavbarOpen" @closeSideNavbar="closeSideNavbar"/>
      <router-link to="/" class="text-left md:w-1/3 lg:w-1/2 text-2xl md:text-3xl font-bold">MED</router-link>
  </section>
  <router-view />
</template>

<script>
export default {
  data(){
    return{
      isSideNavbarOpen : false
    }
  },
  methods:{
    toggleIsSideNavbarOpen(){
      this.isSideNavbarOpen = !this.isSideNavbarOpen;
    },
    closeSideNavbar(payload){
      this.isSideNavbarOpen = !this.isSideNavbarOpen;
    }
  }
}
</script>