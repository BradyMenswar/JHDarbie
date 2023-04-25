<template>
	<div
		:class="widthClass"
		class="glass2 aspect-square rounded-lg flex flex-col items-center justify-center text-center gap-4 p-4 min-w-[250px]"
	>
		<Icon class="" v-bind:name="icon" />
		<h3 class="text-[24px]">{{ title }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
		width: {
			type: String,
			required: true,
		},
	},
	computed: {
		widthClass() {
			return `w-[${this.width}]`;
		},
	},
};
</script>
