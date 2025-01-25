import { FC } from "react";
import { Container, Section } from "@components/core";

export const ApiPreview: FC = () => {
  const apis = [
    {
      name: "🐙 Github",
      description:
        "Retrieves public profile information for a specific GitHub user.",
    },
    {
      name: "👤JSON Placeholder API",
      description:
        "JSONPlaceholder is a free online REST API providing fake data for testing and prototyping applications.",
    },
  ];

  return (
    <Section id="api-docs" className="bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our APIs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {apis.map((api) => (
            <div
              key={api.name}
              className="p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-500">
                {api.name}
              </h3>
              <p className="">{api.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
