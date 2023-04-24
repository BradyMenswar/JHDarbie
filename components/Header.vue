<template>
	<div class="w-full h-[90px] px-[5%] flex justify-between">
		<div class="h-full flex items-center">
			<img
				class="logo"
				src="../assets/new-logo-white.png"
				alt="JH Darbie & Co."
			/>
		</div>
		<div class="h-full">
			<ul class="h-full flex gap-16 items-center text-[24px] text-white">
				<li class="hover:text-sky-300 duration-[500ms] cursor-pointer">
					<NuxtLink to="/services">Services</NuxtLink>
				</li>
				<li class="hover:text-sky-300 duration-[500ms] cursor-pointer">
					<NuxtLink to="/about">About Us</NuxtLink>
				</li>
				<li class="hover:text-sky-300 duration-[500ms] cursor-pointer">
					<NuxtLink to="/transactions">Firm Transactions</NuxtLink>
				</li>
				<li class="hover:text-sky-300 duration-[500ms] cursor-pointer">
					<NuxtLink to="/resources">Forms</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
.logo {
	height: 75%;
}
</style>
