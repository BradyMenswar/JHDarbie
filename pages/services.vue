<template>
	<v-app>
		<HeaderAlt></HeaderAlt>
		<v-main class="px-8 mb-4">
			<div class="h-64 bridge -mx-8"></div>
			<div id="services" class="max-w-[1440px] mx-auto mt-8">
				<h2 class="text-h2">Our Services</h2>
				<p class="text-body-1 mt-4">
					Our extensive product list includes listed and OTC services, fixed
					income (municipal, government, corporate, money market instruments,
					etc.), mutual funds, and money funds linked directly to your brokerage
					account. Our retail services include cash management brokerage
					accounts such as check writing and debit cards; retirement products
					and services including IRAs, Roth IRAs, SEP IRAs, 529 plans, QRP's
					(401(k) plans, and 403(b)(7) custodial accounts); and investment
					research from both a fundamental and technical perspective. Our
					products and services are supported by an experienced team of trading
					professionals equipped with state-of-the-art, real-time,
					web-integrated technology programs. The cornerstone of our business
					and retail brokerage services is as diverse as our clients themselves,
					and our commitment to providing these services is second to none.
				</p>

				<div class="d-flex flex-wrap gap-8 justify-center my-4">
					<ServiceCard
						title="Retirement Planning"
						subtitle="Crafting personalized strategies to secure your post-retirement life."
						text="Safeguard your golden years with our dedicated Retirement Planning services. We tailor our approach to your unique situation, helping you build a comprehensive, long-term financial strategy that ensures your comfort and peace of mind during your retirement."
						icon="mdi-clock-check"
					></ServiceCard>
					<ServiceCard
						title="Alternative Investments"
						subtitle="Harnessing the power of non-traditional assets for portfolio diversification."
						text="Discover innovative opportunities beyond traditional stocks and bonds with our Alternative Investments service. We guide you to explore real estate, private equity, commodities, and more, diversifying your portfolio to increase potential for high returns and hedge against market volatility."
						icon="mdi-palette"
					></ServiceCard>
					<ServiceCard
						title="Fixed Income"
						subtitle="Delivering consistent income through dependable investment opportunities."
						text="Secure steady cash flow with our Fixed Income services. From government to corporate bonds, we offer a range of options that provide consistent income streams, reduce risk, and bring balance to your investment portfolio."
						icon="mdi-cash"
					></ServiceCard>
					<ServiceCard
						title="Education Funding"
						subtitle="Building the bridge to future education with strategic financial planning."
						text="Invest in the future with our Education Funding services. We provide customized strategies to help you finance your children's or grandchildren's education expenses, from private school fees to college tuition. Ensure their bright futures without compromising your financial security."
						icon="mdi-school"
					></ServiceCard>
					<ServiceCard
						title="Consultations"
						subtitle="Providing expert guidance to help navigate your investment journey."
						text="Navigate the financial world with confidence with our Consultation services. Our team of experienced advisors provides personalized guidance based on your financial goals and risk tolerance, making complex investment concepts easily understandable and applicable to your situation."
						icon="mdi-account-group"
					></ServiceCard>
					<ServiceCard
						title="Online Service"
						subtitle="Empowering you with 24/7 access to your investment portfolio and financial insights."
						text="Manage your investments with ease and convenience through our Online Service. Access your portfolio anytime, anywhere, track its performance, make transactions, and get personalized insights—all with a few clicks. Our state-of-the-art platform ensures your financial world is always within your reach."
						icon="mdi-laptop"
					></ServiceCard>
				</div>
			</div>
		</v-main>
		<Footer></Footer>
	</v-app>
</template>

<style>
.bridge {
	background-image: url("../assets/wallstreet.jpg");
	background-position: 50% 78%;
	background-size: cover;
}

.glass2 {
	background: rgba(255, 255, 255, 0.4);
	border-radius: 16px;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
}
</style>
