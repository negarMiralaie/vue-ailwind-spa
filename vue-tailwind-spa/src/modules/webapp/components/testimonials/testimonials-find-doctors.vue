<template>
    <section class="md:w-2/5 lg:w-1/5 md:mt-4 lg:mt-0">
        <testimonials-card title="Find Doctors" :icon="icons" body="لورم فارسی" button="دکتر"/>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                icons: ['fas', 'user-md']
            }
        }
        
    }
</script>