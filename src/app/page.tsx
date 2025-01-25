import { Layout } from "@/layouts";
import {
  Hero,
  Features,
  ApiPreview,
  Sponsors,
  Contributors,
  OpenSource,
  Testimonials,
} from "@components/sections";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <ApiPreview />
      <Sponsors />
      <Contributors />
      <OpenSource />
      <Testimonials />
    </Layout>
  );
}
