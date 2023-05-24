<template>
	<v-card width="40%" min-width="300" :elevation="2">
		<v-card-item>
			<v-icon :icon="icon" size="x-large" class=""></v-icon>
			<v-card-title>{{ title }}</v-card-title>
		</v-card-item>
		<v-card-subtitle>{{ subtitle }}</v-card-subtitle>
		<v-card-text>{{ text }}</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},

		icon: {
			type: String,
			required: true,
		},
	},
};
</script>
