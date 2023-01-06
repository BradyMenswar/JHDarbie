<template>
    <div class="w-full mt-[1%] h-[10%] px-[5%] flex justify-between">
        <div class="h-full flex items-center cursor-pointer">
            <NuxtLink to="/" class="logo">
                <img class="h-full" src="../assets/logo.png" alt="JH Darbie & Co.">
            </NuxtLink>
            
        </div>
        <div class="h-full">
            <ul class="h-full flex gap-16 items-center text-[24px] text-black">
                <li class="hover:text-sky-300 duration-[500ms] cursor-pointer"><NuxtLink to="/services">Services</NuxtLink></li>
                <li class="hover:text-sky-300 duration-[500ms] cursor-pointer">Banking</li>
                <li class="hover:text-sky-300 duration-[500ms] cursor-pointer"><NuxtLink to="/transactions">Firm Transactions</NuxtLink></li>
                <li class="hover:text-sky-300 duration-[500ms] cursor-pointer">About Us</li>
            </ul>
        </div>
    </div>
</template>

<style>
    .logo {
        height: 75%;
    }

</style>