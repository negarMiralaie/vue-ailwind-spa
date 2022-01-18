<template>
  <section class="home">
    <home-hero/>
    <testimonials/>
    <home-about/>
    <home-services/>
    <home-features/>
    <home-schedule/>
  </section>
</template>

<script>
import HomeSchedule from '../modules/webapp/components/layouts/components/partials/home-partials/home-schedule.vue'

export default {
  name: 'Home',
  components: {HomeSchedule}
}
</script>
