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
          description='Robert Rabinowitz is President and CEO of JH Darbie & Co. (a FINRA, SIPC, and MSRB member firm) which is a full service investment bank and brokerage firm. Robert oversees all investment banking, institutional sales & trading, and retail brokerage operations at JH Darbie. Since Robert´s founding of JH Darbie in 1997, Robert has completed the acquisition of several competing retail broker dealers and an online brokerage operation which he successfully consolidated into a New York City corporate headquarters located on Wall Street with three additional US branch office locations. Over the last decade, Robert expanded JH Darbie´s powerful retail and online brokerage operations to create and integrate such operations into an exceptionally powerful institutional sales & trading division. Robert further leveraged JH Darbie´s extensive institutional and retail capabilities as an invaluable resource for companies seeking both domestic and international capital, and successfully completed numerous financing and advisory assignments for public and private companies. Robert is a licensed Certified Public Accountant ("CPA"), as well as, holding numerous FINRA securities licenses, including a MSP, CROP and GP.'
        ></TeamMember>
		<TeamMember
		  name="Mark Deutsch"
		  title="Senior Account Executive"
		  portrait="portraits/avatar.png"
		  description="Mark Deutsch is a Senior Account Executive with JH Darbie.  He has spent 25 years as a registered representative and 20 years as an Equities trader. He is a former market maker at a NYSE firm executing odd lot buy back services and VWAP trading.  He has a series 7, 55, 57, 99, 24, 63 and has participated in the fundings of well over 100 companies during his career. Mark was also the Beta tester for many of the early OMS versions of Tradeware, the predecessor system to Market trader a system of SS&C.  Outside of work, he is  an Ex Captain in his local volunteer fire department. He has been state certified for motor pump operator, structural interior firefighter, rapid intervention team, and open water rescue.  He has designed and participated in the design, build, and inspection of 2–500-gallon pumper engines for the Woodmere Fire Department.  He has personally saved two firemen in active fires and was involved with the rescue of civilians in fires.  He also received citations for bravery during Super Storm Sandy."
		>
		</TeamMember>
        <TeamMember
          name="Mackey McFarlane"
          title="Head of Investment Banking"
          portrait="portraits/avatar.png"
          description="Mackey McFarlane has been Head of Investment Banking at JH Darbie & Co., Inc. since February 2022.  The first 16 years of Mackey’s career were spent as a Stock Trader before joining JH Darbie as VP of Investments in December 2016.  After three successful years in that role, Mackey took the opportunity to grow the company by starting our finance department.  Now, as Head of Investment Banking, he leads a thriving team of bankers, brokers, and reps.  Mackey wears many hats at JH Darbie and has a very hands on approach to managing his team and the investment banking department as a whole. Since joining JH Darbie, he says the most rewarding part so far has been taking his first company up to NASDAQ to ring the bell, followed closely by another uplisting just eight months later.  Although our firm is based in New York City, Mackey currently lives and works in Merritt Island, Florida, with his girlfriend, Tomorrow, their three kids, Berkley, Parker, and Isla, and their dog, a mini Aussie named Archie.  When he’s not keeping busy with work and his family, he enjoys photography, travel, and comedy.  He is also an avid runner and Xbox gamer.  Reach out to Mackey via email at mmcfarlane@jhdarbie.com."
        >
        </TeamMember>
        <TeamMember
          name="C.J. Hiller"
          title="Investment Banker"
          portrait="portraits/avatar.png"
          description="C.J. Hiller is an Investment Banker with JH Darbie since November 2022.  He has been in the investment banking industry since 2018.  C.J. started at Schwab and then moved to Scottsdale Capital Advisors a year later.  He started as an institutional trader and went on to form their investment banking division while running an in-house investment fund.  C.J. has a bachelor’s in Finance with a minor in Investments from Northern Arizona University.  He has a Series 7, 63, 79, and 57, and passed the CFA Level 1.  When C.J. isn’t working, he enjoys being outside by the water."
        >
        </TeamMember>
        <TeamMember
          name="Brandon Golenda"
          title="Investment Banker"
          portrait="portraits/avatar.png"
          description="Brandon Golenda is an Investment Banker with J.H. Darbie since 2023.  He is fresh to professional work in the financial industry but garnered an interest in the financial markets at a young age, inspired by his father.  Prior to working at JH Darbie, he spent five years as a production and control room operator for a prominent US steelmaker. Brandon has a BS in Metallurgical Engineering from South Dakota School of Mines & Technology. Outside of work you can find him working on his backyard urban farm project, where he hopes to produce enough to donate to local food banks.  Brandon also has an interest in macro-photography."
        >
        </TeamMember>
        <TeamMember
          name="Maya Grimm"
          title="Investment Banker"
          portrait="portraits/avatar.png"
          description="Maya Grimm is an investment banker with JH Darbie for almost two years.  Prior to banking, she worked in finance at a large defense contracting firm for two years.  Maya studied economics at Villanova University and the University of Oxford.  She is currently living in Scotland as she pursues her MBA from St Andrews College.  Maya enjoys biking, rowing, running, and travel."
        >
        </TeamMember>

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
