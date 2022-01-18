<template>
    <section class="flex flex-col justify-between bg-white shadow-lg p-5% rounded min-h-48" :class="{ openingHours: title === 'Opening Hours' }">
        <section class="flex justify-between">
            <h5>{{title}}</h5>
            <font-awesome-icon :icon="icon" class="text-customPink"/>
        </section>

        <section class="flex flex-col">
            <p class="text-customGray">{{body}}</p>
            <button class="bg-customPink mt-4 rounded block py-4 px-6 transition ease-in-out delay-150 hover:scale-125">{{button}}</button>
        </section>

    </section>
</template>

<script>
    export default {
        props:['title', 'icon', 'body', 'button']  
    }
</script>

<style scoped>
    .openingHours{
        background-color: #E35057;
        color: white;
    }
</style>