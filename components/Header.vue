<template>
	<v-navigation-drawer
		v-model="drawer"
		temporary
		location="right"
		class="d-sm-flex d-md-none"
	>
		<v-list nav dense>
			<v-list-item link to="/services" nuxt>
				<v-list-item-title class="font-weight-bold">
					Services
				</v-list-item-title>
			</v-list-item>

			<v-list-item link to="/about" nuxt>
				<v-list-item-title class="font-weight-bold">
					About Us
				</v-list-item-title>
			</v-list-item>

			<v-list-item link to="/transactions" nuxt>
				<v-list-item-title class="font-weight-bold">
					Firm Transactions
				</v-list-item-title>
			</v-list-item>

			<v-list-item link to="/resources" nuxt>
				<v-list-item-title class="font-weight-bold"> Forms </v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>

	<v-app-bar
		app
		color="transparent"
		class="px-8 align-center d-flex text-white"
		density="prominent"
		width="100"
		:elevation="0"
		:absolute="true"
	>
		<v-toolbar-items class="d-flex align-center">
			<v-btn text to="/" nuxt height="100" variant="plain" :ripple="false">
				<v-img src="/logos/new-logo-white.png" contain width="150"></v-img>
			</v-btn>
		</v-toolbar-items>

		<v-spacer></v-spacer>

		<v-app-bar-nav-icon
			@click="drawer = !drawer"
			class="d-sm-flex d-md-none self-center"
			size="x-large"
			icon="mdi-menu"
		>
		</v-app-bar-nav-icon>

		<v-toolbar-items class="d-none d-md-flex align-center">
			<v-btn
				size="x-large"
				to="/services"
				nuxt
				height="100"
				variant="plain"
				class="font-weight-bold"
				:ripple="false"
			>
				Services
			</v-btn>
			<v-btn
				size="x-large"
				to="/about"
				nuxt
				height="100"
				variant="plain"
				class="font-weight-bold"
				:ripple="false"
			>
				About Us
			</v-btn>
			<v-btn
				size="x-large"
				to="/transactions"
				nuxt
				height="100"
				variant="plain"
				class="font-weight-bold"
				:ripple="false"
			>
				Firm Transactions
			</v-btn>
			<v-btn
				size="x-large"
				to="/resources"
				nuxt
				height="100"
				variant="plain"
				class="font-weight-bold"
				:ripple="false"
			>
				Forms
			</v-btn>
		</v-toolbar-items>
	</v-app-bar>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
		};
	},
};
</script>
