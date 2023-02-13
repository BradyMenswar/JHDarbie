<template>
    <div class="flex flex-col">
        <HeaderAlt></HeaderAlt>
        
        <div class="mt-[90px] overflow-x-hidden">
            <div class="w-full h-64 bridge flex justify-center items-center">
                <h2 class="font-semibold text-[96px] text-white"></h2>
            </div>
            
            <div id="services" class="">
                <h2  class="px-24 text-[48px] font-semibold mt-8">What We Offer</h2>
                <p class="px-24 text-[18px] mt-4">​Our extensive product list includes listed and OTC services, fixed income - municipal, government, corpoprate, money market instruments, etc., mutual funds, and money funds linked directly to your brokerage account. Our retail services include cash management brokerage accounts -check writing and debit cards, retirement products and services such as IRA’s, Roth IRA’s, SEP IRA’s, 529 plans, QRP’s including 401 (k) plans and 403(b)(7) custodial accounts and investment research from both a fundamental and technical perspective. Our products and services are supported by an experienced team of trading professionals equipped with state-of-the-art real-time web-integrated technology programs. The cornerstone of our business, our retail brokerage services, is as diverse as our clients themselves and our commitment to providing these services is second to none.  
                </p>
                
          
                <div class="px-16 w-full flex gap-4 justify-center my-8 py-4 flex-wrap">
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                  <Icon class="" name="carbon:microscope" />
                    <h3 class="text-[24px]">Research and Investment</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:time" />
                    <h3 class="text-[24px]">Retirement Planning</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-center text-center gap-4 px-4 pb-4 min-w-[300px] !bg-zinc-200 font-bold">
                    <h4 class="text-[24px]">No required minimum account balance for traditional retail accounts</h4>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:home" />
                    <h3 class="text-[24px]">Estate Planning</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:person" />
                    <h3 class="text-[24px]">Self-Directed Discount Trading</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-center text-center gap-4 px-4 pb-4 min-w-[300px] !bg-zinc-200 font-bold">
                    <h4 class="text-[24px]">Personal consultations with a live representative</h4>
                </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:paint-brush" />
                    <h3 class="text-[24px]">Alternative Investments</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:loop" />
                    <h3 class="text-[24px]">Fixed Income</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-center text-center gap-4 px-4 pb-4 min-w-[300px] !bg-zinc-200 font-bold">
                    <h4 class="text-[24px]">Real-time quotes and charts: free of charge for JH Darbie clients</h4>
                </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:piggy-bank" />
                    <h3 class="text-[24px]">Wealth Management</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:education" />
                    <h3 class="text-[24px]">Education Funding</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-center text-center gap-4 px-4 pb-4 min-w-[300px] !bg-zinc-200 font-bold">
                    <h4 class="text-[24px]">No-fee market data, news, and research updates</h4>
                </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:user-service-desk" />
                    <h3 class="text-[24px]">Consultations</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[300px]">
                    <Icon class="" name="carbon:devices" />
                    <h3 class="text-[24px]">Online Service</h3>
                  </div>
                  <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-center text-center gap-4 px-4 pb-4 min-w-[300px] !bg-zinc-200 font-bold">
                      <h4 class="text-[24px]">Over-the-phone order service for instant trades for whenever you request</h4>
                  </div>
                  
           
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
</style>