<template>
    <section class="flex flex-col justify-center md:flex-row-reverse p-5%">
        <section class="home-hero-text md:w-1/2 md:mr-8 flex-col items-end space-14">
            <small class="mt-8 text-customPink">پزشکی</small>
            <h2 class="mt-4 font-bold text-xl">راه های مراقبت از سلامت</h2>
            <p class="mt-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            <button class="bg-customPink mt-4 hover:bg-customYellow rounded-3xl block py-3 px-6 transition ease-in-out delay-150 hover:scale-105">خواندن</button>
        </section>

        <section class="min-h-80vw relative md:static md:min-h-0 flex justify-center items-center mt-8 md:mt-0 md:w-1/2 md:ml-8">
            <section class="absolute bottom-0 right-0 w-4/6 h-4/6 md:w-44% md:h-3/6 lg:w-40% lg:h-45% md:top-0 md:right-0 bg-customPink z-12 shadow-lg rounded-bl-2xl"></section>
            <section class="absolute bottom-0 right-0 w-1/6 h-1/6 md:w-25% md:h-1/5 lg:w-25% lg:h-1/5 xl:w-20% md:top-0 md:right-0 bg-red-700 z-12 rounded-bl-2xl"></section>

            <section class="w-4/5 md:w-full md:h-1/3 lg:w-80% lg:h-2/3 flex items-center justify-center bg-customYellow shadow-lg rounded-2xl relative">
                <img src="../../../../../../../assetes/images/hero-img.png" alt="doctors picture" class="md:w-4/6 rounded-2xl md:absolute md:bottom-0">
                <img class="absolute top-125% left-115% w-1/3 z-11" src="https://www.heathrowe.com/tuts/easypatternsimages/7.gif" alt="circle pattern">
                <img class="absolute bottom-125% right-115% w-1/3 z-11" src="https://www.heathrowe.com/tuts/easypatternsimages/7.gif" alt="circle pattern">

                <section class="shadow-lg rounded-2xl bg-white w-14 h-14 md:h-20 md:w-20 lg:w-32 lg:h-32 z-50 absolute top-15% right-105% lg:right-115% flex items-center justify-center">
                        <section class="bg-blue-400 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-24 lg:h-24 flex items-center justify-center">
                            <font-awesome-icon :icon="['fas', 'stethoscope']" class="text-white text-2xl lg:text-6xl z-60"/>
                        </section>
                </section>

                <section class="shadow-lg rounded-2xl bg-white w-14 h-14 md:h-20 md:w-20 lg:w-32 lg:h-32 z-50 absolute bottom-110% left-105% md:left-110% lg:left-120% xl:left-110% flex items-center justify-center">
                        <section class="bg-purple-400 rounded-full w-12 h-12 md:w-14 md:h-14 lg:w-24 lg:h-24 flex items-center justify-center">
                            <font-awesome-icon :icon="['fas', 'notes-medical']" class="text-white text-2xl lg:text-6xl z-60"/>
                        </section>
                </section>

            </section>
        </section>
    </section>
</template>

<script>
export default {
        
    }
</script>