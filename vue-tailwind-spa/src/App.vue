<template>
  <section id="nav">
    <!-- <router-link to="/" >Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <navbar/>
    <Home v-if="$route.name==='Home'"/>
  </section>
  <!-- <router-view/> -->
</template>

<style>
  *{
    box-sizing: border-box;
    /* margin: 0; */
    padding: 0;
  }
</style>