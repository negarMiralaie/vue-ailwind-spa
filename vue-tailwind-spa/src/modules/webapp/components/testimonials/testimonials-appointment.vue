<template>
    <section class="md:w-2/5 lg:w-1/5">
        <testimonials-card title="Appointment" :icon="icons" body="لورم فارسی" button="درخواست"/>
    </section>
</template>

<script>
    export default {
        data(){
           return{
                icons: ['fas', 'calendar-check']
            }
        }
        
    }
</script>