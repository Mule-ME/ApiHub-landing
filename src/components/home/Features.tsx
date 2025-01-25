import { FC } from "react";
import { Container, Section } from "@components/core";

type Feature = {
  title: string;
  description: string;
};

export const Features: FC = () => {
  const features: Feature[] = [
    {
      title: "All-in-One API Access",
      description:
        "Browse and integrate from an ever-growing list of free APIs—no subscriptions, just connections.",
    },
    {
      title: "Open Source & Community-Driven",
      description:
        "Built with contributions from developers worldwide. Transparent, scalable, and truly open.",
    },
    {
      title: "Comprehensive Documentation",
      description:
        "Every API comes with detailed docs. Stop guessing and start building.",
    },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose APIHub?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
