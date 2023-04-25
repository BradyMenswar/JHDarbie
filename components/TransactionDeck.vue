<template>
	<h3 :id="year" :class="anchorClass" class="px-24 text-[32px] font-semibold">
		{{ year }}
	</h3>
	<div
		class="justify-center px-10 py-8 w-full flex flex-wrap gap-4 overflow-x-auto"
	>
		<article
			v-for="item in tombstones.slice().reverse()"
			class="min-w-[18rem] px-8 py-4 glass2 flex flex-col items-center gap-2 text-black h-min"
		>
			<div class="w-36 h-32 flex items-center justify-center">
				<img class="w-fit max-h-full" :src="item.img" alt="Company Logo" />
			</div>
			<h4 class="text-[24px]">${{ item.amount.toLocaleString("en-US") }}</h4>
			<p class="text-[16px]">{{ item.type }}</p>
			<div class="flex items-center mt-2 gap-4">
				<p class="tag text-[14px]">{{ item.finder }}</p>
				<p class="text-[16px]">
					{{
						item.date.toLocaleDateString("default", {
							month: "long",
							year: "numeric",
						})
					}}
				</p>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	props: {
		tombstones: {
			type: Array,
		},
		year: {
			type: String,
		},
		pt: {
			type: String,
		},
		mt: {
			type: String,
		},
	},
	computed: {
		anchorClass() {
			return `pt-[${this.pt}] mt-[${this.mt}]`;
		},
	},
};
</script>
