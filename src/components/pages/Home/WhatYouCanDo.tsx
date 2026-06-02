"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    count: "01",
    title: "Search and claim your domain",
    description:
      "Type any name — we'll show you what's available instantly, with live pricing. No bait-and-switch, no surprise renewal costs.",
    image: "/images/ClaimDomain.webp",
  },
  {
    count: "02",
    title: "AI Website Builder",
    description:
      "Use our AI-powered website builder to create stunning websites without any coding experience. Customize every aspect of your site with our intuitive drag-and-drop editor.",
    image: "/images/BuildWebsite.webp",
  },
  {
    count: "03",
    title: "Domain Managements",
    description:
      "Easily manage all your domains in one place. Update DNS settings, set up email forwarding, and keep track of renewal dates with our user-friendly dashboard.",
    image: "/images/ManageDomain.webp",
  },
];

export default function WhatYouCanDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!section || !container || panels.length === 0) return;

    const ctx = gsap.context(() => {
      // 1. Initial pop-up for the whole container when scrolling into view
      gsap.from(container, {
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
        },
      });

      // 2. The pinned timeline for the transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // Reduced scroll distance for a more responsive feel
          end: () => `+=${window.innerHeight * features.length * 1.15}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Initialize states to form a diagonal "train" of images
      panels.forEach((panel, i) => {
        const texts = panel.querySelectorAll(".anim-text");
        const image = panel.querySelector(".anim-image");

        if (i === 0) {
          gsap.set(texts, { opacity: 1, y: 0 });
        } else {
          gsap.set(texts, { opacity: 0, y: 50 });
        }

        // All images start with opacity 1 and are spaced out diagonally.
        // This makes the next image peek from the bottom right corner automatically.
        gsap.set(image, { opacity: 1, x: `${i * 110}%`, y: `${i * 110}%` });
      });

      panels.forEach((panel, i) => {
        if (i < features.length - 1) {
          // Shorter pause before transitioning
          tl.to({}, { duration: 0.5 });

          // Slide ALL images simultaneously up the diagonal track
          panels.forEach((p, j) => {
            const img = p.querySelector(".anim-image");
            tl.to(
              img,
              {
                x: `${(j - (i + 1)) * 110}%`,
                y: `${(j - (i + 1)) * 110}%`,
                duration: 3,
                ease: "power2.inOut",
              },
              `trans-${i}`,
            );
          });

          // Fade out the outgoing image as it moves to the top-left corner
          const currentImage = panel.querySelector(".anim-image");
          tl.to(
            currentImage,
            {
              opacity: 0,
              duration: 3,
              ease: "power2.inOut",
            },
            `trans-${i}`,
          );

          // Texts transition sequentially so they don't merge/overlap
          const currentTexts = panel.querySelectorAll(".anim-text");
          const nextTexts = panels[i + 1].querySelectorAll(".anim-text");

          // Fade out current text
          tl.to(
            currentTexts,
            {
              y: -50,
              opacity: 0,
              duration: 1.5,
              ease: "power2.in",
            },
            `trans-${i}`,
          );

          // Fade in next text at the end of the transition
          tl.to(
            nextTexts,
            {
              y: 0,
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            },
            `trans-${i}+=1.5`,
          );
        }
      });

      // Final pause so the last feature stays visible for a bit before unpinning
      tl.to({}, { duration: 0.5 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full h-full max-w-360 mx-auto px-6 md:px-12 lg:px-20"
      >
        {features.map((feature, i) => (
          <div
            key={feature.count}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className="absolute inset-0 flex justify-between py-30"
          >
            <div className="w-54.25 h-47.75"></div>
            {/* Adjusted from -bottom-1/4 to bottom-0 to ensure it is always visible on screen */}
            <h4 className="anim-text text-brand-secondary-500 font-stack-sans-notch text-[190px] leading-47.5 tracking-normal absolute bottom-8 left-20 pointer-events-none">
              {feature.count}
            </h4>
            <div className="max-w-238.75">
              <h2 className="anim-text text-brand-primary-500 font-stack-sans-notch text-4xl font-medium leading-12 tracking-normal mb-6 pointer-events-none">
                {feature.title}
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={444}
                  height={513}
                  className="anim-image rounded-lg aspect-444/513 max-w-111 w-full object-cover"
                />
                <p className="anim-text text-brand-primary-500 font-manrope text-[18px] font-semibold leading-7 tracking-normal pointer-events-none">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
