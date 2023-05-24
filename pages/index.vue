<template>
	<v-app class="bg">
		<Header />
		<v-main class="d-flex flex-column justify-start mb-8 justify-center">
			<h1 class="text-h4 text-md-h2 text-center text-white">
				Have confidence in your investments.
			</h1>
			<h3 class="text-subtitle-1 text-md-h5 text-center text-white mt-4">
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

body {
}

html {
	scroll-behavior: smooth;
}
</style>
