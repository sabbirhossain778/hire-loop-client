"use client";

import React from "react";
import { Card } from "@heroui/react";

export default function ThreeFeatures() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* ৩ কলামের রেসপন্সিভ গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 🟣 পার্ট ১: Worker AI কার্ড */}
          <Card className="bg-[#111111]/90 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between min-h-[280px] hover:border-zinc-700 transition-all shadow-xl">
            <div className="space-y-4">
              {/* কাস্টম গ্র্যাভিটি এআই/স্পার্কল আইকন */}
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-purple-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Worker AI</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Our advanced AI helps screen candidates, match skills, and automate the initial technical interview rounds seamlessly.
              </p>
            </div>
          </Card>

          {/* 🔵 পার্ট ২: Job Discovery কার্ড */}
          <Card className="bg-[#111111]/90 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between min-h-[280px] hover:border-zinc-700 transition-all shadow-xl">
            <div className="space-y-4">
              {/* কাস্টম গ্র্যাভিটি সার্চ/কম্পাস আইকন */}
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Job Discovery</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Personalized job matching system that learns your preferences and surfaces relevant roles in high-growth companies.
              </p>
            </div>
          </Card>

          {/* 🟡 পার্ট ৩: Salary Data কার্ড */}
          <Card className="bg-[#111111]/90 border border-zinc-800/80 p-6 rounded-2xl flex flex-col justify-between min-h-[280px] hover:border-zinc-700 transition-all shadow-xl">
            <div className="space-y-4">
              {/* কাস্টম গ্র্যাভিটি ডলার/স্যালারি আইকন */}
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center border border-zinc-800 text-yellow-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">Salary Data</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Real-time, verified market salary statistics. No hidden data—know exactly what companies are offering before you apply.
              </p>
            </div>
          </Card>

        </div>

      </div>
    </section>
  );
}