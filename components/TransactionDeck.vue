<template>
	<div>
		<h3 :id="year" class="text-h4 mb-4">
			{{ year }}
		</h3>
		<div class="d-flex flex-wrap gap-4 justify-center mb-8">
			<v-card
				width="275"
				class="py-8 px-4 d-flex flex-column align-center"
				:elevation="2"
				v-for="item in tombstones.slice().reverse()"
			>
				<v-img height="50" fit :src="item.img" alt="Company Logo"> </v-img>
				<v-card-title class="text-[24px]"
					>${{ item.amount.toLocaleString("en-US") }}</v-card-title
				>
				<v-card-subtitle class="text-[16px]">{{ item.type }}</v-card-subtitle>

				<v-card-text class="text-[16px]">
					{{
						item.date.toLocaleDateString("default", {
							month: "long",
							year: "numeric",
						})
					}}
				</v-card-text>
				<!-- <v-chip variant="flat" color="success">{{ item.finder }}</v-chip> -->
			</v-card>
		</div>
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
	computed: {},
};
</script>
