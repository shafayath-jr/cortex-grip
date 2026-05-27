"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function HeroSection() {
  const [domain, setDomain] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching domain:", domain);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center bg-brand-primary-900 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        style={{ pointerEvents: "none" }}
      >
        <source src="/videos/Hero_Video.webm" type="video/webm" />
      </video>

      {/* Radial overlay to darken edges for premium contrast and readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(5, 4, 16, 0.1) 0%, rgba(5, 4, 16, 0.7) 100%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-stack-sans-notch">
            Get the perfect domain <br />
            Build your site with AI.
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-light-blue-100/80 leading-relaxed font-manrope font-light">
            CortexGrip makes it simple — search and register your domain, then
            let AI build your website in minutes. No tech skills needed.
          </p>

          {/* Domain Search Form */}
          <form onSubmit={handleSearch} className="mt-14 w-full max-w-xl">
            <div className="relative">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Search your Domain...."
                className="w-full bg-transparent border-b border-light-blue-500/30 focus:border-light-blue-500 text-white placeholder:text-light-blue-100/40 py-4 text-xl sm:text-2xl outline-none transition-colors duration-300 font-manrope font-light tracking-wide"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="mt-8 flex items-center justify-center gap-2.5 py-4 px-6 rounded-[8px] bg-secondary-500 hover:bg-secondary-600 text-white font-manrope text-[18px] font-normal leading-7 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95 cursor-pointer"
            >
              <FiSearch className="size-5" />
              <span>Search Domain</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
