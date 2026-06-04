"use client";

import React from "react";
import { Button } from "@heroui/react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 px-6 md:px-12 text-center space-y-6">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* মেইন হেডিং */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          already looking for you
        </h1>

        {/* সাব-হেডিং/ডেসক্রিপশন */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* বাটন গ্রুপ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-white text-black font-semibold text-sm h-12 px-6 rounded-xl hover:bg-zinc-200 transition-all shadow-lg"
            endContent={
              <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
              </svg>
            }
          >
            Create a free account
          </Button>

          <Button
            size="lg"
            variant="bordered"
            className="w-full sm:w-auto border-zinc-700/80 text-white font-medium text-sm h-12 px-6 rounded-xl bg-zinc-900/30 backdrop-blur-sm hover:bg-zinc-800/60 transition-all"
            endContent={
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            }
          >
            View pricing
          </Button>
        </div>

      </div>
    </section>
  );
}