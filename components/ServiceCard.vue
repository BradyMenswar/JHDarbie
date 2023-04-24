<template>
	<div class="px-16 py-4 glass2 flex flex-col items-center gap-2">
		<img class="w-24" :src="clock" alt="Icon" />
		<h4 class="mt-2 text-[24px]">{{ text }}</h4>
	</div>
</template>

<style></style>

<script>
export default {
	data() {
		return {
			clock: "~/assets/clock.svg",
		};
	},
	props: {
		text: String,
	},
};
</script>
