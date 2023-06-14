<template>
	<v-app>
		<HeaderAlt></HeaderAlt>
		<v-main class="px-8 mb-4">
			<div class="d-flex align-center flex-column gap-4">
				<v-img :width="250" cover src="/logos/alert.png"></v-img>
				<h1 class="text-h3 mt-8">Something went wrong.</h1>
				<h3 class="text-subtitle-1">
					This content may not currently be available or there was an error.
					Please try again later.
				</h3>
				<v-btn
					><NuxtLink to="/"
						><p class="text-button">Return to home page</p></NuxtLink
					></v-btn
				>
			</div>
		</v-main>
		<Footer></Footer>
	</v-app>
</template>
