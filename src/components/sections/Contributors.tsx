import { FC } from "react";
import { Container, Section } from "@components/core";

export const Contributors: FC = () => {
  return (
    <Section id="contributors" className="bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Powered by Developers Like You
        </h2>
        <p className="text-center text-gray-600 mb-8">
          100+ global contributors and growing
        </p>
        {/*TODO: Add contributor grid here */}
      </Container>
    </Section>
  );
};
