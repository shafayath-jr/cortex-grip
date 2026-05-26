import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Code, Zap, Shield, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center bg-[#050410] overflow-hidden">
      {/* Decorative gradient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-900/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-light-blue-900/30 blur-[150px] pointer-events-none" />
      
      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <main className="relative z-10 flex flex-col items-center w-full max-w-6xl px-6 py-24 sm:py-32 mx-auto text-center">
        {/* Banner Announcement */}
        <div className="inline-flex items-center gap-2 rounded-full border border-secondary-800 bg-secondary-900/40 px-4 py-1.5 text-xs sm:text-sm font-medium text-secondary-300 backdrop-blur-md transition-all duration-300 hover:border-secondary-500/30">
          <Sparkles className="size-3.5 text-light-blue-400" />
          <span>Announcing the Cortex Grip API Playground</span>
          <ArrowRight className="size-3.5 text-secondary-400" />
        </div>

        {/* Hero Headline */}
        <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-stack-sans-notch leading-[1.1]">
          Integrate AI Runtimes <br />
          <span className="bg-gradient-to-r from-light-blue-400 via-secondary-300 to-secondary-500 bg-clip-text text-transparent">
            Directly into Your Workspace
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-secondary-200 font-normal leading-relaxed">
          Cortex Grip connects your custom LLMs, execution environments, and stateful agents to any front-end environment. Build, execute, and monitor with zero overhead.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <Link
            href="/get-started"
            className="flex items-center justify-center w-full sm:w-auto rounded-xl bg-gradient-to-r from-light-blue-400 to-secondary-300 px-8 py-4 text-base font-semibold text-secondary-900 transition-all duration-300 hover:from-light-blue-300 hover:to-secondary-200 hover:shadow-[0_0_30px_rgba(149,144,239,0.3)] hover:scale-[1.02] active:scale-98"
          >
            Get Started Free
          </Link>
          
          <button
            className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-secondary-800 bg-secondary-900/40 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:border-secondary-500/50 hover:bg-secondary-800/60 cursor-pointer"
          >
            <Play className="size-4 fill-white" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Features Preview Grid */}
        <div className="mt-24 sm:mt-32 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-2xl border border-secondary-800/40 bg-secondary-900/20 p-8 backdrop-blur-md">
            <div className="size-10 flex items-center justify-center rounded-xl bg-secondary-500/10 border border-secondary-500/20 text-secondary-300">
              <Code className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Stateful Runtimes</h3>
            <p className="mt-2 text-sm text-secondary-300 leading-relaxed">
              Run serverless execution sandboxes with full context memory and immediate variable interpolation.
            </p>
          </div>

          <div className="rounded-2xl border border-secondary-800/40 bg-secondary-900/20 p-8 backdrop-blur-md">
            <div className="size-10 flex items-center justify-center rounded-xl bg-secondary-500/10 border border-secondary-500/20 text-secondary-300">
              <Zap className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Ultra-low Latency</h3>
            <p className="mt-2 text-sm text-secondary-300 leading-relaxed">
              Global CDN edge workers ensure agent actions execute under 50ms anywhere in the world.
            </p>
          </div>

          <div className="rounded-2xl border border-secondary-800/40 bg-secondary-900/20 p-8 backdrop-blur-md">
            <div className="size-10 flex items-center justify-center rounded-xl bg-secondary-500/10 border border-secondary-500/20 text-secondary-300">
              <Shield className="size-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">Enterprise Guardrails</h3>
            <p className="mt-2 text-sm text-secondary-300 leading-relaxed">
              Built-in sandbox isolation, input filtering, and role-based access control standard out of the box.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
