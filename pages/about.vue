<template>
	<v-app>
		<HeaderAlt></HeaderAlt>
		<v-main class="px-8 mb-4">
			<div class="h-64 city -mx-8"></div>
			<div id="about" class="max-w-[1440px] mx-auto mt-8">
				<article class="flex flex-col gap-2">
					<h2 class="text-h2 font-semibold">Our Team</h2>
					<p class="text-body-1">
						JH Darbie & Co. was founded in 1997 by Robert Rabinowitz. Over the
						past 20 years, Mr. Rabinowitz has completed the acquisition of
						several competing retail brokers/dealers including an online
						brokerage operation. After successfully consolidating operations, JH
						Darbie & Co. has emerged as a broker-dealer providing a full range
						of financial services with its New York City corporate headquarters
						strategically located on Wall Street. Over the past few years of
						financial turmoil, JH Darbie remained strong and grew organically
						with the addition of three US branch office locations. Currently,
						there are plans for additional expansion. With the synergies from
						our institutional sales & trading divisions, JH Darbie has become an
						invaluable resource for companies seeking both domestic and
						international capital. We proudly continue to complete numerous
						financing and advisory assignments for public and private companies.
					</p>
				</article>
				<TeamMember
					name="Robert Rabinowitz"
					title="CPA President, CEO"
					portrait="portraits/avatar.png"
					description="Robert Rabinowitz is President and CEO of JH Darbie & Co. (a FINRA, SIPC,
				and MSRB member firm) which is a full-service investment bank and
				brokerage firm. Robert oversees all investment banking, institutional
				sales & trading, and retail brokerage operations at JH Darbie. Since
				Robert founded JH Darbie in 1997, Robert has completed the acquisition of
				several competing retail broker-dealers and an online brokerage operation
				which he successfully consolidated into a New York City corporate
				headquarters located on Wall Street with three additional US branch office
				locations. Over the last decade, Robert expanded JH Darbie's powerful
				retail and online brokerage operations to create and integrate such
				operations into an exceptionally powerful institutional sales & trading
				division. Robert further leveraged JH Darbie's extensive institutional and
				retail capabilities as an invaluable resource for companies seeking both
				domestic and international capital and completed numerous financing and
				advisory assignments for public and private companies. Robert is a
				licensed Certified Public Accountant (`CPA`), as well as, holding numerous
				FINRA securities licenses, including an MSP, CROP, and GP."
				></TeamMember>

				<p class="text-body-1 my-4">
					If you are interested in a career opportunity with JH Darbie & Co.,
					please submit your resume either by emailing the PDF or MS Word format
					versions to recruiter@jhdarbie.com.
				</p>
			</div>
		</v-main>
		<Footer></Footer>
	</v-app>
</template>

<style>
.city {
	background-image: url("../assets/citylow.jpg");
	background-position: 50% 90%;
	background-size: cover;
}
</style>
