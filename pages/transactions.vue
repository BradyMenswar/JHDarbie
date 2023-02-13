<template>
    <div class="w-screen h-screen flex items-center flex-col">
        <HeaderAlt></HeaderAlt>

        <div class="w-screen flex mt-[90px] overflow-x-auto">
            
            <div class="w-[25%] flex flex-col px-8 justify-start fixed min-w-[330px] max-w-[400px]">
                
                <div class="flex gap-4 items-center">
                    <h3 class="text-[1.25vw] mb-2">Transaction Type</h3>
                    <!-- <button @click="clearType" class="px-2 bg-slate-400 rounded-xl text-white">Clear</button> -->
                </div>
                
                <ul class="flex flex-col gap-1 text-[1vw]">
                    <li class="flex gap-2">
                        <input id="Convertible Note" type="checkbox" v-model="filters" value="Convertible Note">
                        <label for="Convertible Note">Convertible Note</label></li>
                    <li class="flex gap-2">
                        <input id="Convertible Preferred Equity" type="checkbox" v-model="filters" value="Convertible Preferred Equity">
                        <label for="Convertible Preferred Equity">Convertible Preferred Equity</label></li>
                    <li class="flex gap-2">
                        <input id="Equity" type="checkbox" v-model="filters" value="Equity"> 
                        <label for="Equity">Equity</label></li>
                    <li class="flex gap-2">
                        <input id="Common Stock" type="checkbox"  v-model="filters" value="Common Stock">
                        <label for="Common Stock">Common Stock</label></li>
                    <li class="flex gap-2">
                        <input id="Convertible Promissory Note" type="checkbox"  v-model="filters" value="Convertible Promissory Note">
                        <label for="Convertible Promissory Note">Convertible Promissory Note</label></li>
                    <li class="flex gap-2">
                        <input id="Equity Line of Credit" type="checkbox"  v-model="filters" value="Equity Line of Credit">
                        <label for="Equity Line of Credit">Equity Line of Credit</label></li>
                    <li class="flex gap-2">
                        <input id="Amortizing Convertible Note" type="checkbox"  v-model="filters" value="Amortizing Convertible Note">
                        <label for="Amortizing Convertible Note">Amortizing Convertible Note</label></li>
                    <li class="flex gap-2">
                        <input id="Senior Secured Convertible Note" type="checkbox" v-model="filters" value="Senior Secured Convertible Note">
                        <label for="Senior Secured Convertible Note">Senior Secured Convertible Note</label></li>
                    <li class="flex gap-2">
                        <input id="Convertible Preferred" type="checkbox" v-model="filters" value="Convertible Preferred">
                        <label for="Convertible Preferred">Convertible Preferred</label></li>
                    <li class="flex gap-2">
                        <input id="Block Transaction" type="checkbox" v-model="filters" value="Block Transaction">
                        <label for="Block Transaction">Block Transaction</label></li>
                    <li class="flex gap-2">
                        <input id="Reg-A Equity Purchase" type="checkbox" v-model="filters" value="Reg-A Equity Purchase">
                        <label for="Reg-A Equity Purchase">Reg-A Equity Purchase</label></li>
                    <li class="flex gap-2">
                        <input id="Preferred Equity" type="checkbox" v-model="filters" value="Preferred Equity">
                        <label for="Preferred Equity">Preferred Equity</label></li>
                    <li class="flex gap-2">
                        <input id="Equity Financing" type="checkbox" v-model="filters" value="Equity Financing">
                        <label for="Equity Financing">Equity Financing</label></li>
                </ul>
                <div class="flex gap-4 items-center mt-4">
                    <h3 class="text-[1.25vw] mb-2">Date</h3>
                    <button @click="clearDate" class="px-2 bg-slate-400 rounded-xl text-white">Clear</button>
                </div>
                <div class="flex flex-col gap-2 text-[1vw]">
                    <div class="flex gap-2">
                        <input type="radio" id="month" value="1" v-model="dateRange">
                        <label for="month">Last Month</label>
                    </div>
                    <div class="flex gap-2">
                        <input type="radio" id="sixMonth" value="6" v-model="dateRange">
                        <label for="sixMonth">Last Six Months</label>
                    </div>
                    <div class="flex gap-2">
                        <input type="radio" id="year" value="12" v-model="dateRange">
                        <label for="year">Last Year</label>
                    </div>
                    
                </div>
                <div class="flex gap-4 items-center mt-4">
                    <h3 class="text-[1.25vw] mb-2">Amount</h3>
                    <button @click="clearAmount" class="px-2 bg-slate-400 rounded-xl text-white">Clear</button>
                </div>
                <div class="flex gap-4">
                    <div class="flex gap-1">
                        $  
                        <input class="flex border-2 border-solid border-slate-300 rounded pl-2 w-16 h-8" placeholder="Min" type="number" v-model="minValue">
                    </div>
                    <p>&ndash;</p>
                    <div class="flex gap-1">
                        $  
                        <input class="flex border-2 border-solid border-slate-300 rounded pl-2 w-16 h-8" placeholder="Max" type="number" v-model="maxValue">
                    </div>
                </div>

                <!-- <button class="mt-12 bg-slate-400 w-full px-4 py-2 text-white rounded" @click="resetFilters">Clear all</button> -->

            </div>

            <div class="pb-8 mt-[20px] flex flex-wrap gap-4 ml-[400px] w-[70%]">

                <article v-for="item in selection" class="min-w-[18rem] px-8 py-4 glass flex flex-col items-center gap-2 text-black h-min">
                    <div class="w-36 h-32 flex items-center justify-center ">
                        <img class="w-full h-min" :src="item.img" alt="Company Logo">
                    </div>
                    <h4 class="text-[24px]">${{ item.amount.toLocaleString("en-US") }}</h4>
                    <p class="text-[16px]">{{ item.type }}</p>
                    <div class="flex items-center mt-2 gap-4">
                        <p class="tag text-[14px]">{{ item.finder }}</p>
                        <p class="text-[16px]"> {{ item.date.toLocaleDateString('default', {month: 'long', year: 'numeric'})}}</p>
                    </div>
                </article>
                
            </div>
        </div>
    
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            rangeToggle: false,
            filters: [],
            minValue: null,
            maxValue: null,
            dateRange: null,
            tombstones: [
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 100000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("October 2022")
                },
                {
                    img: '/companyLogos/blackbird.png',
                    amount: 130500,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("September 2022")
                },
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 112500,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("September 2022")
                },
                {
                    img: '/companyLogos/cgi.png',
                    amount: 110700,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("September 2022")
                },
                {
                    img: '/companyLogos/electromedical.png',
                    amount: 806400,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("September 2022")
                },
                {
                    img: '/companyLogos/gzbg.png',
                    amount: 158400,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("September 2022")
                },
                {
                    img: '/companyLogos/nightfood.png',
                    amount: 644000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("September 2022")
                },
                {
                    img: '/companyLogos/smartmetric.png',
                    amount: 275400,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("September 2022")
                },
                {
                    img: '/companyLogos/amih.png',
                    amount: 56025,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/aitox.png',
                    amount: 675000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 58500,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/brookmount.png',
                    amount: 50001,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/cety.png',
                    amount: 260000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/digerati.png',
                    amount: 165000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/electromedical.png',
                    amount: 160000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/gah.png',
                    amount: 55800,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/marijuana.png',
                    amount: 92000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("August 2022")
                },
                {
                    img: '/companyLogos/1847.png',
                    amount: 600000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/abqq.png',
                    amount: 80000,
                    type:  'Convertible Preferred',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 125000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/cgi.png',
                    amount: 143250,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/carbonmeta.png',
                    amount: 50000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/eari.png',
                    amount: 840000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/kisses.png',
                    amount: 70000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/konagold.png',
                    amount: 595000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/greenflower.png',
                    amount: 186000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("July 2022")
                },
                {
                    img: '/companyLogos/abqq.png',
                    amount: 128500,
                    type:  'Convertible Preferred Equity',
                    finder: 'Finder',
                    date: new Date("June 2022")
                },
                {
                    img: '/companyLogos/bfyw.png',
                    amount: 310000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("June 2022")
                },
                {
                    img: '/companyLogos/cgi.png',
                    amount: 53750,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("June 2022")
                },
                {
                    img: '/companyLogos/gah.png',
                    amount: 266000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("June 2022")
                },
                {
                    img: '/companyLogos/gzbg.png',
                    amount: 836000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("June 2022")
                },
                {
                    img: '/companyLogos/marijuana.png',
                    amount: 114000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("June 2022")
                },
                {
                    img: '/companyLogos/oncotelic.png',
                    amount: 335000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("June 2022")
                },
                {
                    img: '/companyLogos/marquie.png',
                    amount: 38880,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("June 2022")
                },
                {
                    img: '/companyLogos/amih.png',
                    amount: 265950,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/aitox.png',
                    amount: 411729,
                    type:  'Common Stock',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/blackbird.png',
                    amount: 346500,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/blackbird.png',
                    amount: 385000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/cgi.png',
                    amount: 63500,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/carbonmeta.png',
                    amount: 66111,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/cety.png',
                    amount: 750000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/eco.png',
                    amount: 300000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/endexx.png',
                    amount: 531250,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/goldenstar.png',
                    amount: 370000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/growlife.png',
                    amount: 750000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/homebistro.png',
                    amount: 1535061,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/oxys.png',
                    amount: 123487,
                    type:  'Common Stock',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/igi.png',
                    amount: 725000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/kisses.png',
                    amount: 150000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/mlfb.png',
                    amount: 560000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/marijuana.png',
                    amount: 1100000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/novaccess.png',
                    amount: 1900000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/oncotelic.png',
                    amount: 605000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/greenflower.png',
                    amount: 175000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/yellowleaf.png',
                    amount: 1000000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/tcc.png',
                    amount: 1000000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("May 2022")
                },
                {
                    img: '/companyLogos/bfyw.png',
                    amount: 310000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/bloomios.png',
                    amount: 137500,
                    type:  'Convertible Promissory Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 425000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/canb.png',
                    amount: 150000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/cgi.png',
                    amount: 380000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/eari.png',
                    amount: 37000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/gzbc.png',
                    amount: 693500,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/igi.png',
                    amount: 296000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/kisses.png',
                    amount: 330000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/mlfb.png',
                    amount: 560000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/mlfb.png',
                    amount: 63000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/oncotelic.png',
                    amount: 250000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/bfyw.png',
                    amount: 310000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '',
                    amount: 200000000,
                    type:  'Equity Line of Credit',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/greenflower.png',
                    amount: 150000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/victory.png',
                    amount: 50000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/virtual.png',
                    amount: 470000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/yuka.png',
                    amount: 300000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/bfyw.png',
                    amount: 50000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("April 2022")
                },
                {
                    img: '/companyLogos/abqq.png',
                    amount: 83500,
                    type:  'Convertible Preferred Equity',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/bloomios.png',
                    amount: 172200,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 279000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/brookmount.png',
                    amount: 60000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/canb.png',
                    amount: 600000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/carbonmeta.png',
                    amount: 55000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/deepgreen.png',
                    amount: 375000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/eari.png',
                    amount: 36667,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/oxys.png',
                    amount: 133280,
                    type:  'Convertible Preferred',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/mlfb.png',
                    amount: 39900,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/greenflower.png',
                    amount: 177500,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/smartmetric.png',
                    amount: 475000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/smartmetric.png',
                    amount: 5000000,
                    type:  'Equity Line of Credit',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/marquie.png',
                    amount: 38880,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/virtual.png',
                    amount: 235000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/yuka.png',
                    amount: 50000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("March 2022")
                },
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 279000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/cgi.png',
                    amount: 1168500,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/foothills.png',
                    amount: 390000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/gah.png',
                    amount: 266000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/oxys.png',
                    amount: 51000,
                    type:  'Convertible Preferred',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/igi.png',
                    amount: 370000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/iinx.png',
                    amount: 500000,
                    type:  'Amortizing Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/smartmetric.png',
                    amount: 475000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/marquie.png',
                    amount: 245000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/trutankless.png',
                    amount: 385000,
                    type:  'Amortizing Convertible Note',
                    finder: 'Finder',
                    date: new Date("February 2022")
                },
                {
                    img: '/companyLogos/abqq.png',
                    amount: 279000,
                    type:  'Convertible Preferred Equity',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 140000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/brewbilt.png',
                    amount: 5000000,
                    type:  'Equity Line of Credit',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/brookmount.png',
                    amount: 96000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/digerati.png',
                    amount: 460000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/eco.png',
                    amount: 60000,
                    type:  'Equity',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/warmup.png',
                    amount: 350000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/warmup.png',
                    amount: 5000000,
                    type:  'Equity Line of Credit',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/oxys.png',
                    amount: 11160,
                    type:  'Convertible Preferred',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/iinx.png',
                    amount: 500000,
                    type:  'Amortizing Convertible Note',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/marijuana.png',
                    amount: 60000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/smartmetric.png',
                    amount: 950000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                {
                    img: '/companyLogos/sugarmade.png',
                    amount: 485000,
                    type:  'Convertible Note',
                    finder: 'Finder',
                    date: new Date("January 2022")
                },
                
            ]
        }
    },
    methods: {
        resetFilters() {
            this.dateRange = null;
            this.minValue = null;
            this.maxValue = null;
            
        },
        clearAmount() {
            this.minValue = null;
            this.maxValue = null;
        },
        clearDate() {
            this.dateRange = null;
        },
        clearType() {
            this.filters = null;
        }

    },
    computed:{
        selection: function () {
            let dt = new Date();
            dt.setMonth(dt.getMonth() - this.dateRange - 1)
            if(this.filters.length === 0 && (this.minValue === null || this.minValue === '') && (this.maxValue === null || this.maxValue === '') && this.dateRange === null) return this.tombstones;

            return this.tombstones.filter((item) => {
                return (this.filters.length === 0 || this.filters.includes(item.type)) && (this.minValue === null || item.amount >= this.minValue) && (this.maxValue === null || item.amount <= this.maxValue) && (this.dateRange === null || item.date > dt)
            })
        }
    }
}
</script>

<style>
.tag {
    background: rgb(124, 211, 136);
    padding: 0.15rem 0.5rem;
    border-radius: 1rem;
    color: white;
}
</style>