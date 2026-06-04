"use client";

import React from "react";
import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-gray-400 py-12 px-6 md:px-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        
        {/* ওপরের মেইন গ্রিড সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          
          {/* বামের কলাম: লোগো এবং ডেসক্রিপশন (২ কলাম জায়গা নেবে ডেক্সটপে) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              {/* লোগো আইকন */}
              <div className="bg-[#9333EA] text-white p-1.5 rounded-xl font-bold text-lg flex items-center justify-center w-8 h-8">
                P
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Hire Loop<br/>
              </span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed text-zinc-400">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* কলাম ২: Product */}
          <div className="space-y-3">
            <h4 className="text-zinc-500 font-medium text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="#" className="hover:text-white transition-colors text-zinc-300">Job discovery</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-zinc-300">Worker AI</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-zinc-300">Companies</Link></li>
              {/* ছবির মতো হলুদ রঙের স্পেশাল লিংক */}
              <li><Link href="#" className="text-[#FACC15] font-medium hover:brightness-110 transition-all">Salary data</Link></li>
            </ul>
          </div>

          {/* কলাম ৩: Navigations */}
          <div className="space-y-3">
            <h4 className="text-zinc-500 font-medium text-sm">Navigations</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="#" className="hover:text-white transition-colors text-zinc-300">Help center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-zinc-300">Career library</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-zinc-300">Contact</Link></li>
            </ul>
          </div>

          {/* কলাম ৪: Resources */}
          <div className="space-y-3">
            <h4 className="text-zinc-500 font-medium text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><Link href="#" className="hover:text-white transition-colors text-zinc-300">Brand Guideline</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-zinc-300">Newsroom</Link></li>
            </ul>
          </div>

        </div>

        {/* নিচের ডিভাইডার লাইন */}
        <div className="border-t border-zinc-800/60 my-6"></div>

        {/* নিচের বটম সেকশন: সোশ্যাল আইকন এবং কপিরাইট */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2 text-xs text-zinc-500">
          
          {/* সোশ্যাল মিডিয়া বাটন গ্রপ (বাম দিকে) */}
          <div className="flex items-center gap-3">
            <Link href="#" className="w-8 h-8 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 flex items-center justify-center text-white text-sm transition-colors">
              f
            </Link>
            <Link href="#" className="w-8 h-8 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 flex items-center justify-center text-white text-sm transition-colors">
              p
            </Link>
            <Link href="#" className="w-8 h-8 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 flex items-center justify-center text-white text-sm transition-colors">
              in
            </Link>
          </div>

          {/* কপিরাইট ও পলিসি লিংক (ডান দিকে) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>Copyright 2024 --Hiring Loop</span>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Terms & Policy</Link>
              <span>-</span>
              <Link href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors">Privacy Guideline</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}