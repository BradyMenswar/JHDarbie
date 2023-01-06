<template>
    <div class="px-16 py-4 glass flex flex-col items-center gap-2">
        <img class="w-24" :src="clock" alt="Icon">
        <h4 class="mt-2 text-[24px]">{{ text }}</h4>

    </div>
</template>

<style>
    .glass {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);

    }
</style>

<script>
    export default {
        data() {
            return {
                clock: "~/assets/clock.svg"
            }
        },
        props: {
            text: String,
        }

    }

</script>