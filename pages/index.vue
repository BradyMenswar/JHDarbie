<template>
	<div class="overflow-x-hidden flex flex-col">
		<div
			class="bg w-screen h-screen flex items-center flex-col overflow-x-hidden"
		>
			<Header />
			<h1 class="mt-[8%] text-[2.5vw] text-white font-semibold">
				Have confidence in your investments.
			</h1>
			<h3 class="mt-[20px] text-[1.25vw] w-[45rem] text-center text-white">
				Expert Financial Professionals Dedicated to Your Success
			</h3>
			<div class="flex gap-4">
				<button
					class="bg-white px-8 py-4 mt-8 text-[1vw] rounded font-semibold text-black hover:bg-sky-300 hover:text-white transition-all duration-300"
				>
					<a href="mailto:info@jhdarbie.com">Book a consultation</a>
				</button>
				<button
					class="transparent border-white border-4 px-8 py-4 mt-8 text-[1vw] rounded font-semibold text-white hover:border-sky-300 hover:text-sky-300 transition-all duration-300"
				>
					<a
						href="https://brokercheck.finra.org/"
						rel="noopener noreferrer"
						target="_blank"
						>Find on BrokerCheck</a
					>
				</button>
			</div>
			<p class="mt-8 text-center text-white text-[16px]">Recent Transactions</p>
			<Deck class="mt-[20px]"></Deck>
		</div>
		<Footer />
	</div>
</template>

<style>
.bg {
	background-color: black;
	background-image: linear-gradient(rgba(0, 0, 0, 25%), rgba(255, 255, 255, 5%)),
		url("../assets/citybg.png");
	background-size: cover;
	background-repeat: no-repeat;
}

html {
	scroll-behavior: smooth;
}
</style>
