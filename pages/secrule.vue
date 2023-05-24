<template>
	<v-app>
		<HeaderAlt />
		<v-main class="px-8 mb-4">
			<div class="h-64 bridge4 -mx-8"></div>
			<div class="max-w-[1440px] mx-auto mt-8">
				<h2 class="text-h2 mt-8">SEC Rule 606</h2>
				<h3 class="text-subtitle-1">
					SEC-Required Report on Routing of Customer Orders
				</h3>
				<p class="mt-4 text-body-1">
					The U.S. Securities and Exchange Commission’s client disclosure rule,
					Rule 606, requires all broker-dealers that route orders in equity and
					options securities to make available quarterly reports that present a
					general overview of their routing practices. The reports must identify
					the significant venues to which the client orders were routed for
					execution during the applicable quarter and disclose the material
					aspects of the broker-dealer’s relationship with such venues.
				</p>
				<p class="mt-4 text-body-1">
					Orders routed by JHD Darbie & Co., Inc. can be found
					<a
						class="underline text-blue"
						href="http://ftp.bestxstats.com/jhda/"
						rel="noopener noreferrer"
						target="_blank"
						>here</a
					>**.
				</p>
				<p class="mt-4 text-body-1">
					Orders routed by JHD Darbie & Co., Inc. prior to 2020 can be found
					<a
						class="underline text-blue"
						href="http://ftp.bestxstats.com/jhda/"
						rel="noopener noreferrer"
						target="_blank"
						>here</a
					>.
				</p>
				<p class="mt-4 text-body-1">
					Orders routed & executed by our Clearing firm - AXOS Clearing LLC can
					be found
					<a
						class="underline text-blue"
						href="https://mta.ihsmarkit.com/app-v2/public-report-library/public-report-library-view/Axos%20Clearing%20LLC/359"
						rel="noopener noreferrer"
						target="_blank"
						>here</a
					>.
				</p>

				<v-select
					v-model="select"
					:items="items"
					hint="SEC Rule 606 Reports (Through 2019)"
					item-title="text"
					item-value="link"
					label="Select"
					persistent-hint
					return-object
					single-line
					class="mt-4"
				></v-select>
				<v-btn
					class="mt-2"
					rel="noopener noreferrer"
					target="_blank"
					:href="select.link"
					>View</v-btn
				>
				<p class="mt-4 text-body-2">
					**On occasion JH Darbie & Co. may be exempt from publishing Rule
					606(a) due to having no or de minimis customer routed Held order flow.
				</p>
			</div>
		</v-main>
	</v-app>
	<Footer></Footer>
</template>

<style>
.bridge4 {
	background-image: url("../assets/streetnew.jpg");
	background-position: center;
	background-size: cover;
}
</style>

<script>
export default {
	data() {
		return {
			select: { text: "4th Quarter 2019", link: "/reports/2019Q4.pdf" },
			items: [
				{ text: "4th Quarter 2019", link: "/reports/2019Q4.pdf" },
				{ text: "3rd Quarter 2019", link: "/reports/2019Q3.pdf" },
				{ text: "2nd Quarter 2019", link: "/reports/2019Q2.pdf" },
				{ text: "1st Quarter 2019", link: "/reports/2019Q2.pdf" },
				{ text: "4th Quarter 2018", link: "/reports/2018Q4.pdf" },
				{ text: "3rd Quarter 2018", link: "/reports/2018Q3.pdf" },
			],
		};
	},
};
</script>
