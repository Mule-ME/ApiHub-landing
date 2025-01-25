import { FC } from "react";
import { Button } from "@components/core/Button";
import { Container } from "@components/core";

export const OpenSource: FC = () => {
  return (
    <section id="open-source" className="bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Support Our Open-Source Journey
          </h2>
          <p className="text-gray-600 mb-8">
            Help us grow and make APIs more accessible to everyone.
          </p>
          <Button size="lg">Support Us on GitHub</Button>
        </div>
      </Container>
    </section>
  );
};
