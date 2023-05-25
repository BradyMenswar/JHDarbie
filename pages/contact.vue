<template>
	<v-app>
		<HeaderAlt />
		<v-main class="px-8 mb-4">
			<div class="h-64 contact -mx-8"></div>
			<div class="max-w-[1440px] mx-auto mt-8">
				<h2 class="text-h2 mt-8">Contact Us</h2>
				<form class="mt-8">
					<v-text-field
						v-model="state.name"
						:error-messages="v$.name.$errors.map((e) => e.$message)"
						:counter="10"
						label="Name"
						required
						@input="v$.name.$touch"
						@blur="v$.name.$touch"
					></v-text-field>

					<v-text-field
						v-model="state.email"
						:error-messages="v$.email.$errors.map((e) => e.$message)"
						label="E-mail"
						required
						@input="v$.email.$touch"
						@blur="v$.email.$touch"
					></v-text-field>

					<v-text-field
						v-model="state.subject"
						:error-messages="v$.subject.$errors.map((e) => e.$message)"
						label="Subject"
						@input="v$.subject.$touch"
						@blur="v$.subject.$touch"
					></v-text-field>

					<v-textarea
						v-model="state.message"
						:error-messages="v$.message.$errors.map((e) => e.$message)"
						label="Message"
						required
						@input="v$.message.$touch"
						@blur="v$.message.$touch"
					></v-textarea>

					<v-btn class="me-4" @click="v$.$validate"> submit </v-btn>
					<v-btn @click="clear"> clear </v-btn>
				</form>
			</div>
		</v-main>
	</v-app>
	<Footer></Footer>
</template>

<style>
.contact {
	background-image: url("../assets/contact.jpg");
	background-position: center;
	background-size: cover;
}
</style>

<script>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
export default {
	setup() {
		const initialState = {
			name: "",
			email: "",
			subject: "",
			message: "",
		};
		const state = reactive({
			...initialState,
		});
		const rules = {
			name: { required },
			email: { required, email },
			subject: {},
			message: { required },
		};
		const v$ = useVuelidate(rules, state);
		function clear() {
			v$.value.$reset();
			for (const [key, value] of Object.entries(initialState)) {
				state[key] = value;
			}
		}
		return { state, clear, v$ };
	},
};
</script>
