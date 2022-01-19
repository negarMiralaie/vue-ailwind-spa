<template>
  <section class="md:w-2/5 lg:w-1/5 mx-auto">
    <testimonials-card
      title="Find Locations"
      :icon="icons"
      body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است"
      button="لوکیشن"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: ["fas", "search-location"],
    };
  },
};
</script>
