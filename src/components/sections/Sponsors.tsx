"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { Container, Section } from "@components/core";
import {
  GithubLogo,
  GoogleLogo,
  FacebookLogo,
  AppleLogo,
  MetaLogo,
} from "@phosphor-icons/react";
const sponsors = [
  { name: "Company 1", logo: GithubLogo },
  { name: "Company 2", logo: GoogleLogo },
  { name: "Company 3", logo: FacebookLogo },
  { name: "Company 4", logo: AppleLogo },
  { name: "Company 5", logo: MetaLogo },
];

export const Sponsors: FC = () => {
  return (
    <Section className="bg-black/50 overflow-hidden py-12">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
          Trusted by Leading Companies
        </h2>
      </Container>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/50 to-transparent z-10" />

        <div className="flex items-center py-8">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [-1035, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...sponsors, ...sponsors, ...sponsors].map((sponsor, idx) => (
              <div
                key={`${sponsor.name}-${idx}`}
                className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-200"
              >
                {/* TODO: THIS WILL BE THE LOGO */}
                {/* <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
                /> */}

                <div className=" bg-white/10 rounded-full">
                  <sponsor.logo size={50} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
