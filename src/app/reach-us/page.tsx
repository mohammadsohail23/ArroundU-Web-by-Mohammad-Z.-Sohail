import type { Metadata } from "next";
import ReachUsForm from "@/components/ReachUsForm";

export const metadata: Metadata = {
  title: "Reach Us • ArroundU",
  description: "Questions or feedback? Say hello to the ArroundU team.",
};

export default function ReachUsPage() {
  return (
    <section className="content-page bg-black">
      <div className="w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
        <h1
  className="font-manrope font-medium leading-[180%] tracking-[-0.0182em] text-left"
  style={{ 
    fontSize: '48px', 
    lineHeight: '86px' 
  }}
>
  <span className="text-gray-400">Have a </span>
  <span className="text-white">question</span>
  <span className="text-gray-400"> or </span>
  <span className="text-white">feedback</span>
  <span className="text-gray-400">? We’d love to hear from you! Just </span>
  <span className="text-white">drop your details </span>
  <span className="text-gray-400">below and </span>
  <span className="text-white">we'll get back to you</span>
  <span className="text-gray-400">. (You can also </span>
  <span className="text-white">share</span>
  <span className="text-gray-400"> the</span>
  <span className="text-white"> changes</span>
  <span className="text-gray-400"> you’d </span>
  <span className="text-white"> like to see.)</span>
</h1>

          
          <div className="w-full sm:mt-5 mt-10">
            <ReachUsForm />
          </div>
        </div>
      </div>
    </section>
  );
}
