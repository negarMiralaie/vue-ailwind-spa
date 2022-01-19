<template>
  <section class="md:w-2/5 lg:w-1/5 mx-auto my-5% md:my-0">
    <testimonials-card
      title="Find Doctors"
      :icon="icons"
      body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است"
      button="دکتر"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: ["fas", "user-md"],
    };
  },
};
</script>
