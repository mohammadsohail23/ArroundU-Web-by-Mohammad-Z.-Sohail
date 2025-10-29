"use client";

import { useState } from "react";

// Global Variables for Content Management
const globalContent = {
  lastUpdated: "Sep. 16th, 2025",
  companyName: "ArroundU Inc.",
  supportEmail: "support@arroundu.com",
  communityEmail: "hey@arroundu.com",
  dmcaEmail: "support@arroundu.com",
  companyLocation: "New York, USA",
};

// Enhanced Font Size Manager with better mobile responsiveness
const fontSizes = {
  hero: "text-[38px] sm:text-[64px]",
  heading: "text-[32px] sm:text-[42px]",
  subheading: "text-[24px] sm:text-[28px] ",
  body: "text-[16px] sm:text-[18px  ] ",
  small: "text-[14px] sm:text-[16px] ",
  emoji: "text-[20px] sm:text-[24px] ",
  tableHeader: "text-[12px] sm:text-[14px] ",
  tableCell: "text-[11px] sm:text-[12px] ",
};

function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={`mt-12 scroll-mt-28 text-2xl font-semibold text-white hover:scale-105 transition-transform duration-300 cursor-pointer cursor-line-highlight gradient-text ${props.className ?? ""}`}
    />
  );
}

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <div className="sm:px-30 px-10 mt-20 bg-black">
      <section className="content-page">
        <div className="content-container py-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                {activeTab === 'privacy' && (
                  <button
                    onClick={() => setActiveTab('terms')}
                    className="inline-block text-2xl text-white hover:text-gray-300 px-4 py-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: "#111111" }}
                  >
                    Can't find Terms & Conditions? <span className="underline">Click here</span>
                  </button>
                )}
                {activeTab === 'terms' && (
                  <button
                    onClick={() => setActiveTab('privacy')}
                    className="inline-block text-2xl text-white hover:text-gray-300 px-4 py-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: "#111111" }}
                  >
                    Can't find Privacy Policy? <span className="underline">Click here</span>
                  </button>
                )}
              </div>
              <div>
                <h1 className={`${fontSizes.hero} font-bold text-white leading-tight`}>
                  {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
                </h1>
                <p className="mt-4 text-lg font-bold text-gray-400 italic">Last updated: {globalContent.lastUpdated}</p>
              </div>

              {/* Navigation Help Buttons */}

            </div>

            {/* Privacy Policy Content */}
            {activeTab === 'privacy' && (
              <div className={`space-y-5 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                <h2 className={`${fontSizes.heading} font-bold text-white mt-10 mb-8`}>
                  Welcome to Privacy at ArroundU
                </h2>

                <p className={`${fontSizes.body} font-bold text-gray-200`}>
                  We built ArroundU to bring people closer, but never at the cost of your privacy.
                </p>

                <p className={`${fontSizes.body} font-bold text-gray-200`}>
                  That's why we want to be super clear about what we collect, why we collect it, how we use it,
                  who we share it with, and how long we keep it.
                </p>

                <p className={`${fontSizes.body} font-bold text-gray-200`}>
                  This Privacy Policy ("Policy") is our way of telling you, in plain language, how your data lives
                  inside ArroundU. No legal maze, no small print. Just the facts, explained in a way that makes
                  sense.
                </p>

                <p className={`${fontSizes.body} font-bold text-gray-200`}>
                  Your use of ArroundU is also subject to our Terms & Conditions. Please read those too —
                  together they form the rules of using ArroundU.
                </p>

                <p className={`${fontSizes.body} font-bold text-gray-200`}>
                  If you ever have a question, drop us a note at{" "}
                  <a className="underline text-white hover:text-gray-300" href="mailto:support@arroundu.com">
                    support@arroundu.com
                  </a>
                  . We'll get back to you as fast as we can.
                </p>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Who can use ArroundU
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• ArroundU is not for children under 13. We do not knowingly collect or store data from anyone under 13, and if we discover such data, we will delete it immediately.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• If you are 13–17, your parent or guardian should know you're using ArroundU and may request review or deletion of your data.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• If you're 18+, welcome aboard.</li>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Who we are
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>
                    ArroundU is run by ArroundU Inc., based in New York, USA.
                  </p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>
                    When we say "data," we mean anything that identifies you directly (like your username, email, or
                    photo) or indirectly (like your device ID or location radius).
                  </p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>
                    As the "controller" of your data, we are responsible for keeping it safe, using it only in the ways
                    we explain here, and respecting your rights.
                  </p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  What data we collect
                </h2>
                <div className={`space-y-8 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We collect three types of data:</p>

                  <div>
                    <p className={`${fontSizes.body} font-bold text-white mb-4`}>1. Data you provide us</p>
                    <ul className="mt-4 space-y-3 ml-6">
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Account info:</strong> Username, email, password.</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Profile info:</strong> Profile picture and bio (optional).</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Messages & media:</strong> Text, images, videos, scheduled messages you send.</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Contacts:</strong> If you choose to sync them, to invite people you may know.</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Support info:</strong> Data you send us when you reach out (emails, screenshots, issue details).</li>
                    </ul>
                  </div>

                  <div>
                    <p className={`${fontSizes.body} font-bold text-white mb-4`}>2. Data from your activity</p>
                    <ul className="mt-4 space-y-3 ml-6">
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Nearby presence:</strong> If you're within ~1 km (0.6 miles) of another user. We never share your exact address or a live map — just "you're close."</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Search:</strong> If you type in someone's name to look them up.</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Interactions:</strong> Who you follow, who follows you, who you block.</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Device info:</strong> Things like crash logs, app version, phone model, OS, IP address.</li>
                    </ul>
                  </div>

                  <div>
                    <p className={`${fontSizes.body} font-bold text-white mb-4`}>3. Data from others</p>
                    <ul className="mt-4 space-y-3 ml-6">
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Other users:</strong> When someone follows, blocks, or interacts with you.</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Partners:</strong> App stores, analytics, or notification providers.</li>
                      <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Authorities:</strong> Only if legally required.</li>
                    </ul>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Why we collect your data
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We use your data to:</p>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• Power the app (accounts, nearby list, search, following, chatting).</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• Show who's nearby without exposing your exact location.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• Let you look up people by name.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• Keep ArroundU safe and respectful (blocking system).</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• Improve the app by fixing bugs and tracking performance.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• Talk to you when you need help.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• Comply with laws and protect users if something goes wrong.</li>
                  </ul>
                  <p className={`${fontSizes.body} font-bold text-white mt-6`}>We never sell your data.</p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Who can access your data
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Other users:</strong> Your profile (username, photo, bio, stories, followers/following).</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Our team:</strong> Limited access, only when needed to keep the app running or solve problems.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Service providers:</strong> Hosting, analytics, and notifications.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Legal authorities:</strong> If the law requires it.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>If ArroundU is acquired:</strong> Data may transfer to the new company, but this same Privacy Policy will still apply.</li>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  How long we keep your data
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We keep your data as long as you're using ArroundU.</p>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>For now, you cannot delete your account, but you can:</strong></li>
                    <li className={`${fontSizes.body} font-bold text-gray-200 ml-6`}>- Block others.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200 ml-6`}>- Stop sharing your nearby status.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200 ml-6`}>- Edit or remove profile details.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• If you go inactive for a very long time, we may deactivate your account.</li>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Our legal bases
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>Depending on your location, we process your data based on:</p>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Contract:</strong> To provide the services you signed up for.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Legitimate interest:</strong> To improve features, prevent abuse, and keep ArroundU secure.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Consent:</strong> When you give permissions (like contacts or location). You can turn them off in your phone settings anytime.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Legal obligation:</strong> When the law requires us to keep or share something.</li>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Your rights
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>You may have the right to:</p>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Access:</strong> Ask us what data we hold about you.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Correct:</strong> Update info that's wrong or outdated.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Visibility:</strong> Control if you appear in "nearby" or not.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Block:</strong> Stop people from contacting you.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Parents:</strong> If you're under 18, your parent/guardian can request review or deletion of your data.</li>
                  </ul>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>Email support@arroundu.com to use these rights.</p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Cookie & Tracking Policy
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>Like most apps and websites, ArroundU may use cookies and similar technologies to make things work smoothly and to understand how people use our app.</p>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>What we use</strong> → basic cookies, device IDs, and analytics tools.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Why we use them</strong> → to keep you logged in, improve performance, and see what features people like.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>No creepy tracking</strong> → we don't sell your browsing data or follow you across random websites.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Your choice</strong> → you can disable cookies in your browser or phone settings, but some features may not work properly.</li>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Accessibility
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We want ArroundU to be open and usable by as many people as possible.</p>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• If you face accessibility issues (for example: vision, hearing, mobility, or other challenges), please let us know at support@arroundu.com.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• We're always working to improve and will do our best to address concerns quickly.</li>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  International transfers & Disputes
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>ArroundU is based in the United States. All of our main servers and operations are located in the U.S. However, if we work with trusted service providers outside the U.S., your data may be processed in other countries. Whenever this happens, we apply the same safeguards described in this Policy, including encryption, secure servers, and compliance with GDPR (Europe), UK privacy laws, and similar protections worldwide.</p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>Disputes about this Policy follow the same dispute resolution process set out in our Terms & Conditions.</p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Changes to this Policy
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>As ArroundU grows, this Privacy Policy will grow too. We'll update it if we launch new features, if laws change, or if we improve how we explain things.</p>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• If the changes are minor (like fixing wording), we may just update this page.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• If the changes are big (like how we handle your data), we'll let you know clearly in the app or by email before they take effect.</li>
                  </ul>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>The "last updated" date at the bottom will always show you the latest version.</p>
                </div>

                {/* Data Grid Table */}
                <div className="mt-24">
                  <h2 className={`${fontSizes.heading} font-bold text-white mb-8`}>
                    Data Summary Table
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-white/20">
                      <thead>
                        <tr className="bg-white/5">
                          <th className={`border border-white/20 p-4 text-left ${fontSizes.small} font-bold text-white`}>Data type</th>
                          <th className={`border border-white/20 p-4 text-left ${fontSizes.small} font-bold text-white`}>Why we collect it</th>
                          <th className={`border border-white/20 p-4 text-left ${fontSizes.small} font-bold text-white`}>Legal basis</th>
                          <th className={`border border-white/20 p-4 text-left ${fontSizes.small} font-bold text-white`}>How long we keep it</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Account info (username, email, password)</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To create and manage your account</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Contract</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>While your account is active (and for a short period after, if required by law for fraud prevention or disputes)</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Profile info (photo, bio)</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To personalize your profile</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Consent</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Until you update or remove it</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Messages & media</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To enable chats and scheduled messages</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Contract</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Until you delete them or while your account remains active/inactive before deactivation</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Contacts (if synced)</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To suggest people you may know</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Consent</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Until you turn syncing off</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Nearby presence</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To show if you're within ~1 km (0.6 miles)</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Consent</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Only while feature is active or location permissions are enabled</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Search data</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To let you find people by name</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Contract</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>While your account is active (and for a short period after, if required by law for fraud prevention or disputes)</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Interactions (follows, blocks)</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To power features and safety</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Legitimate interest</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>While your account is active (and for a short period after, if required by law for fraud prevention or disputes)</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Device info (IP, OS, crashes)</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To secure, fix, and improve the app</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Legitimate interest</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Retained for a limited period needed for security/bug fixes, then anonymized or deleted</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Support data</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To respond to your help requests</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Legitimate interest</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Until the issue is resolved</td>
                        </tr>
                        <tr>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Data from others</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>To operate services or comply with law</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>Legal obligation / Legitimate interest</td>
                          <td className={`border border-white/20 p-4 ${fontSizes.small} text-gray-200`}>As required by law or while account is active</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Contact us
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>
                      • <strong>For privacy/legal:</strong>{" "}
                      <a
                        href="mailto:support@arroundu.com"
                        className="underline hover:text-gray-100"
                      >
                        support@arroundu.com
                      </a>
                    </li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>
                      • <strong>For casual/community:</strong>{" "}
                      <a
                        href="mailto:hey@arroundu.com"
                        className="underline hover:text-gray-100"
                      >
                        hey@arroundu.com
                      </a>
                    </li>
                  </ul>

                  <h2 className={`${fontSizes.heading} font-bold text-white mt-16 mb-8`}>
                    Our Promise
                  </h2>

                  <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>
                      We're not some big tech company trying to harvest your data for profit. We're building ArroundU to help real people make real connections.
                    </p>

                    <p className={`${fontSizes.body} font-bold text-gray-200`}>
                      Your privacy isn't a product we sell. It's a promise we keep.
                    </p>

                    <p className={`${fontSizes.body} font-bold text-gray-200`}>
                      Thanks for trusting us with your data. We don't take that lightly. ✨
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Terms & Conditions Content */}
            {activeTab === 'terms' && (
              <div className={`space-y-5 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
               
                <div className={`space-y-10 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>
                    Welcome to ArroundU, created and operated by {globalContent.companyName} ("ArroundU," "we," "us," "our").
                  </p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>
                    These Terms & Conditions ("Terms") explain how you can use our app, website, and services
                    (together, the "Services").
                  </p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>
                    By using ArroundU, you agree to these Terms. If you don't agree, we can't let you use our
                    Services (sorry).
                  </p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>
                    We know, we know. Nobody actually reads this. But we made it as painless as possible because
                    we respect your time (and your brain cells).
                  </p>
                </div>

                <h2 className={`${fontSizes.subheading} font-bold text-white mt-24 mb-8`}>
                  Quick Guide to ArroundU's Terms
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>(This is a simple overview. The full Terms below are what actually apply.)</p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We know no one loves reading legal stuff, so here's the short version (the details below are what actually apply):</p>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>👶 Age</strong> → Must be 13+. Under 13 = not allowed. If you're 13–17, your parents/guardians should know you're here.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>🙋 Your account</strong> → Use real info, keep your password safe, don't pretend to be someone else.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>🎉 What you can do</strong> → Follow people, chat, share stories, search names, see who's nearby, block anyone who bothers you.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>🚫 What you can't do</strong> → No bullying, hate, illegal stuff, spam, or bots.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>🖼 Your content</strong> → You own it, but you give us permission to use it in the app.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>🔒 Privacy</strong> → We don't sell your data. We never show exact locations. Block & "Stop Sharing" are always available.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>📑 Copyright</strong> → Only post what you own. We follow the DMCA and remove infringing content.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>⚖️ Liability</strong> → We're not responsible for lost data, bugs, downtime, or what other users say/do.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>🏛 Law</strong> → Everything follows {globalContent.companyLocation} law and disputes go to {globalContent.companyLocation} courts.</li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>🔔 Updates</strong> → We may update these Terms. Big changes = we'll tell you in-app or by email.</li>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  1. Eligibility & Age
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <div className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• You must be at least 13 years old to use ArroundU.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect data from anyone under 13.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• If you are 13–17, you may use ArroundU, but your parent or guardian should be aware. They may request review, correction, or deletion of your data.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• If you are 18 or older, you may use all features of ArroundU without restrictions.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• By signing up, you confirm that you meet the minimum age requirement.</p>
                  </div>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>By signing up, you confirm that you are at least 13 years old.</p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  2. Your Account
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <div className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Provide accurate info (email, username, age).</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Keep your password safe. If your account gets hacked because you shared your login, that's on you.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• No impersonation, fake identities, or pretending to be someone else.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• We may suspend or delete accounts that break these Terms.</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  3. Using ArroundU
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>ArroundU helps you meet people nearby or by search, in a safe and simple way. Features include:</p>
                  <div className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Seeing people nearby (~1 km / 0.6 miles radius).</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Searching for people by name.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Following, messaging, scheduling messages, and sharing stories.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Blocking people you don't want to interact with.</p>
                  </div>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>ArroundU isn't another app. It's your space.</p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  4. Prohibited Activities
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>You agree not to:</p>
                  <div className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Harass, bully, spam, or abuse others.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Post hate, nudity, sexually explicit content, violence, or anything illegal.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Share private info without consent.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Use bots, scripts, or hacks.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Use ArroundU for unauthorized ads or business purposes.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Try to disrupt or reverse engineer the app.</p>
                  </div>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We may remove content or suspend accounts that break these rules.</p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  5. Your Content
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <div className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• You own the content you post (messages, photos, stories).</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• By posting, you give us a limited license to display, store, and share it inside ArroundU as intended.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• We never sell your content.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• If you delete content, it may remain briefly in backups, but won't be visible to others.</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  6. Our Rights
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <div className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• We own ArroundU: the app, logo, brand, features, and software.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• You only get a personal, limited license to use it.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Don't copy, sell, or rebrand ArroundU.</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  7. Privacy
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <div className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Covered by our Privacy Policy.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• We don't sell your data.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• We don't share exact locations — only approximate radius.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• You can block anyone or stop appearing as "nearby" anytime.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Account deletion isn't available yet, but editing/removing data is.</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  8. Safety Tools
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <div className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Block</strong> → prevents someone from contacting you again.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Stop Sharing</strong> → hides your nearby presence.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Support</strong> → email us at <span className="underline">{globalContent.supportEmail}</span> for help.</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  9. ArroundU Community Guidelines
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We want ArroundU to be fun, safe, and real. These guidelines explain what's cool (✅) and what's not (🚫) when you're using the app. Breaking them can get your content removed, your account suspended, or even banned.</p>
                  
                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>✅ What's Cool</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Be real → Share your vibes, not fakes.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Respect people → Treat others like you'd want to be treated.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Keep it fun → Stories, chats, hangs, and laughs are what we're here for.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Stay safe → Use block if someone crosses the line.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Create, don't hate → Positive energy makes the community better.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>🚫 Not Allowed</h3>
                    <div className="space-y-4 ml-6">
                      <div>
                        <p className={`${fontSizes.body} font-bold text-white mb-2`}>1. Harassment & Bullying</p>
                        <ul className="space-y-2 ml-4">
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- No insults, hate, or intimidation.</p>
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- Don't gang up on or harass people.</p>
                        </ul>
                      </div>
                      <div>
                        <p className={`${fontSizes.body} font-bold text-white mb-2`}>2. Hate Speech & Discrimination</p>
                        <ul className="space-y-2 ml-4">
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- Zero tolerance for racism, sexism, homophobia, transphobia, or discrimination.</p>
                        </ul>
                      </div>
                      <div>
                        <p className={`${fontSizes.body} font-bold text-white mb-2`}>3. Sexual or Inappropriate Content</p>
                        <ul className="space-y-2 ml-4">
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- No nudity or sexually explicit material.</p>
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- No grooming, sextortion, or attempts to exploit minors.</p>
                        </ul>
                      </div>
                      <div>
                        <p className={`${fontSizes.body} font-bold text-white mb-2`}>4. Violence & Harm</p>
                        <ul className="space-y-2 ml-4">
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- No threats, encouragement of self-harm, or glorifying violence.</p>
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- Don't share graphic or violent images.</p>
                        </ul>
                      </div>
                      <div>
                        <p className={`${fontSizes.body} font-bold text-white mb-2`}>5. Illegal Stuff</p>
                        <ul className="space-y-2 ml-4">
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- No drugs, weapons, scams, or anything against the law.</p>
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- Don't use ArroundU to buy/sell illegal items.</p>
                        </ul>
                      </div>
                      <div>
                        <p className={`${fontSizes.body} font-bold text-white mb-2`}>6. Spam & Bots</p>
                        <ul className="space-y-2 ml-4">
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- No fake accounts, mass follows, or spammy messages.</p>
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- No automated scripts or hacks.</p>
                        </ul>
                      </div>
                      <div>
                        <p className={`${fontSizes.body} font-bold text-white mb-2`}>7. Privacy Violations</p>
                        <ul className="space-y-2 ml-4">
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- Don't share private info (yours or someone else's) without permission.</p>
                          <p className={`${fontSizes.body} font-bold text-gray-200`}>- Don't post screenshots of private chats without consent.</p>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>🛡 Safety Tools</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Block</strong> → Stops someone from contacting you.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Stop Sharing</strong> → Hide yourself from nearby discovery.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• <strong>Support</strong> → Email us at <span className="underline">{globalContent.supportEmail}</span> if you need help.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>👶 Protecting Minors</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• ArroundU is 13+.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• No users under 13 allowed.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• We strictly ban exploitation, grooming, or targeting of minors. Violations = immediate ban + law enforcement report.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>📢 Reporting</h3>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>If you see someone breaking these guidelines:</p>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Block them.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Email us at <span className="underline">{globalContent.supportEmail}</span> with screenshots/details.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>⚖️ Consequences</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• First violation → warning or content removal.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Serious/repeated violations → account suspension or permanent ban.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Extreme cases (like threats, exploitation, or illegal activity) → reported to authorities.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>🌀 The Spirit of ArroundU</h3>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>We built ArroundU to bring people closer — safely, respectfully, and with good vibes only. If you're ever unsure if something is okay, ask yourself:</p>
                    <p className={`${fontSizes.body} font-bold text-white mt-4`}>✨ "Would I be cool if someone did this to me?"</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>If the answer is no → don't post it.</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  10. COPPA & Minors
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <ul className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• We comply with COPPA (Children's Online Privacy Protection Act).</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• No users under 13 are allowed.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Parents/guardians of 13–17-year-olds may review or request deletion of their child's data.</p>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  11. DMCA & Copyright Policy
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>ArroundU respects the intellectual property rights of others and expects our users to do the same.</p>
                  
                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>1. User responsibility</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- You must only upload or share content you own or have the right to use.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Do not post, share, or distribute content that infringes on someone else's copyright, trademark, or intellectual property rights.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>2. DMCA compliance</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Under the Digital Millennium Copyright Act (DMCA), {globalContent.companyName} will respond to valid copyright infringement notices.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- If we receive a valid DMCA notice, we may remove or restrict access to the content in question, and we may suspend or terminate accounts of repeat infringers.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>3. How to file a DMCA notice</h3>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>If you believe that content on ArroundU infringes your copyright, please send a written notice with the following information:</p>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Your name, address, and contact information.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- A description of the copyrighted work you claim is infringed.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- The exact URL or description of where the allegedly infringing material is located in ArroundU.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- A statement that you believe in good faith that use of the material is not authorized by the copyright owner, its agent, or the law.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- A statement that the information in your notice is accurate and, under penalty of perjury, that you are the copyright owner or authorized to act on behalf of the copyright owner.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Your physical or electronic signature.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>4. Send your notice to:</h3>
                    <div className="ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>DMCA Agent</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>{globalContent.companyName}</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>Email: <span className="underline">{globalContent.dmcaEmail}</span></p>
                    </div>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>5. Counter-notices</h3>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>If you believe content was removed by mistake or misidentification, you may send us a counter-notice with the following:</p>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Your contact information.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Identification of the removed material and its location before removal.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• A statement under penalty of perjury that you believe the material was wrongly removed.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Your consent to the jurisdiction of {globalContent.companyLocation} courts.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Your physical or electronic signature.</p>
                    </ul>
                  </div>

                  <div>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>6. If we receive a valid counter-notice, we may restore the content unless the original complainant files a court action within 10 business days.</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  12. Legal Protections
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>1. No guarantees</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- ArroundU is provided "as is" and "as available."</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- We don't guarantee error-free, secure, or always-on Services.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>2. Not responsible for user actions</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- We are not responsible for what other users say or do.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Use block tools if someone misbehaves.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>3. No responsibility for losses</h3>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>To the maximum extent permitted by law, we are not liable for:</p>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Lost data or content.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Emotional distress or missed opportunities.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Damages from other users.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>- Damages from downtime, bugs, or hacked accounts.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>4. Indemnity</h3>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>If your actions cause harm, break laws, or cost us money, you agree to cover our expenses (including legal fees).</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  13. Suspension & Termination
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We may suspend or delete accounts if you:</p>
                  <ul className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Break these Terms.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Post illegal/harmful content.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Abuse or harass others.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Misuse features.</p>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  14. Payments & Refunds
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>Right now, ArroundU is free. If we add paid features later:</p>
                  <ul className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Payments are handled through the App Store or Google Play Store.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Refunds are also managed by those stores — not us directly.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Please check their refund policies if you ever make a purchase.</p>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  15. End-User License Agreement (EULA)
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>{globalContent.companyName} owns the app, the code, the design, and the brand. When you use ArroundU, we're giving you a personal, limited, non-exclusive license to use the app for fun and connection — nothing more.</p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>That means:</p>
                  <ul className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• ❌ You can't copy, modify, distribute, or reverse-engineer our app.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• ❌ You can't use our logos, branding, or content without permission.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• ✅ You can use ArroundU for personal, non-commercial use, as long as you follow our rules.</p>
                  </ul>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We keep all intellectual property rights in ArroundU.</p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  16. International Use
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>ArroundU is run from the United States. All servers, databases, and providers are U.S.-based. If you use ArroundU outside the U.S., you're responsible for following local laws.</p>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  17. Dispute Resolution & Governing Law
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We hope you never run into legal issues with us — but just in case:</p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>Important note for international users: Certain disputes may not be subject to arbitration under your local laws. Where this is the case, those disputes will be handled in accordance with the law of your country.</p>
                  
                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>Arbitration (primary method):</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Any dispute, claim, or controversy arising out of or relating to these Terms or your use of ArroundU will be resolved by binding arbitration under the rules of the American Arbitration Association (AAA).</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• Arbitration will take place in {globalContent.companyLocation}, USA, and will be conducted in English.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• You and ArroundU both waive the right to a trial by jury and agree that disputes will not be brought as class actions or consolidated with claims of others.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>Fallback – Courts (if arbitration is unenforceable):</h3>
                    <ul className="space-y-4 ml-6">
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• If, for any reason, arbitration is found unenforceable or invalid, then disputes will be resolved exclusively in the state or federal courts located in {globalContent.companyLocation}, USA.</p>
                      <p className={`${fontSizes.body} font-bold text-gray-200`}>• You consent to personal jurisdiction in those courts.</p>
                    </ul>
                  </div>

                  <div>
                    <h3 className={`${fontSizes.subheading} font-bold text-white mb-4`}>Governing Law:</h3>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>These Terms are governed by the laws of the State of {globalContent.companyLocation} and the United States, without regard to conflict of laws principles.</p>
                  </div>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  18. Updates to These Terms
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We may update these Terms as ArroundU grows.</p>
                  <ul className="space-y-4 ml-6">
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Small changes (typos, clarifications) → posted here.</p>
                    <p className={`${fontSizes.body} font-bold text-gray-200`}>• Big changes (rights, data handling) → we'll notify you in-app or by email before they take effect.</p>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  Contact us
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <ul className="space-y-4 ml-6">
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>
                      • <strong>For legal or support and DMCA:</strong>{" "}
                      <a
                        href={`mailto:${globalContent.supportEmail}`}
                        className="underline hover:text-gray-100"
                      >
                        {globalContent.supportEmail}
                      </a>
                    </li>
                    <li className={`${fontSizes.body} font-bold text-gray-200`}>
                      • <strong>For community ideas:</strong>{" "}
                      <a
                        href={`mailto:${globalContent.communityEmail}`}
                        className="underline hover:text-gray-100"
                      >
                        {globalContent.communityEmail}
                      </a>
                    </li>
                  </ul>
                </div>

                <h2 className={`${fontSizes.heading} font-bold text-white mt-24 mb-8`}>
                  🌟 The Bottom Line
                </h2>
                <div className={`space-y-6 ${fontSizes.body} font-bold text-gray-200 leading-relaxed`}>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>We built ArroundU to bring people together safely and respectfully. If you ever wonder if something's okay, ask yourself: "Would I be cool if someone did this to me?"</p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>If the answer is no → don't do it.</p>
                  <p className={`${fontSizes.body} font-bold text-gray-200`}>That's it. Now go make some connections! ✨</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}