"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@components/core";

export const Header: FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "API Docs", href: "/docs" },
    { label: "Contributors", href: "/contributors" },
    { label: "Support Us", href: "/support" },
    { label: "GitHub", href: "https://github.com/apihub" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

      <nav className="container mx-auto px-6 h-20 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 p-[1px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                A
              </span>
            </div>
          </div>
          <span className="text-xl font-bold text-white">APIHub</span>
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative"
              onMouseEnter={() => setHoveredLink(item.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <motion.span
                className="text-white/80 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.span>
              {hoveredLink === item.href && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                />
              )}
            </Link>
          ))}
        </div>

        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow">
          Get Started
        </Button>
      </nav>
    </header>
  );
};
