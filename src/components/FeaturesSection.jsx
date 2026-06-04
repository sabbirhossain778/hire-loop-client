"use client";

import React from "react";
import { Card } from "@heroui/react";
import { motion } from "motion/react"

export default function FeaturesSection() {
  const stats = [
    {
      value: "50K",
      label: "Active Jobs",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      value: "12K",
      label: "Companies",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      value: "2M",
      label: "Job Seekers",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      value: "97%",
      label: "Satisfaction Rate",
      icon: (
        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      className="relative w-full min-h-[500px] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] text-white py-16 px-6 md:px-16"
      style={{
        backgroundImage: "url('/globe.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
        
        {/* text */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-zinc-100 leading-snug">
            Assisting over 15,000 job seekers<br />find their dream positions.
          </h2>
          <motion.p  animate={{ rotate: 360, transition: { duration: 2 } }}>Remote Jobs</motion.p>
          <motion.p  initial={{ scale: 0 }} animate={{ scale: 5, transition: { duration: 2 } }}>On-site Jobs</motion.p>
        </div>

        {/* card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-[#121212]/90 backdrop-blur-md border border-zinc-800/80 p-5 rounded-2xl flex flex-col justify-between items-start space-y-4 hover:border-zinc-700/80 transition-all shadow-2xl"
            >
              <div className="p-0.5">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}