import { FC } from "react";
import { Container, Section } from "../core";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

export const Testimonials: FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "A one-stop shop for APIs. Highly recommend!",
      author: "Sarah Chen",
      role: "Senior Developer",
      company: "TechCorp",
    },
    {
      quote: "The documentation is top-notch. Saved me hours of work.",
      author: "Michael Rodriguez",
      role: "Full Stack Developer",
      company: "StartupX",
    },
    {
      quote: "An open-source marvel! Community support is amazing.",
      author: "Alex Kim",
      role: "Lead Engineer",
      company: "DevStudio",
    },
  ];

  return (
    <Section className="bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Loved by Developers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-gray-600 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}
                  {testimonial.company && `at ${testimonial.company}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
