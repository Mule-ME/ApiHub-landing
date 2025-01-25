"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Container } from "@components/core";

export const Header: FC = () => {
  const [hoveredPath, setHoveredPath] = useState("");
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Background opacity based on scroll
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "API Docs",
      href: "https://apihub-seven.vercel.app/",
      target: "_blank",
    },
    { label: "Contributors", href: "/contributors" },
    { label: "Support Us", href: "#open-source" },
    {
      label: "GitHub",
      href: "https://github.com/dagmawibabi/APIHub",
      target: "_blank",
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: headerBg }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 transition-opacity duration-300"
        style={{ opacity: isScrolled ? 1 : 0 }}
      />

      <div className="absolute inset-0 backdrop-blur-[8px]" />

      <Container>
        <nav className="flex items-center h-16 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-[1px]">
              <div className="w-full h-full rounded-lg bg-white flex items-center justify-center">
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  A
                </span>
              </div>
            </div>
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              APIHub
            </motion.span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 ml-16">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath("")}
                className="relative py-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
                target={item?.target}
              >
                <span>{item.label}</span>
                {hoveredPath === item.href && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute left-0 right-0 h-0.5 -bottom-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ opacity: 0, width: "0%" }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-auto"
            onClick={() => {
              window.location.href = "https://apihub-seven.vercel.app/";
            }}
          >
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/25">
              Get Started
            </Button>
          </motion.div>
        </nav>
      </Container>
    </motion.header>
  );
};
