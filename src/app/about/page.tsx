import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About • ArroundU",
  description: "Why we built ArroundU and how we think about real-world connections.",
};

// Font Size Manager - matching Legal page sizes
const fontSizes = {
  hero: "text-[38px] sm:text-[64px]",
  heading: "text-[32px] sm:text-[42px]",
  subheading: "text-[24px] sm:text-[28px]",
  body: "text-[16px] sm:text-[18px]",
  small: "text-[14px] sm:text-[16px]",
  emoji: "text-[20px] sm:text-[24px]",
};

function Divider() {
  return <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />;
}

export default function AboutPage() {
  return (
    <div className="sm:px-30 px-10 mt-20 bg-black">
    <section className="content-page">
      <div className="content-container py-20">
        <div className="space-y-12">
          <h1 className={`${fontSizes.hero} font-bold text-white leading-tight mb-8`}>
            Welcome to ArroundU
          </h1>
          
          <div className={`space-y-10 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
            <p>
              The app that turns "what if" into "remember when"
            </p>
            
            <h2 className={`${fontSizes.heading} font-bold text-white mt-16 mb-8`}>
             Ever been in this situation? 🤔 
            </h2>
            
            <p>
              You're at a coffee shop, and there's someone working on the same project as you...
            </p>
            
            <p>
              You're at a concert, and the person next to you knows every single lyric...
            </p>
            
            <p>
              You're in class, and someone just cracked the funniest joke, but you don't know them...
            </p>
            
            <p>
              You're walking around campus, and you keep seeing the same person everywhere...
            </p>
            
            <p>
              <strong>What do you do?</strong>
            </p>
            
            <p>
              Nothing. You just... walk away. Because asking for someone's socials IRL feels awkward, right?
            </p>
            
            <h2 className={`${fontSizes.heading} font-bold text-white mt-16 mb-8`}>
             We asked ourselves: Why is this so hard? 💭
            </h2>
            
            <p>
              Social media was supposed to bring us together. Instead, it made us:
            </p>
            
            <ul className="space-y-4 ml-6">
              <li>• Scroll endlessly through strangers' lives</li>
              <li>• Perform for likes instead of connecting with people</li>
              <li>• Miss out on the amazing humans literally right next to us</li>
            </ul>
            
            <p>
              That's where ArroundU comes in.
            </p>
          </div>

          <h2 className={`${fontSizes.heading} font-bold text-white mt-16 mb-8`}>
            What makes ArroundU different? 🌟
          </h2>
          
          <div className={`space-y-10 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
            <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>
              📍 It's all about proximity, not popularity
            </h3>
            
            <ul className="space-y-4 ml-6">
              <li>• See who's nearby (within 1km)</li>
              <li>• No follower counts, no clout chasing</li>
              <li>• Just real people in your real world</li>
            </ul>
            
            <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>
              💬 Connect without the cringe
            </h3>
            
            <ul className="space-y-4 ml-6">
              <li>• Add someone you meet → they get notified privately</li>
              <li>• Chat with people in real-time (no more awkward DM slides)</li>
              <li>• Share stories to show what you're up to</li>
              <li>• Follow people you vibe with (they can choose to follow back)</li>
            </ul>
            
            <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>
              🔍 Find & follow your people
            </h3>
            
            <ul className="space-y-4 ml-6">
              <li>• Search for classmates, teammates, or that person from the party</li>
              <li>• Follow people you vibe with (they can follow back if they want)</li>
              <li>• Make your account private if you want to control who sees your stuff</li>
              <li>• Check out your followers and see who's interested in connecting</li>
            </ul>
            
            <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>
              🛡 Privacy that actually makes sense
            </h3>
            
            <ul className="space-y-4 ml-6">
              <li>• We never show your exact location (just "nearby")</li>
              <li>• Make your account private to control who can follow you</li>
              <li>• Block anyone who's being weird</li>
              <li>• "Stop sharing" mode when you want to go invisible</li>
              <li>• See exactly who's following you (no fake follower mystery)</li>
              <li>• Your data stays yours (we don't sell it, period)</li>
            </ul>
          </div>

          <h2 className={`${fontSizes.heading} font-bold text-white mt-16 mb-8`}>
            This is for you if... 🎯
          </h2>
          
          <div className={`space-y-10 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
            <ul className="space-y-4 ml-6">
              <li>✅ You're tired of missing connections IRL</li>
              <li>✅ You want to meet people in your area</li>
              <li>✅ You're looking for study buddies, friends, or just good vibes</li>
              <li>✅ You believe the best conversations happen face-to-face</li>
              <li>✅ You want social media that actually makes you more social</li>
            </ul>
          </div>

          <h2 className={`${fontSizes.heading} font-bold text-white mt-16 mb-8`}>
            This isn't for you if... 🚫
          </h2>
          
          <div className={`space-y-10 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
            <ul className="space-y-4 ml-6">
              <li>❌ You're under 13 (sorry, legal stuff)</li>
              <li>❌ You're looking for another endless scroll app</li>
              <li>❌ You want to be fake or cause drama</li>
              <li>❌ You're not interested in meeting real people</li>
            </ul>
          </div>

          <h2 className={`${fontSizes.heading} font-bold text-white mt-16 mb-8`}>
            Ready to try something different? ⚡
          </h2>
          
          <div className={`space-y-10 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
            <p>
              Download ArroundU and start turning those "what if" moments into "remember when" stories.
            </p>
            
            <p>
              Because your next best friend, study partner, or adventure buddy might be sitting right next to you.
            </p>
          </div>

          <h2 className={`${fontSizes.heading} font-bold text-white mt-16 mb-8`}>
            Our promise to you: 🤝
          </h2>
          
          <div className={`space-y-10 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
            <ul className="space-y-4 ml-6">
              <li>• Real connections over fake followers</li>
              <li>• Your privacy over our profit</li>
              <li>• Good vibes over toxic behavior</li>
              <li>• Simple features over confusing menus</li>
            </ul>
            
            <p>
              This isn't just another social app. This is your chance to make social media actually... social.
            </p>
            
            <p>
              Welcome to ArroundU. Let's make some memories. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

