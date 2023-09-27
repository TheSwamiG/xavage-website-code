import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App(props) {
  return (
    <div>
      <Navbar />
      <div class="grid grid-cols-12">
        <div class="col-span-6 p-12 justify-center">
          <Section
            title="Clash of Corporates"
            subtitle="Real crises. Real consequences."
            info="In the heated world of business, things don't always go to plan. That’s
        when the true mettle of companies is tested. In this event, you’ll be
        taking the place of a company’s board of directors and PR team. Clash
        with other companies as you try to keep yourself afloat in a series of
        crises inspired by real-world events. Deal with business problems,
        corporate alliances, and worst of all, the press. Will you emerge
        stronger than ever, or will your company sink?"
            isLeft={false}
          />
          <Section
            title="The Courting"
            subtitle="The ball is in your court."
            info="Step into the courtroom and put your legal skills to the test at ‘The Courting’! This thrilling event is your chance to experience the novelty and excitement of a real-world courtroom battle. In three rounds of intense competition, you'll be presented with a legal case brief and tasked with arguing both sides of the case. You'll need to use your knowledge of the law, your persuasive skills, and your ability to think on your feet to convince the judges that your team has the winning argument. 
        Round 1 is a timed preparation round where participants are given case briefs ahead of time and have 15 minutes to present their arguments from both sides. Of the initial 8 teams, only 4 qualify after careful deliberation from the judges.
        Round 2 ups the ante as teams dive deeper into the intricacies of the law with a new challenge. Teams are given the case brief right before the round starts and have only 20 minutes to prepare, with a side given. This round truly tests the teams’ ability to respond to spontaneity and adversity under the pressure of time.
        In Round 3, “The Final Showdown”, the two best teams go head-to-head in a battle of legal minds. The stakes are high, the pressure is on, and the finalists are ready to give it their all
        With only 20 minutes to prepare and a side given, teams must use their quick thinking skills and persuasive ability to convince judges of their side. The competition is fierce, but the rewards are greater. Will your team be crowned the Courting champions and take home the coveted grand prize? Sign up for the Courting and emerge as an uprising lawyer.
        "
          />
          <Section
            title="The Deal-Makers’ Dilemma"
            subtitle="Real crises. Real consequences."
            info="‘The Deal Makers’ Dilemma’, is a competition designed to simulate the complex world of corporate law and negotiation. 

        Participants are given 30-45 minutes to analyze a case study. Your team will face off against other teams to negotiate a monetary settlement. 
        The goal is simple: secure the best deal possible. Whether you're demanding compensation or striving to minimize expenses, it's all about making or saving money.
        
        But that is just the beginning. Round 2 features negotiations going beyond monetary values. You'll negotiate non-monetary benefits like public apologies, marketing opportunities, and more. Plus, you can propose your own creative terms for discussion.
        
        It's not just about the bottom line; it's about crafting comprehensive agreements that benefit your company's reputation and growth.
        
        The top three teams will be awarded based on their ability to negotiate effectively and strategically. Your decisions and compromises will determine your team's place on the winners' podium.
        
        Throughout the event, our organizers may throw in unexpected crises and public relations challenges, making this event even more dynamic and true to real corporate life. Adaptability and quick thinking will be key to your team's success.
        
        We hope to see you at the event!
        "
          />
          <Section
            title="Capital Conquest"
            subtitle="Real crises. Real consequences."
            info="Step into the thrilling world of Xavage's Private Investment Market simulation! Immerse yourself in a real-life investment experience where investors and firms collide, driven by defined goals and values, all vying for the ultimate return and capital gains. Sharpen your investing acumen and showcase your incisive skills in this high-stakes game of strategy and decision-making. Are you ready to seize the opportunity and emerge as a true investment virtuoso?"
          />
        </div>
        <div class="col-span-6 p-12 justify-center">
          <Section
            title="Ready? Set. Sell!"
            subtitle="Real crises. Real consequences."
            info="Get ready for the most exhilarating marketing showdown of the year – 'Ready, Set, Sell!'
        Only 12 teams, each with 3-4 members will compete in this battle of creativity and strategy.
        The test of skills starts in full swing in Round 1. Each team will choose from two distinct objects and within 1 hour, the teams will prepare a 2-minute advertisement followed by a 3-4 minute presentation on unique marketing techniques they would incorporate to differentiate their product. No two teams will have the same object and the teams will be marked based on innovation and creativity, as well as consumer-orientation and market research.
        Only the top 6 teams will advance to Round 2, where the challenge gets even more intense. 
        In the Celebrity Endorsement section, teams select from 6 categories of celebrities to promote an unlikely product and get 10 minutes to prepare. Judges will grill them on why their chosen celebrity would endorse the product and the effectiveness of their proposed marketing strategies. 
        Following this, contestants will brace themselves for the Crisis round, a high-pressure test where teams are given a brand and a completely unrelated consumer base. With just 2 minutes to prepare, they must pitch their brand's products and win the judges over with inventive and out-of-the-box plans. To pile on the pressure, the team members will have to speak in 30-second intervals and pass the baton on while still communicating a well-rounded and effective marketing strategy.         
        With racing minds and boundless creativity, who will emerge victorious in this ultimate battle of marketing wits?
        "
          />
          <Section
            title="Monopoly Quest"
            subtitle="Real crises. Real consequences."
            info="Challenge your knowledge in the different fields of economics & business!

        Round 1: 
        In the big field, there will be many question chits layed around. You and your team have to scavenge your way around to find the chits with questions with 5 different difficulties. Different colored chits will be worth different points, increasing with its difficulty. In a time limit of 1 hour, 4  teams that collect the most points by answering the maximum number of questions will move onto round 2.
        
        Round 2: 
        The top 4 teams now compete head-on battle with each other to see who can beat the other team to the buzzer. As soon as a question is asked each team can press the buzzer in front of them if they think they know the answer,  but there is a twist: if the team presses the button and gets the question wrong, points are subtracted from their total and the value of the question is increased.The next team now has the chance to answer. By the end, whichever team has gathered the most amount of points wins! 
        There will be 4 categories of questions:
        Current Affairs
        Economics
        Finance
        History
        
        With other teams racing to answer the questions faster, do you think you have what it takes to emerge victorious?
        
        "
          />

          <Section
            title="Trojan's Tank"
            subtitle="Real crises. Real consequences."
            info="Do you think you've got what it takes to pitch your startup to us? Join us in TISB's very own entrepreneurial shark tank event where you have to come up with a unique business idea and impress our unrelenting panel of venture capitalists. Put your thinking caps on, prepare a thorough business plan and get ready to unleash the gritty entrepreneur in you, and ultimately make the winning pitch!"
          />
          <Section
            title="Bulls & Bears"
            subtitle="Real crises. Real consequences."
            info="The stock market is unpredictable, uncontrollable and risky. Or is it? Investors seek to gain an understanding of the market and the companies they invest in to determine their future, accounting for the risk. We’re not day traders after all. 
        Join us in Bulls and Bears stock simulation competition, where you will be given the opportunity to analyze companies and stocks, poring through financials, and read the constant news updates!
        Will you net the highest returns, or will an Elon Musk tweet ravage your portfolio?
        Contact: kvyom@tisb.ac.in svivek@tisb.ac.in 
        
        Research session: 1h
        Participants are given the latest updates of all the stocks, along with recent financials, recent news and potential future plans. The teams must draw up a potential list of stocks they want to invest in and what quantity, so they can place the trades at the beginning of the trading round.
        
        Trading session: 15 mins
        Participants can use the online portal to purchase whichever stocks they had earlier decided, adding them to their portfolio.
        
        Results session: 15 mins
        The changed prices for the next financial year or two will be shown, demonstrating how the stock prices changed. Teams will get the opportunity to evaluate their successes and failures to discuss the alterations to their strategy for the coming round. 
        
        These three sessions will be repeated thrice, one each per round. 
        Do you think you've got what it takes to pitch your startup to us? Join us in TISB's very own entrepreneurial shark tank event where you have to come up with a unique business idea and impress our unrelenting panel of venture capitalists. Put your thinking caps on, prepare a thorough business plan and get ready to unleash the gritty entrepreneur in you, and ultimately make the winning pitch!
        "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
