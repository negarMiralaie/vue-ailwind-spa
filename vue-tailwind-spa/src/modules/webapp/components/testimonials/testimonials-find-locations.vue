<template>
    <section class="md:w-2/5 lg:w-1/5 md:mt-4 lg:mt-0">
        <testimonials-card title="Find Locations" :icon="icons" body="لورم فارسی" button="لوکیشن"/>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                icons: ['fas', 'search-location']
            }
        }
        
    }
</script>