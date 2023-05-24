<template>
	<div class="px-8 py-4 bg-grey-darken-3 text-white">
		<div class="d-flex flex-column flex-md-row justify-center gap-4">
			<div class="text-center px-8">
				<h5 class="text-subtitle-1">Telephone</h5>
				<p class="text-body-2">212-269-7271</p>
				<p class="text-body-2">800-606-8844</p>
				<p class="text-body-2">F:212-269-7330</p>
			</div>
			<v-divider vertical></v-divider>
			<div class="text-center px-8">
				<h5 class="text-subtitle-1">Corporate Headquarters</h5>
				<p class="text-body-2">JH Darbie & Co., Inc.</p>
				<p class="text-body-2">48 Wall Street - Suite 1206</p>
				<p class="text-body-2">New York, NY 10005</p>
			</div>
			<v-divider vertical></v-divider>
			<div class="text-center px-8 d-flex flex-column">
				<h5 class="text-subtitle-1">Policy</h5>
				<div class="d-flex gap-4 justify-center">
					<div class="d-flex flex-column align-center align-md-start">
						<NuxtLink class="text-subtitle-1 underline" to="/secrule"
							><p class="text-body-2 underline">SEC Rule 606</p></NuxtLink
						>
						<a
							href="https://www.finra.org/rules-guidance/rulebooks/finra-rules/2265"
							target="_blank"
							rel="noopener noreferrer"
							class="text-body-2 underline"
							>FINRA Rule 2265</a
						>
						<a
							href="/footer/ClientRelationshipSummary.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-body-2 underline"
							>Client Relationship Summary</a
						>
					</div>
					<div class="d-flex flex-column align-center align-md-start">
						<a
							href="/footer/Disclosures.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-body-2 underline"
							>Disclosures</a
						>
						<a
							href=""
							target="_blank"
							rel="noopener noreferrer"
							class="text-body-2 underline"
							>Privacy Policy</a
						>
						<a
							href="/footer/ContinuityPlan.pdf"
							target="_blank"
							rel="noopener noreferrer"
							class="text-body-2 underline"
							>Continuity Plan</a
						>
					</div>
				</div>
			</div>
			<v-divider vertical></v-divider>
			<div class="text-center px-8">
				<h5 class="text-subtitle-1">Links</h5>
				<NuxtLink class="text-subtitle-1 underline" to="/contact"
					><p class="text-body-2 underline">Contact Us</p></NuxtLink
				>

				<a
					href="https://brokercheck.finra.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-body-2 underline"
					>BrokerCheck</a
				>
			</div>
		</div>
		<p class="text-body-2 text-center mt-4">&copy; 2023 JH Darbie & Co.</p>
	</div>
</template>

<style>
.footer {
	background-color: #000814;
}
</style>
