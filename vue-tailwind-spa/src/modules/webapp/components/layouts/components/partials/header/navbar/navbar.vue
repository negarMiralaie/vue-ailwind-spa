
<template>
  <section class="flex items-center py-6">
    <router-link to="/" class="mr-auto md:w-1/3 lg:w-1/2 text-customBlue font-bold">MED</router-link>
    <horizontal-navbar/>
    <font-awesome-icon :icon="['fas', 'ellipsis-h']" @click="toggleIsOpenSideNavbar()" class="text-black ml-auto inline md:hidden cursor-pointer" />
    <side-navbar v-if="isOpenSideNavbar" @closeSideNavbar="closeSideNavbar"/>
  </section>
  <router-view />
</template>

<script>
export default {
  data(){
    return{
      isOpenSideNavbar : false
    }
  },
  methods:{
    toggleIsOpenSideNavbar(){
      this.isOpenSideNavbar = !this.isOpenSideNavbar;
    },
    closeSideNavbar(payload){
      this.isOpenSideNavbar = !this.isOpenSideNavbar;
    }
  }
}
</script>