"use client";

import SmallLineStroke from "@/components/ui/icons/SmallLineStroke";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Custom React SplitText to avoid premium GSAP plugin errors
// It splits text into words, wraps them in overflow-hidden spans for clean "reveal" animations
const SplitTextReact = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom pb-2 -mb-2"
        >
          <span className="split-word inline-block translate-y-[120%] opacity-0">
            {word}
          </span>
          &nbsp;
        </span>
      ))}
    </span>
  );
};

const featuresData = [
  {
    id: 1,
    tabLabel: "Domain Registration",
    badge: "Domain Registration",
    heading: "The domain search shows the truth",
    image: "/images/Features.png",
    description:
      "No teaser pricing. No renewal shock. CortexGrip shows you exactly what your domain costs — today and every year after.",
    bullets: [
      "Live availability and pricing — updated in real time",
      "Free WHOIS privacy on every domain, forever",
      "150+ TLDs — .com, .io, .co, .store, .ai and more",
      "Multi-year registration with locked-in pricing",
      "Instant transfer-in from any registrar",
    ],
    buttonText: "Search Domain",
  },
  {
    id: 2,
    tabLabel: "AI Website Builder",
    badge: "AI Website Builder",
    heading: "Build stunning websites in minutes",
    image: "/images/Features.png",
    description:
      "Harness the power of AI to create beautiful, responsive websites without writing a single line of code. Just describe your vision.",
    bullets: [
      "AI-generated layouts and copy",
      "Responsive design out of the box",
      "Customizable themes and color palettes",
      "Integrated SEO optimization",
      "One-click publishing",
    ],
    buttonText: "Start Building",
  },
  {
    id: 3,
    tabLabel: "Domain Managements",
    badge: "Domain Managements",
    heading: "Complete control over your assets",
    image: "/images/Features.png",
    description:
      "Manage all your domains from a single, powerful dashboard. Update DNS, set up forwarding, and monitor expirations effortlessly.",
    bullets: [
      "Advanced DNS management",
      "Bulk updates and transfers",
      "Custom email forwarding",
      "Automated renewal alerts",
      "Detailed analytics and reporting",
    ],
    buttonText: "Manage Domains",
  },
];

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M10.0003 1.66699C5.40866 1.66699 1.66699 5.40866 1.66699 10.0003C1.66699 14.592 5.40866 18.3337 10.0003 18.3337C14.592 18.3337 18.3337 14.592 18.3337 10.0003C18.3337 5.40866 14.592 1.66699 10.0003 1.66699ZM13.9837 8.08366L9.25866 12.8087C9.14199 12.9253 8.98366 12.992 8.81699 12.992C8.65033 12.992 8.49199 12.9253 8.37533 12.8087L6.01699 10.4503C5.77533 10.2087 5.77533 9.80866 6.01699 9.56699C6.25866 9.32533 6.65866 9.32533 6.90033 9.56699L8.81699 11.4837L13.1003 7.20033C13.342 6.95866 13.742 6.95866 13.9837 7.20033C14.2253 7.44199 14.2253 7.83366 13.9837 8.08366Z"
      fill="#F6F6FE"
    />
  </svg>
);

export default function Features() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rippleContainerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stepNumRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const stepLineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const stepLabelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const currentIndexRef = useRef(-1);

  const triggerRipple = () => {
    const displacement = document.querySelector(".ripple-displacement");
    if (!displacement) return;

    // Reset any ongoing animation
    gsap.killTweensOf(displacement);

    // Creates a true liquid distortion effect (like fromanother.love WebGL transitions)
    // by animating the SVG displacement map scale.
    gsap.fromTo(
      displacement,
      { attr: { scale: 0 } },
      {
        attr: { scale: 50 }, // Intensity of the water distortion
        duration: 0.6,
        yoyo: true, // Distorts, then returns to 0
        repeat: 1,
        ease: "power2.inOut",
      },
    );
  };

  const showFeature = (idx: number) => {
    if (currentIndexRef.current === idx) return;
    const prev = currentIndexRef.current;
    currentIndexRef.current = idx;

    // Update step indicators
    featuresData.forEach((_, i) => {
      gsap.to(stepNumRefs.current[i], {
        color: i === idx ? "#F6F6FE" : "rgba(246,246,254,0.35)",
        duration: 0.3,
      });
      gsap.to(stepLineRefs.current[i], {
        opacity: i === idx ? 1 : 0,
        duration: 0.3,
      });
      gsap.to(stepLabelRefs.current[i], {
        opacity: i === idx ? 1 : 0,
        duration: 0.3,
      });
    });

    triggerRipple();

    // Fade out ALL other panels (Bulletproof fix to prevent overlapping)
    featureRefs.current.forEach((el, i) => {
      if (i !== idx && el) {
        gsap.killTweensOf(el);
        gsap.to(el, {
          opacity: 0,
          scale: 0.98,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (el) el.style.pointerEvents = "none";
          },
        });
      }
    });

    // Fade in new panel with slow zoom and split text animation
    const el = featureRefs.current[idx];
    if (el) {
      el.style.pointerEvents = "auto";
      gsap.killTweensOf(el);

      // 1. Slow zoom-in animation for the entire content block
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.1,
          ease: "power2.out",
        },
      );

      // 2. Animate the split words (heading, desc, bullets)
      const words = el.querySelectorAll(".split-word");
      gsap.fromTo(
        words,
        { y: "120%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          stagger: 0.015,
          ease: "power3.out",
          delay: 0.2, // Starts slightly after the panel begins its zoom
        },
      );
    }
  };

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      // Set initial invisible state explicitly for GSAP
      featureRefs.current.forEach((el, i) => {
        if (el) {
          gsap.set(el, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.97 });
          el.style.pointerEvents = i === 0 ? "auto" : "none";
        }
      });
      stepLineRefs.current.forEach(
        (el, i) => el && gsap.set(el, { opacity: i === 0 ? 1 : 0 }),
      );
      stepLabelRefs.current.forEach(
        (el, i) => el && gsap.set(el, { opacity: i === 0 ? 1 : 0 }),
      );
      stepNumRefs.current.forEach(
        (el, i) =>
          el &&
          gsap.set(el, {
            color: i === 0 ? "#F6F6FE" : "rgba(246,246,254,0.35)",
          }),
      );

      // Initialize the first feature so its text animates in correctly on load
      showFeature(0);

      // ScrollTrigger only tracks progress — CSS sticky does the pinning.
      const st = ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const newIdx = Math.min(
            Math.floor(self.progress * featuresData.length),
            featuresData.length - 1,
          );
          if (newIdx !== currentIndexRef.current) showFeature(newIdx);
        },
      });

      return () => st.kill();
    },
    { scope: wrapperRef, dependencies: [] },
  );

  return (
    // Tall wrapper = 3 × 100vh scroll distance.
    // The sticky section locks to the viewport as the user scrolls through it.
    <div ref={wrapperRef} style={{ height: `${featuresData.length * 75}vh` }}>
      {/* Invisible SVG Filter for Liquid Ripple Transition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="water-ripple" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.02"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            className="ripple-displacement"
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <section className="sticky top-0 w-full h-screen font-manrope bg-[#0E1029] py-24 flex items-center overflow-hidden">
        <div className="relative w-full max-w-360 mx-auto px-6 md:px-12 lg:px-20 z-10">
          <div className="flex flex-col xl:flex-row gap-6 justify-between">
            {/* Step indicators */}
            <div className="flex flex-col gap-2 justify-center items-start relative z-10">
              {featuresData.map((feature, idx) => (
                <div
                  key={feature.id}
                  className="flex items-center gap-2 text-[14px]"
                >
                  <span
                    ref={(el) => {
                      stepNumRefs.current[idx] = el;
                    }}
                    className="font-manrope font-semibold leading-5 tracking-normal"
                  >
                    {feature.id}
                  </span>
                  <span
                    ref={(el) => {
                      stepLineRefs.current[idx] = el;
                    }}
                    className="w-8 h-px bg-white block"
                  />
                  <span
                    ref={(el) => {
                      stepLabelRefs.current[idx] = el;
                    }}
                    className="font-stack-sans-notch text-right text-white font-light leading-4 whitespace-nowrap"
                  >
                    {feature.tabLabel}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature panels — stacked, revealed by scroll progress */}
            <div className="flex-1 relative">
              {featuresData.map((feature, idx) => (
                <div
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[idx] = el;
                  }}
                  className={`w-full flex flex-col xl:flex-row gap-4 lg:gap-6 justify-between ${
                    idx === 0
                      ? "relative pointer-events-auto"
                      : "absolute inset-0 pointer-events-none"
                  }`}
                  style={{
                    zIndex: idx + 1,
                    opacity: idx === 0 ? 1 : 0,
                  }}
                >
                  {/* Heading column */}
                  <div className="flex flex-col xl:mt-18 min-w-fit max-w-fit">
                    <div className="inline-flex items-center gap-2 p-2 rounded-[4px] border border-brand-secondary-100">
                      <SmallLineStroke />
                      <span className="font-manrope text-brand-secondary-50 text-[14px] leading-5 tracking-normal">
                        {feature.badge}
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl text-brand-secondary-50 font-stack-sans-notch font-medium leading-15 tracking-normal absolute lg:top-1/3 xl:top-1/2 transform -translate-y-1/2 left-0 max-w-118 z-20">
                      <SplitTextReact text={feature.heading} />
                    </h2>
                  </div>

                  {/* Image column */}
                  <div className="flex-2 flex justify-center">
                    {/* Apply SVG water ripple filter ONLY to the image wrapper */}
                    <div
                      className="relative aspect-475/430 max-h-107.5 w-full max-w-118.75 overflow-hidden"
                      style={{ filter: "url(#water-ripple)" }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.heading}
                        fill
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Details column */}
                  <div className="flex-1 flex flex-col items-start justify-center min-w-92">
                    <p className="text-brand-secondary-50 font-manrope text-[16px] leading-6 tracking-normal mb-6">
                      <SplitTextReact text={feature.description} />
                    </p>
                    <ul className="flex flex-col gap-2 mb-6 w-full">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckIcon className="size-4.25 mt-0.5" />
                          <span className="text-brand-secondary-50 font-manrope text-[16px] leading-6 tracking-normal">
                            <SplitTextReact text={bullet} />
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button className="px-7 py-3 bg-[#5B45FF] hover:bg-[#4E3BE0] text-white text-sm rounded-lg font-medium transition-all shadow-[0_0_20px_-5px_rgba(91,69,255,0.4)]">
                      {feature.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
