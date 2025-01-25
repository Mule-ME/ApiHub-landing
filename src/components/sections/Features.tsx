"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Container, Section } from "@components/core";

export const Features: FC = () => {
  const features = [
    {
      title: "All-in-One API Access",
      description:
        "Browse and integrate from an ever-growing list of free APIs—no subscriptions, just connections.",
      icon: "🔌",
    },
    {
      title: "Open Source & Community-Driven",
      description:
        "Built with contributions from developers worldwide. Transparent, scalable, and truly open.",
      icon: "🌐",
    },
    {
      title: "Comprehensive Documentation",
      description:
        "Every API comes with detailed docs. Stop guessing and start building.",
      icon: "📚",
    },
  ];

  return (
    <Section className="bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10" />

      <Container className="relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose APIHub?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
