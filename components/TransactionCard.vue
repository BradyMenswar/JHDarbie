<template>
	<div class="px-16 py-4 glass flex flex-col items-center gap-2 text-black">
		<img class="w-24" :src="logoUrl" alt="Company Logo" />
		<h4 class="mt-2 text-[24px]">$100,000</h4>
		<p class="text-[16px]">Convertible Note</p>
	</div>
</template>

<script>
export default {
	props: {
		logoUrl: String,
	},
};
</script>
