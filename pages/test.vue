<template>
    <div class="bg w-screen h-screen flex items-center flex-col">
        <Header />
        <h1 class="mt-[12%] text-[48px] text-white font-semibold">Lorem ipsum dolor sit amet</h1>
        <h3 class="mt-[1%] text-[24px] w-[45rem] text-center text-white">Etiam sodales iaculis tortor, id cursus odio viverra id. Curabitur sed risus bibendum.</h3>
        <p class="mt-[5%] text-center text-white text-[16px]">Recent Transactions</p>
        <Deck class="mt-[1%]" />
    </div>
</template>


<style>
.bg {
    background-color: black;
    background-image: linear-gradient(rgba(0,0,0,25%), rgba(255,255,255, 5%)), url("../assets/citybg.png");
    background-size: cover;
    background-repeat: no-repeat;
}
</style>