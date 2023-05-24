<template>
	<v-app>
		<Header />
		<v-main class="bg d-flex flex-column justify-start">
			<h1 class="text-h2 text-center text-white mt-[10%]">
				Have confidence in your investments.
			</h1>
			<h3 class="text-h5 text-center text-white mt-4">
				Expert Financial Professionals Dedicated to Your Success
			</h3>
			<div class="d-flex self-center mt-8">
				<v-btn size="x-large">Book a consultation</v-btn>
			</div>
		</v-main>
	</v-app>
	<Footer />
</template>

<style>
.bg {
	background-color: black;
	background-image: linear-gradient(
			rgba(0, 0, 0, 40%),
			rgba(255, 255, 255, 10%)
		),
		url("../assets/skyline.jpg");
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

html {
	scroll-behavior: smooth;
}
</style>
