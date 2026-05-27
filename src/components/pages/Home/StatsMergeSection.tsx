"use client";

import GlobeIcon from "@/components/ui/icons/GlobeIcon";
import LargeLineStroke from "@/components/ui/icons/LargeLineStroke";
import SmallLineStroke from "@/components/ui/icons/SmallLineStroke";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

export default function StatsMergeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftTopRef = useRef<HTMLDivElement | null>(null);
  const leftBottomRef = useRef<HTMLDivElement | null>(null);
  const rightTopRef = useRef<HTMLDivElement | null>(null);
  const rightBottomRef = useRef<HTMLDivElement | null>(null);
  const topCenterRef = useRef<HTMLDivElement | null>(null);
  const bottomCenterRef = useRef<HTMLDivElement | null>(null);
  const centerTextRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) {
      return;
    }

    const cards = [
      leftTopRef.current,
      leftBottomRef.current,
      rightTopRef.current,
      rightBottomRef.current,
      topCenterRef.current,
      bottomCenterRef.current,
    ].filter(Boolean) as HTMLDivElement[];

    const getDeltaToCenter = (el: HTMLElement) => {
      const sectionRect = sectionRef.current!.getBoundingClientRect();
      const centerX = sectionRect.left + sectionRect.width / 2;
      const centerY = sectionRect.top + sectionRect.height / 2;
      const rect = el.getBoundingClientRect();
      const elCenterX = rect.left + rect.width / 2;
      const elCenterY = rect.top + rect.height / 2;

      return {
        x: centerX - elCenterX,
        y: centerY - elCenterY,
      };
    };

    const ctx = gsap.context(() => {
      gsap.set(leftTopRef.current, { zIndex: 60 });
      gsap.set(topCenterRef.current, { zIndex: 50 });
      gsap.set(rightTopRef.current, { zIndex: 40 });
      gsap.set(bottomCenterRef.current, { zIndex: 30 });
      gsap.set(leftBottomRef.current, { zIndex: 20 });
      gsap.set(rightBottomRef.current, { zIndex: 10 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top", // Pin it exactly when it reaches the top
          end: "+=150%", // Require scrolling for 1.5 screen heights to finish
          scrub: 2.5, // Extra smooth buttery delay
          pin: true, // Keep it on screen so we have room for the slow scroll
        },
      });

      cards.forEach((card) => {
        timeline.to(
          card,
          {
            x: () => getDeltaToCenter(card).x,
            y: () => getDeltaToCenter(card).y,
            ease: "power2.inOut", // Smooth easing instead of linear
            duration: 1, // Explicitly take 1 unit of time
          },
          0,
        );
      });

      if (leftTopRef.current) {
        timeline.to(
          leftTopRef.current,
          { scale: 1.5, ease: "power2.inOut", duration: 1 }, // Scale takes 1 unit of time
          1, // Start exactly when the cards finish converging (at time 1)
        );
      }

      if (centerTextRef.current) {
        timeline.to(
          centerTextRef.current,
          { scale: 0.58, ease: "power2.inOut", duration: 0.9 },
          1,
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen bg-brand-secondary-50 flex items-center justify-center relative overflow-hidden"
    >
      <div
        ref={centerTextRef}
        className="flex flex-col items-center gap-4 px-4"
      >
        {/* Quick Facts Badge */}
        <div className="flex items-center gap-2.5 rounded-[4px] border border-brand-primary-300 py-2 px-3">
          <SmallLineStroke className="size-4.5" />
          <span className="font-manrope text-brand-primary-400 text-base font-medium leading-6 tracking-normal">
            Quick Facts
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl text-center text-brand-primary-500 font-stack-sans-notch font-medium leading-15 tracking-normal">
          Trusted by businesses, creators, <br className="hidden md:inline" />
          and developers worldwide
        </h2>
      </div>

      {/* Floating Stat Cards */}
      <div>
        {/* Left Top Card*/}
        <div
          ref={leftTopRef}
          className="flex items-center justify-center gap-2.5 p-8 aspect-290/230 min-h-57.5 rounded-[12px] bg-brand-secondary-700 absolute top-20 -left-1/10 z-100"
        >
          <LargeLineStroke />
        </div>

        {/* Left Bottom Card*/}
        <div
          ref={leftBottomRef}
          className="flex flex-col items-center justify-center gap-2.5 p-8 aspect-290/230 min-h-57.5 rounded-[12px] bg-light-blue-100 absolute bottom-20 -left-1/10"
        >
          <div className="p-3 rounded-[8px] bg-white">
            <GlobeIcon />
          </div>
          <h3 className="text-brand-secondary-800 text-center font-stack-sans-notch text-[24px] leading-9 tracking-normal">
            TLDS Available
          </h3>
          <p className="text-brand-secondary-500 text-center font-stack-sans-notch text-[60px] font-semibold leading-9 tracking-normal mt-4">
            100K+
          </p>
        </div>

        {/* Right Top Card */}
        <div
          ref={rightTopRef}
          className="flex flex-col items-center justify-center gap-2.5 p-8 aspect-290/230 min-h-57.5 rounded-[12px] bg-light-blue-100 absolute top-20 -right-1/10"
        >
          <div className="p-3 rounded-[8px] bg-white">
            <GlobeIcon />
          </div>
          <h3 className="text-brand-secondary-800 text-center font-stack-sans-notch text-[24px] leading-9 tracking-normal">
            Domains Registered
          </h3>
          <p className="text-brand-secondary-500 text-center font-stack-sans-notch text-[60px] font-semibold leading-9 tracking-normal mt-4">
            100K+
          </p>
        </div>

        {/* Right Bottom Card*/}
        <div
          ref={rightBottomRef}
          className="flex items-center justify-center gap-2.5 p-8 aspect-290/230 min-h-57.5 rounded-[12px] bg-brand-secondary-700 absolute bottom-20 -right-1/10"
        >
          <LargeLineStroke />
        </div>

        {/* Top Center Card */}
        <div
          ref={topCenterRef}
          className="flex flex-col items-center justify-center gap-2.5 p-8 aspect-290/230 min-h-57.5 rounded-[12px] bg-light-blue-100 absolute -top-1/10 left-1/2 transform -translate-x-1/2"
        >
          <div className="p-3 rounded-[8px] bg-white">
            <GlobeIcon />
          </div>
          <h3 className="text-brand-secondary-800 text-center font-stack-sans-notch text-[24px] leading-9 tracking-normal">
            Domains Registered
          </h3>
          <p className="text-brand-secondary-500 text-center font-stack-sans-notch text-[60px] font-semibold leading-9 tracking-normal mt-4">
            100K+
          </p>
        </div>

        {/* Bottom Center Card */}
        <div
          ref={bottomCenterRef}
          className="flex flex-col items-center justify-center gap-2.5 p-8 aspect-290/230 min-h-57.5 rounded-[12px] bg-light-blue-100 absolute -bottom-1/10 left-1/2 transform -translate-x-1/2"
        >
          <div className="p-3 rounded-[8px] bg-white">
            <GlobeIcon />
          </div>
          <h3 className="text-brand-secondary-800 text-center font-stack-sans-notch text-[24px] leading-9 tracking-normal">
            Active Websites
          </h3>
          <p className="text-brand-secondary-500 text-center font-stack-sans-notch text-[60px] font-semibold leading-9 tracking-normal mt-4">
            100K+
          </p>
        </div>
      </div>
    </section>
  );
}
