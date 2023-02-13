<template>
  <div class="overflow-x-hidden flex flex-col">
    <div class="bg w-screen h-screen flex items-center flex-col overflow-x-hidden">
      <Header />
      <h1 class="mt-[8%] text-[48px] text-white font-semibold">Lorem ipsum dolor sit amet</h1>
      <h3 class="mt-[20px] text-[24px] w-[45rem] text-center text-white">Etiam sodales iaculis tortor, id cursus odio viverra id. Curabitur sed risus bibendum.</h3>
      <button class="bg-white px-8 py-4 mt-8 text-[18px] rounded font-semibold text-black hover:bg-sky-300 hover:text-white transition-all duration-300">Book a Consultation</button>
      <p class="mt-[48px] text-center text-white text-[16px]">Recent Transactions</p>
      <Deck class="mt-[20px]"></Deck>
    </div>
     
  </div>
 
</template>


<style>
.bg {
  background-color: black;
  background-image: linear-gradient(rgba(0,0,0,25%), rgba(255,255,255, 5%)), url("../assets/citybg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

html {
  scroll-behavior: smooth;
}
</style>