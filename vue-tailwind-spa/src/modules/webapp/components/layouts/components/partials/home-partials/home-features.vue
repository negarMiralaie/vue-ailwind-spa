<template>
  <section class="mt-8 p-5% pb-10% md:pb-5% relative">
    <section class="md:w-1/2">
      <small class="mt-4 text-customPink">ویژگی ها</small>
      <h3 class="mt-4 font-bold text-xl">تخصص ما</h3>
      <p class="mt-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون اساسا مورد استفاده قرار گیرد.
      </p>
    </section>

    <section
      class="bg-customYellow shadow-lg rounded-2xl pt-5% md:p-5% ml-5% z-12 mt-8 flex flex-col-reverse md:flex-row-reverse"
    >
      <section class="mt-5% md:mt-0 flex justify-center items-center md:w-2/6">
        <img
          class="w-1/2 bottom-0 right-0 md:w-1/6 absolute md:bottom-42% lg:bottom-60% md:right-55% z-10"
          src="https://www.heathrowe.com/tuts/easypatternsimages/7.gif"
          alt="circle pattern"
        />
        <img
          class="w-full md:w-1/3 md:h-1/3 md:absolute md:bottom-15% lg:bottom-20% lg:h-1/2 md:left-5% rounded-b-2xl md:rounded-2xl shadow-lg z-20"
          src="https://www.verywellhealth.com/thmb/JyVJmPFnrUe5mWbesKHsufm2qBE=/1997x1501/filters:no_upscale():max_bytes(150000):strip_icc()/surgeon-GettyImages-200140323-001-578ce4ab5f9b584d20ce3d9f.jpg"
          alt="surgery"
        />
      </section>
      <section class="flex flex-col justify-center md:w-4/6 px-5% md:px-0">
        <section class="flex justify-start items-center mt-4 md:mt-0">
          <section
            class="bg-customPink w-12 text-white h-12 rounded-3xl flex items-center justify-center"
          >
            <font-awesome-icon
              :icon="['fas', 'hospital']"
              class="text-white inline scale-150"
            />
          </section>
          <p class="mr-4">ویزیت آنلاین</p>
        </section>
        <section class="flex flex-col items-start">
          <small class="mt-4 text-customDarkGray"
            >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد جوابگوی سوالات پیوسته اهل
            دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</small
          >
          <button
            class="mt-4 bg-customOrange hover:bg-customPink text-white mt-4 rounded-3xl block py-3 px-6 transition ease-in-out delay-150 hover:scale-105 cursor-pointer"
          >
            ادامه مطلب
          </button>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
export default {};
</script>
