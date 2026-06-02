"use client";

import QuestionMark from "@/components/ui/icons/QuestionMark";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Can I transfer a domain I already own to CortexGrip?",
    answer:
      "Got questions? We've gathered the most common ones here — along with simple, helpful answers to guide you through.",
  },
  {
    question: "Do I need a domain to use the AI website builder?",
    answer:
      "You need an active domain registered with CortexGrip to publish your site. If you don't have one yet, you can search and buy one in the same flow.",
  },
  {
    question: "Are renewal prices the same as registration prices?",
    answer:
      "Yes. We don't do first-year discount bait. The price you register at is the same price you renew at, every year.",
  },
  {
    question: "How long does my AI-generated website take to go live?",
    answer:
      "Your preview URL is live instantly. DNS propagation — so the site loads on your domain — takes up to 48 hours, usually much less.",
  },
  {
    question: "What happens if my domain expires?",
    answer:
      "We'll email you at 90, 30, and 7 days before expiry. With auto-renewal on, we handle it automatically. You can also renew manually from your dashboard anytime.",
  },
  {
    question: "Is WHOIS privacy free?",
    answer:
      "Always. Every domain registered with CortexGrip includes free WHOIS privacy protection — no upsells, ever.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const contactCardRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      if (leftContentRef.current) {
        tl.from(leftContentRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      }

      if (contactCardRef.current) {
        tl.from(
          contactCardRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      const faqElements = faqsRef.current.filter(Boolean);
      if (faqElements.length > 0) {
        tl.from(
          faqElements,
          {
            x: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }
    },
    { scope: sectionRef }
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 font-manrope overflow-hidden">
      <div className="max-w-360 mx-auto px-4 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-16 xl:gap-24 lg:justify-between">
        {/* Left Side: Title & Contact Card */}
        <div className="w-full lg:max-w-107.75 flex flex-col items-center">
          <div ref={leftContentRef} className="flex flex-col">
            <h2 className="text-4xl sm:text-5xl font-medium text-brand-primary-500 font-stack-sans-notch leading-15 tracking-normal">
              Questions we get asked a lot
            </h2>
            <p className="text-brand-primary-500 text-[18px] leading-7 tracking-normal font-manrope max-w-107.75 mt-4 my-12">
              Got questions? We've gathered the most common ones here — along
              with simple, helpful answers to guide you through.
            </p>
          </div>

          {/* Contact Card */}
          <div ref={contactCardRef} className="relative overflow-hidden rounded-[13px] bg-brand-primary-600 p-7  shadow-xl max-w-107.75 w-full">
            {/* Background Faded Question Mark */}
            <div className="absolute bottom-3 right-4 h-34.25 w-auto pointer-events-none z-0">
              <QuestionMark className="h-full w-auto" />
            </div>

            <div className="relative z-10 flex flex-col items-start gap-4">
              <h3 className="font-stack-sans-notch text-[30px] font-medium leading-10 tracking-normal text-brand-primary-50">
                Still have a Questions?
              </h3>
              <p className="font-manrope text-brand-primary-50 text-[16px] leading-6 tracking-normal">
                Can't find the answer to your Question? Send us an email we'll
                back to you soon as possible!
              </p>
              <Link
                href="#contact"
                className="mt-14 py-4 px-14 rounded-[8px] bg-brand-secondary-500 hover:bg-brand-secondary-600 text-brand-primary-50 font-manrope text-[14px]  leading-5 transition-colors duration-200 shadow-md cursor-pointer active:scale-95"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Accordion list */}
        <div className=" flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                ref={(el) => {
                  faqsRef.current[index] = el;
                }}
                className="border-b border-[#E2E8F0] py-6 first:pt-0 last:border-b-0"
              >
                {/* Header / Question button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-6 group text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-brand-primary-500 font-stack-sans-notch text-[18px]  leading-7 group-hover:text-brand-secondary-400 transition-all duration-300">
                    {faq.question}
                  </span>

                  {/* Plus / Minus Icon Container */}
                  <span
                    className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-[6px] bg-brand-secondary-50 text-brand-secondary-500 transition-all duration-300 ${
                      isOpen
                        ? "shadow-[0_0_10px_rgba(79,70,229,0.2)]"
                        : "group-hover:bg-brand-secondary-100 group-hover:text-slate-700"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="size-5 transition-transform duration-300 rotate-180" />
                    ) : (
                      <Plus className="size-5 transition-transform duration-300" />
                    )}
                  </span>
                </button>

                {/* Smooth Height Expand Answer Container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden max-w-107.75">
                    <p className="text-brand-primary-500 font-manrope text-[16px] leading-6 tracking-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
