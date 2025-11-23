import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { BookFeature } from "@/components/BookFeature";
import { Resources } from "@/components/Resources";
import { Community } from "@/components/Community";
import { TransitionTools } from "@/components/TransitionTools";
import { Dialects } from "@/components/Dialects";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Manifesto />
      <BookFeature />
      <Resources />
      <Community />
      <TransitionTools />
      <Dialects />
      <Footer />
    </div>
  );
};

export default Index;
