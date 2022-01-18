<template>
    <section class="md:w-2/5 lg:w-1/5 mx-auto md:mb-5% lg:mb-0">
        <testimonials-card title="Appointment" :icon="icons" body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است" button="درخواست"/>
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