"use client";

import React from "react";
import { Button } from "@heroui/react";

export default function WorkerAISection() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 px-6 md:px-16 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* বাম দিকে: টেক্সট কন্টেন্ট */}
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Worker AI
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
            Our advanced AI helps screen candidates, match skills, and automate the initial technical interview rounds seamlessly. Save hundreds of hours in manual screening.
          </p>
          <Button className="bg-purple-600 text-white font-medium rounded-xl px-6">
            Explore AI Features
          </Button>
        </div>

        {/* ডান দিকে: গ্রাফিক্স/ভিজ্যুয়াল বক্স (এখানে আপনার ইমেজ বসাতে পারেন) */}
        <div className="w-full h-[300px] sm:h-[400px] bg-zinc-900/40 border border-zinc-800/60 rounded-3xl flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-50"></div>
          <span className="text-zinc-600 font-medium text-sm">Worker AI Interactive Preview / Image</span>
        </div>

      </div>
    </section>
  );
}