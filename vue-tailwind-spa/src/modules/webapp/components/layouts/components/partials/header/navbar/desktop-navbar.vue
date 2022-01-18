<template>
  <section class="md:px-5% md:w-full flex">
    <section class="ml-auto w-1/2 hidden md:inline relative ">
      <button class="bg-customOrange font-bold	 text-white transition ease-in-out delay-150 hover:scale-105 rounded-3xl px-6 py-3 absolute right-1/4">
        ثبت درخواست ویزیت
      </button>
    </section>

    <section
    class="flex flex-col md:flex-row items-center justify-between hidden md:flex w-1/2"
  >
    <router-link
      to="/about-us"
      class="py-3 transition ease-in-out delay-150 hover:scale-105 font-bold	"
      :class="{ activeDesktopNavbarElement: $route.name === 'about-us' }"
      >درباره ما</router-link
    >
    <router-link
      to="/services"
      class="py-3 transition ease-in-out delay-150 hover:scale-105 font-bold"
      :class="{ activeDesktopNavbarElement: $route.name === 'services' }"
      >خدمات</router-link
    >
    <router-link
      to="/blog"
      class="py-3 transition ease-in-out delay-150 hover:scale-105 font-bold"
      :class="{ activeDesktopNavbarElement: $route.name === 'blog' }"
      >بلاگ</router-link
    >
    <router-link
      to="/contact-us"
      class="py-3 transition ease-in-out delay-150 hover:scale-105 font-bold"
      :class="{ activeDesktopNavbarElement: $route.name === 'contact-us' }"
      >ارتباط با ما</router-link
    >
    <router-link to="/" class="text-left text-2xl md:text-4xl font-extrabold"
      >MED</router-link
    >
  </section>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.activeDesktopNavbarElement {
  background-color: #e35057;
  padding: 0.75rem 1.5rem;
  color: white;
  border-radius: 0.25rem;
}
</style>
