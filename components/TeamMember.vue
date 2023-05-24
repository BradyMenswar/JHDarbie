<template>
	<v-card class="d-flex flex-column flex-md-row mt-4 px-4 py-4" :elevation="2">
		<v-card-item>
			<v-avatar size="x-large">
				<v-img :src="portrait" alt="Headshot"></v-img>
			</v-avatar>
			<v-card-title class="text-[20px] font-semibold">{{ name }}</v-card-title>
			<v-card-subtitle class="text-[18px] font-semibold">{{
				title
			}}</v-card-subtitle>
		</v-card-item>
		<v-card-text>
			{{ description }}
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		portrait: {
			type: String,
			required: true,
		},
	},
};
</script>
