"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-brand-primary-300 overflow-hidden">
      {/* Video Container covering CTA and Links */}
      <div className="relative w-full flex flex-col items-center justify-between px-6 py-20 overflow-hidden">
        {/* Loop Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
          style={{ pointerEvents: "none" }}
        >
          <source src="/videos/Footer_Video.webm" type="video/webm" />
        </video>

        {/* Ambient Dark Overlays */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(5, 4, 16, 0.1) 0%, rgba(5, 4, 16, 0.9) 100%)",
          }}
        />
        {/* Top Fade Overlay to blend with preceding section */}
        <div
          className="absolute inset-x-0 top-0 h-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #050410 0%, transparent 100%)",
          }}
        />
        {/* Bottom Fade Overlay to blend with the solid copyright bar */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #050410 0%, transparent 100%)",
          }}
        />

        {/* Cohesive Content Wrapper */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col">
          {/* CTA Content Section */}
          <div className="flex flex-col items-center text-center mb-36">
            <h2 className="text-4xl md:text-5xl font-semibold leading-15 tracking-normal text-brand-secondary-50 font-stack-sans-notch">
              Your domain is waiting. Your <br />
              website builds itself.
            </h2>

            <p className="mt-2.5 text-lg md:text-[20px] text-white font-manrope text-center leading-8 max-w-195">
              Join 80,000+ businesses who started with a CortexGrip domain. It
              takes five minutes. No card required to start.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/search"
                className="w-full sm:w-auto py-4.5 px-9 rounded-[8px] bg-brand-secondary-500 border border-brand-secondary-500 backdrop-blur-xs hover:bg-transparent hover:border-brand-secondary-50 text-brand-primary-50 font-manrope text-[14px] leading-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(91,80,255,0.4)] text-center cursor-pointer active:scale-95"
              >
                Search your domain now
              </Link>
              <Link
                href="#pricing"
                className="w-full sm:w-auto py-4.5 px-9 rounded-[8px] border border-brand-secondary-50 bg-transparent backdrop-blur-xs text-brand-primary-50 font-manrope text-[14px] leading-5 transition-all duration-300 hover:bg-brand-secondary-500 hover:shadow-[0_0_15px_rgba(2,139,109,0.25)] text-center cursor-pointer active:scale-95"
              >
                See Pricing
              </Link>
            </div>
          </div>

          {/* Links & Brand Info Section (now overlaid on top of the background video) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pt-10">
            {/* Left Column: Logo, Description & Socials */}
            <div className="flex flex-col items-start lg:col-span-6">
              <Link
                href="/"
                className="transition-transform hover:scale-[1.02]"
              >
                <Image
                  src="/logo/dark-logo.svg"
                  alt="Cortexgrip Logo"
                  width={180}
                  height={34}
                  className="h-11 w-auto object-contain"
                  priority
                />
              </Link>

              <p className="mt-6 text-[16px] text-white font-manrope max-w-122.5 leading-6 tracking-normal">
                CortexGrip gives you your domain and your website — without the
                complexity. Search, register, build, and publish, all from one
                place. Your corner of the internet starts here.
              </p>

              {/* Social Channels */}
              <div className="flex flex-wrap items-center gap-6 mt-10 text-[16px] font-stack-sans-notch text-brand-secondary-50 text-center leading-6 tracking-normal">
                {[
                  { name: "Facebook", href: "https://facebook.com" },
                  { name: "Instagram", href: "https://instagram.com" },
                  { name: "Dribbble", href: "https://dribbble.com" },
                  { name: "Behance", href: "https://behance.net" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-secondary-200 transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Navigation Links & Contact Email */}
            <div className="flex flex-col justify-between lg:col-span-6 items-start gap-10">
              {/* Horizontal Nav Links */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-[18px] font-manrope text-center font-medium leading-7 tracking-normal text-brand-secondary-50 items-center justify-between w-full">
                {[
                  { name: "Our Feature", href: "#features" },
                  { name: "About Us", href: "#about" },
                  { name: "AI Website Builder", href: "#ai-builder" },
                  { name: "Contact Us", href: "#contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-brand-secondary-200 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Contact Email Section */}
              <div className="flex flex-col items-start">
                <span className="text-[16px] font-manrope text-white leading-6 tracking-normal">
                  You can also email us at:
                </span>
                <a
                  href="mailto:Contact@cortexgrip.com"
                  className="mt-2 text-2xl sm:text-3xl md:text-[36px] font-semibold text-brand-secondary-50 font-stack-sans-notch leading-12 tracking-normal hover:text-brand-secondary-200 transition-colors duration-300"
                >
                  Contact@cortexgrip.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solid Copyright Footer Bar */}
      <div className="relative z-20 bg-brand-primary-700 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[16px] leading-6 font-stack-sans-notch text-brand-secondary-50">
          <span>
            @ {new Date().getFullYear()} Cortexgrip. All Rights Reserved
          </span>
          <div className="flex items-center gap-1.5">
            <Link
              href="/privacy"
              className="hover:text-brand-secondary-200 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-brand-secondary-200 transition-colors duration-200"
            >
              Terms and conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
