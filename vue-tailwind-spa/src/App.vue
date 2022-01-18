<template>
  <section id="nav">
    <!-- <router-link to="/" >Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <navbar/>
    <Home v-if="$route.name==='Home'"/>
  </section>
  <!-- <router-view/> -->
</template>

<style scoped>
  body{
    box-sizing: border-box;
  }
</style>