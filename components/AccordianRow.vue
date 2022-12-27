<template>
    <div class="bg-blue-200 px-8 py-4 flex flex-col gap-2 border-b-[1px] border-gray-400">
        <div class="flex w-full justify-between">
            <h1 class="text-[24px]">{{ title }}</h1>
            <button @click="toggleAccordian">{{ test ? "^" : "V" }}</button>
        </div>
        <p :class="{open: test, close: !test}" class="text-[16px]">{{ body }}</p>
    </div>
</template>

<script>

export default {
    data() {
        return{
            test: false
        }
    },
    props: {
        title: String,
        body: String,
    },
    methods: {
        toggleAccordian() {
            this.test = !this.test;
        }
    }
}


</script>

<style>
    .close {
        opacity: 0;
        transform: translateY(-25px);
        max-height: 0;
        transform-origin: top;
        transition: opacity 0.15s, transform 0.25s, max-height 0.5s;

    }
    .open {
        opacity: 1;
        transform: translateY(0px);
        max-height: 300px;
        transform-origin: top;
        transition: opacity 0.5s, transform 0.5s, max-height 0.5s;
    }
</style>