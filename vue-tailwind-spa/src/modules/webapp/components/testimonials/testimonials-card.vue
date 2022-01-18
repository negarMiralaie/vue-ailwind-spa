<template>
    <section class="flex flex-col bg-white rounded-2xl shadow-lg p-5% min-h-72" :class="{ openingHours: title === 'Opening Hours' }">
            <section class="flex justify-between mb-auto items-center">
                <h5>{{title}}</h5>
                <font-awesome-icon :icon="icon" class="text-customPink text-3xl" :class="{ openingHours: title === 'Opening Hours' }"/>
            </section>
            <section class="flex flex-col mb-auto text-customDarkGray">
                    <p>{{body}}</p>
            </section>
            <section v-if="button" class="inline mb-auto ml-auto">
                <button class="bg-customPink py-3 px-6 transition ease-in-out delay-150 hover:scale-105 hover:bg-customYellow rounded-3xl">{{button}}</button>
            </section> 
            <section v-else class="flex flex-col text-customLightGray">
                <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
            </section>
    </section>
</template>

<script>
    export default {
        props:['title', 'icon', 'body', 'button']  
    }
</script>