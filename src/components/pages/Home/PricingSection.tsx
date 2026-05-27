"use client";

import CheckVerified from "@/components/ui/icons/CheckVerified";
import CircleCheckBox from "@/components/ui/icons/CircleCheckBox";
import CircleClose from "@/components/ui/icons/CircleClose";
import SmallLineStroke from "@/components/ui/icons/SmallLineStroke";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "Domain only - perfect for reserving your name online",
    monthlyPrice: 9.99,
    buttonText: "Get Started",
    buttonStyle: "secondary",
    includedHeader: "WHAT'S INCLUDED",
    included: [
      { text: "Domain registration (.com from $9.99/yr)", included: true },
      { text: "Free WHOIS privacy, forever", included: true },
      { text: "Full DNS management", included: true },
      { text: "Auto-renewal with reminders", included: true },
      { text: "Email forwarding", included: true },
      { text: "150+ TLD options", included: true },
      { text: "AI website builder", included: false },
    ],
  },
  {
    name: "Builder",
    isPopular: true,
    description: "Domain + AI website – the complete starter package",
    monthlyPrice: 14.99,
    buttonText: "Start Building Free",
    buttonStyle: "primary",
    includedHeader: "EVERYTHING IN STARTER, PLUS",
    included: [
      { text: "AI website builder (unlimited edits)", included: true },
      { text: "SSL certificate included", included: true },
      { text: "Website hosting included", included: true },
      { text: "1 custom email address", included: true },
      { text: "Mobile-optimised templates", included: true },
      { text: "Instant preview URL on publish", included: true },
      { text: "Advanced analytics", included: false },
      { text: "Multiple domains", included: false },
    ],
  },
  {
    name: "Pro",
    description: "For agencies, stores, and growing businesses",
    monthlyPrice: 29.99,
    buttonText: "Get Pro",
    buttonStyle: "secondary",
    includedHeader: "EVERYTHING IN BUILDER, PLUS",
    included: [
      { text: "Up to 10 domains", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "SEO tools & sitemap generator", included: true },
      { text: "5 custom email addresses", included: true },
      { text: "Priority customer support", included: true },
      { text: "White-label client management", included: true },
      { text: "Custom nameserver configuration", included: true },
    ],
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full bg-brand-secondary-50 py-17.5 px-20 font-manrope">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          {/* Top Badge */}
          <div className="flex items-center gap-2.5 rounded-[4px] border border-brand-primary-300 py-2 px-3 w-fit mx-auto bg-white/50">
            <SmallLineStroke className="size-4.5" />
            <span className="font-manrope text-brand-primary-400 text-base font-medium leading-6 tracking-normal">
              Pricing
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl text-center text-brand-primary-500 font-stack-sans-notch font-medium leading-15">
            Honest pricing. No surprises <br className="hidden md:inline" />
            on renewal.
          </h2>

          <p className="text-center text-brand-primary-500 max-w-160.5 mx-auto text-lg leading-7 tracking-normal">
            Every plan includes free WHOIS privacy and DNS management. The price
            you see today is the price you pay every year.
          </p>

          {/* Toggle */}
          <div className="rounded-[8px] border border-brand-primary-500 flex items-center mx-auto">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-[8px] font-manrope text-base leading-6 tracking-normal transition-colors duration-200 ${
                !isAnnual
                  ? "bg-brand-secondary-500 text-brand-primary-50"
                  : "text-brand-primary-200 hover:text-brand-primary-500"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 rounded-[8px] font-manrope text-base leading-6 tracking-normal transition-colors duration-200 flex items-center gap-2 ${
                isAnnual
                  ? "bg-brand-secondary-500 text-primary-50"
                  : "text-brand-primary-200 hover:text-brand-primary-500"
              }`}
            >
              Annually
              <span
                className={`text-[12px] leading-2.5 font-manrope px-2.25 py-1.5 rounded-[4px] border ${
                  isAnnual
                    ? "bg-white/20 text-white border-white/20"
                    : "text-[#028B6D] bg-[#028b6d1f] border-[#028B6D]"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual
              ? (plan.monthlyPrice * 0.8).toFixed(2)
              : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative rounded-[16px] bg-white p-6 pb-10 flex flex-col h-full shadow-lg ${
                  plan.isPopular
                    ? "border-2 border-brand-secondary-100 bg-white shadow-[2px_4px_14px_0_rgba(79,70,229,0.22)]"
                    : ""
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-secondary-500 text-brand-secondary-50 text-[12px] font-manrope font-semibold leading-4 px-5 py-2.5 rounded-[8px] border-2 border-brand-secondary-100 uppercase text-center">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-stack-sans-notch font-medium leading-6 tracking-normal text-brand-primary-500">
                  {plan.name}
                </h3>

                <p className="text-[14px] text-brand-primary-500 font-manrope leading-5 tracking-normal mt-2 h-12 line-clamp-2 overflow-hidden">
                  {plan.description}
                </p>

                <div className="mt-8 mb-10">
                  <p className="flex items-baseline">
                    <span className="text-5xl font-stack-sans-notch font-normal text-brand-primary-500 tracking-normal leading-12">
                      ${price}
                    </span>
                    <span className="text-brand-primary-500 font-manrope text-[18px] leading-7 tracking-normal">
                      /month
                    </span>
                  </p>

                  <p className="text-[14px] font-manrope leading-5 tracking-normal text-brand-primary-500 mt-1.5">
                    Billed {isAnnual ? "annually" : "monthly"}
                  </p>
                </div>
                <button
                  className={`w-full rounded-[6px] py-4 font-manrope text-[14px] leading-5 border border-brand-primary-400 transition-colors duration-200 cursor-pointer ${
                    plan.buttonStyle === "primary"
                      ? "bg-brand-secondary-500 text-brand-primary-50 border-brand-secondary-500 hover:bg-brand-secondary-600"
                      : "text-brand-primary-700 hover:bg-brand-secondary-100"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="mt-5">
                  <p className="text-[12px] font-manrope font-semibold tracking-widest leading-4 text-brand-primary-400 opacity-60 uppercase mb-3">
                    {plan.includedHeader}
                  </p>
                  <ul className="space-y-2.5">
                    {plan.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          {item.included ? (
                            <CircleCheckBox className="size-4.5" />
                          ) : (
                            <CircleClose className="size-4.5" />
                          )}
                        </div>
                        <span
                          className={`text-[14px] font-manrope leading-5 ${
                            item.included
                              ? "text-brand-primary-500"
                              : "text-brand-primary-500 line-through opacity-60"
                          }`}
                        >
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom checks */}
        <div className="flex flex-wrap justify-evenly gap-x-8 gap-y-4 mt-8">
          {[
            "No credit card to start",
            "Cancel anytime",
            "Free WHOIS privacy on all plans",
            "No hidden renewal fees",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckVerified className="size-5 text-brand-secondary-500" />
              <span className="text-[14px] font-manrope leading-5 text-brand-primary-500">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
