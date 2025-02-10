"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] bg-blue-600 flex items-center justify-center text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-blue-700 opacity-90"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 w-full">
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Unlimited data. No contract. $20/month.
          </h1>
          <p className="text-lg mb-6">
            Visible gives you access to Verizon’s award-winning network.
          </p>
          <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            See details
          </button>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0">
          <Image
            src="/images/hero-phone.png"
            alt="Promotional Phone"
            width={300}
            height={400}
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
