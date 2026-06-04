"use client";

import React from "react";
import { Button } from "@heroui/react";

export default function JobDiscoverySection() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 px-6 md:px-16 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* বাম দিকে: গ্রাফিক্স/ভিজ্যুয়াল বক্স */}
        <div className="w-full h-[300px] sm:h-[400px] bg-zinc-900/40 border border-zinc-800/60 rounded-3xl flex items-center justify-center relative overflow-hidden md:order-1 order-2 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent opacity-50"></div>
          <span className="text-zinc-600 font-medium text-sm">Job Discovery Board Preview / Image</span>
        </div>

        {/* ডান দিকে: টেক্সট কন্টেন্ট */}
        <div className="space-y-6 md:order-2 order-1 md:pl-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Job Discovery
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
            Personalized job matching system that learns your preferences and surfaces relevant roles in high-growth companies. Get matches that actually fit your stack.
          </p>
          <Button className="bg-blue-600 text-white font-medium rounded-xl px-6">
            Find Jobs
          </Button>
        </div>

      </div>
    </section>
  );
}