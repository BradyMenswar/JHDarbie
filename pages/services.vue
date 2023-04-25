<template>
	<div class="flex flex-col">
		<HeaderAlt></HeaderAlt>

		<div class="mt-[90px] overflow-x-hidden">
			<div class="w-full h-64 bridge flex justify-center items-center">
				<h2 class="font-semibold text-[96px] text-white"></h2>
			</div>

			<div id="services" class="flex flex-col">
				<h2 class="px-24 text-[48px] font-semibold mt-8">Our Services</h2>
				<p class="px-24 text-[15px] mt-4">
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

				<div
					class="self-center px-16 w-[80%] flex flex-wrap gap-4 justify-center my-8 py-4"
				>
					<ServiceCard
						title="Retirement Planning"
						icon="carbon:time"
						width="28%"
					></ServiceCard>
					<ServiceCard
						title="Alternative Investments"
						icon="carbon:paint-brush"
						width="28%"
					></ServiceCard>
					<ServiceCard
						title="Fixed Income"
						icon="carbon:loop"
						width="28%"
					></ServiceCard>
					<ServiceCard
						title="Education Funding"
						icon="carbon:education"
						width="28%"
					></ServiceCard>
					<ServiceCard
						title="Consultations"
						icon="carbon:user-service-desk"
						width="28%"
					></ServiceCard>
					<ServiceCard
						title="Online Service"
						icon="carbon:devices"
						width="28%"
					></ServiceCard>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>

<style>
.bridge {
	background-image: url("../assets/citylow.jpg");
	background-position: bottom;
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
