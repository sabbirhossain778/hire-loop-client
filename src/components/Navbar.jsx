"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { Button } from "@heroui/react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const { data: session, isPending } = useSession();
  const user = session?.user;

  // console.log("Session data in Navbar:", session, "Is pending:", isPending, 'user', user);

   const handleSignOut = async () => {
    await signOut();
  }

  const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Recruiters", href: "/recruiters" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white font-bold">
            H
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              HireFlow
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="ml-auto hidden items-center md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Vertical Divider */}
          <div className="mx-6 h-6 w-px bg-white/20" />

          {/* Auth Links */}
          <div className="flex items-center gap-4">
            {
              user ?
                <div className="text-white font-semibold">
                Hi, {user.name}!
                    <Button onClick={handleSignOut}
                      variant="ghost">Sign Out</Button>
                </div> 
                :
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  Sign In
                </Link>
            }

            <Link
              href="/auth/signup"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto lg:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 sm:flex hidden ${isOpen
            ? "max-h-[500px] border-t border-white/10"
            : "max-h-0"
          }`}
      >
        <div className="bg-slate-950 px-4 py-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-gray-300 transition hover:bg-slate-900 hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="my-4 h-px bg-white/10" />

          <div className="flex flex-col gap-3">
            <Link
              href="/auth/signin"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-gray-300 transition hover:bg-slate-900 hover:text-white"
            >
              Sign In
            </Link>

            <Link
              href="/auth/signup"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-slate-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}