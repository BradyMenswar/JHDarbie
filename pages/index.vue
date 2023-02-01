<template>
  <div class="overflow-x-hidden flex flex-col">
    <div class="bg w-screen h-screen flex items-center flex-col overflow-x-hidden">
      <Header />
      <h1 class="mt-[12%] text-[48px] text-white font-semibold">Lorem ipsum dolor sit amet</h1>
      <h3 class="mt-[1%] text-[24px] w-[45rem] text-center text-white">Etiam sodales iaculis tortor, id cursus odio viverra id. Curabitur sed risus bibendum.</h3>
      <button class="bg-white px-8 py-4 mt-8 text-[18px] rounded font-semibold text-black hover:bg-sky-300 hover:text-white transition-all duration-300">Book a Consultation</button>
      <p class="mt-[3%] text-center text-white text-[16px]">Recent Transactions</p>
      <Deck class="mt-[1%]"></Deck>
    </div>
     
    <div id="services" class="">
      <h2  class="px-24 text-[48px] font-semibold mt-8">What We Offer</h2>
      <p class="px-24 text-[18px] mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas doloremque magni in exercitationem laborum quis provident iste vitae, saepe animi distinctio illo beatae, tempora, voluptate a? Modi, hic eligendi.
      Nulla vel ut, numquam iusto quaerat eveniet. Ullam praesentium esse quasi et ipsa doloremque quis voluptatum atque, reiciendis nostrum nulla nemo ut natus aspernatur dolores aut minus vitae quam commodi?
      Ducimus, fuga rem. Ullam praesentium esse quasi et ipsa doloremque quis voluptatum atque, reiciendis nostrum nulla nemo ut natus aspernatur dolores aut minus vitae quam commodi?
      Ducimus, fuga remUllam praesentium esse quasi et ipsa doloremque quis voluptatum atque, reiciendis nostrum nulla nemo ut natus aspernatur dolores aut minus vitae quam commodi?
      </p>

      <div class="px-16 w-full flex gap-4 flex-wrap justify-center my-8">
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
        <Icon class="" name="carbon:microscope" />
          <h3 class="text-[24px]">Research and Investment</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:time" />
          <h3 class="text-[24px]">Retirement Planning</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:home" />
          <h3 class="text-[24px]">Estate Planning</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:person" />
          <h3 class="text-[24px]">Self-Directed Discount Trading</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:paint-brush" />
          <h3 class="text-[24px]">Alternative Investments</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:loop" />
          <h3 class="text-[24px]">Fixed Income</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:piggy-bank" />
          <h3 class="text-[24px]">Wealth Management</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:education" />
          <h3 class="text-[24px]">Education Funding</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:user-service-desk" />
          <h3 class="text-[24px]">Consultations</h3>
        </div>
        <div class="w-[18%] aspect-square glass rounded-lg flex flex-col items-center justify-start text-center gap-4 pt-[4.5rem] px-4 pb-4 min-w-[250px]">
          <Icon class="" name="carbon:devices" />
          <h3 class="text-[24px]">Online Service</h3>
        </div>
        
 
      </div>

      <div class="w-full flex flex-wrap gap-x-36 gap-y-24 text-[24px] justify-center py-8 px-24 mb-4 mid-section text-white">
        <h4 class="text-center">No required minimum account <br> balance for traditional retail accounts</h4>
        <h4 class="text-center">Personal consultations <br> with a live representative</h4>
        <h4 class="text-center">Real-time quotes and charts:<br> free of charge for JH Darbie clients</h4>
        <h4 class="text-center">No-fee market data, <br> news, and research updates</h4>
        <h4 class="text-center">Over-the-phone order service <br> for instant trades for whenever you request</h4>
      </div>

      <div id="about" class="px-24 py-8">
        <article class="flex flex-col gap-2">
          <h3 class="text-[48px] font-semibold">Who We Are</h3>
          <p class="text-[18px] mt-4">JH Darbie & Co. was founded in 1997 by Robert Rabinowitz. Over the past 20 years Mr. Rabinowitz has completed the acquisition of several competing retail broker/dealers including an online brokerage operation.  After successfully consolidating operations, JH Darbie & Co. has emerged as a broker dealer providing a full range of financial services with its New York City corporate headquarters strategically located on Wall Street.  Over the past few years of financial turmoil JH Darbie remained strong and grew organically with the addition of three US branch office locations.  Currently there are plans for additional expansion. With the synergies from our institutional sales & trading divisions JH Darbie has become an invaluable resource for companies seeking both domestic and international capital.  We proudly continue to successfully complete numerous financing and advisory assignments for public and private companies.</p>
        </article>
        <article class="flex flex-col w-full mt-4">
            <div class="flex gap-8 items-center py-4 ">
                <div class="w-[10%]">
                    <img class="w-full" src="../assets/avatar.png" alt="Headshot">
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <h4 class="text-[20px] font-semibold">Robert Rabinowitz</h4>
                    <h5 class="text-[18px] font-semibold">CPA President, CEO</h5>
                    <p class="text-[18px]">Robert Rabinowitz is President and CEO of JH Darbie & Co. (a FINRA, SIPC, and MSRB member firm) which is a full service investment bank and brokerage firm. Robert oversees all investment banking, institutional sales & trading, and retail brokerage operations at JH Darbie. Since Robert´s founding of JH Darbie in 1997, Robert has completed the acquisition of several competing retail broker dealers and an online brokerage operation which he successfully consolidated into a New York City corporate headquarters located on Wall Street with three additional US branch office locations. Over the last decade, Robert expanded JH Darbie´s powerful retail and online brokerage operations to create and integrate such operations into an exceptionally powerful institutional sales & trading division. Robert further leveraged JH Darbie´s extensive institutional and retail capabilities as an invaluable resource for companies seeking both domestic and international capital, and successfully completed numerous financing and advisory assignments for public and private companies. Robert is a licensed Certified Public Accountant ("CPA"), as well as, holding numerous FINRA securities licenses, including a MSP, CROP and GP.</p>
                </div>
            </div>
            <div class="flex gap-8 items-center py-4">
                <div class="w-[10%]">
                    <img class="w-full" src="../assets/avatar.png" alt="Headshot">
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <h4 class="text-[20px] font-semibold">David Goodfriend, Esq.</h4>
                    <h5 class="text-[18px] font-semibold">Investment Banker</h5>
                    <p class="text-[18px]">In October 2010, David joined JH Darbie & Co. With over a decade of investment banking experience including structuring and completing domestic and international transactions in excess of $1 billion for public and private companies. His experience includes equity and debt financing, mergers, acquisitions, recapitalizations, restructurings, as well as structuring complex, cross border transactions. In addition to his investment banking activities, David was a Founding Member of the general partner and limited partnership of Sunrise Equity Partners, L.P., a $174 million SBIC fund, which made investments in public and private companies. David began his Wall Street career in 1997, working over four years with Josephthal & Co. Inc. (which prior to being acquired was a New York Stock Exchange member firm with 31 offices and over 1,100 employees), in various investment banking and corporate in-house counsel capacities. Thereafter, he spent the next eight years in investment banking roles, including Vice President of Investment Banking at Sunrise Securities Corp., a New York Stock Exchange member firm.  For over a decade, David was also previously a Partner and Associate General Counsel of an authorized Mercedes Benz Dealership (6th largest in the U.S. Northeast Region).  In addition to his current role at JH Darbie, David is a Managing Member of a real estate holding company, as well as a Founding Managing Member of an investment company.  David received an accelerated 3-year J.D./M.B.A. degree from the Delaware Law School at Widener University, and a B.S. degree with honors from Widener University.</p>
                </div>
            </div>
          
        </article>
        <p class="text-[18px]">If you are interested in a career opportunity with JH Darbie & Co., please submit your resume either by emailing the PDF or MS Word format versions to recruiter@jhdarbie.com , or faxing to 212.269.7330, Attention: Careers.</p>
      </div>

      


    </div>
    <Footer></Footer>
  </div>
 
</template>


<style>
.bg {
  background-color: black;
  background-image: linear-gradient(rgba(0,0,0,25%), rgba(255,255,255, 5%)), url("../assets/citybg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.mid-section {
  background-image: url("../assets/citybg.png");
  background-position: bottom;
}

html {
  scroll-behavior: smooth;
}
</style>