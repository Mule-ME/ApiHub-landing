import { FC } from "react";
import { Button } from "../core";
import { Container, Section } from "@components/core";

export const Hero: FC = () => {
  return (
    <Section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Every Free API, One Platform
          </h1>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl">
            Discover, contribute, and integrate with ease. Your open-source hub
            for limitless API possibilities.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Explore APIs</Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
