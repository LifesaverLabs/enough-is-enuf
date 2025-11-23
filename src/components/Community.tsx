import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, Lightbulb, GitBranch } from "lucide-react";

const principles = [
  {
    icon: Globe,
    title: "International Movement",
    description: "We welcome contributions, suggestions, and research from anyone, anywhere who cares about the future of English."
  },
  {
    icon: Users,
    title: "Calmunity⁵ Cohesion",
    description: "Change happens together. We prioritize community consensus and respect in shaping our linguistic future."
  },
  {
    icon: GitBranch,
    title: "Staged Transitions",
    description: "Technologically-supported, gradual change—from spirited debate to coordinated community action."
  },
  {
    icon: Lightbulb,
    title: "Open to Innovation",
    description: "Blessed Dialect, as the youngest variant, offers the most flexibility for valuable proposals that meet fundamental needs."
  }
];

export const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            A Global Movement
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Language reform isn't confined to one country or culture. This is an international effort 
            built on collaboration, research, and respect for human needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-2 hover:border-secondary transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <principle.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 border-primary bg-card">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                From Debate to Action
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe in thoughtful, staged transitions supported by technology and community consensus. 
                Change isn't imposed—it emerges from spirited linguistic debates and shared understanding.
              </p>
              <div className="bg-accent/10 border-2 border-accent rounded-xl p-6">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Your Voice Matters
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a linguist, educator, developer, or simply someone who cares about communication—
                  we welcome your contributions to the American, English, or Blessed dialects. Together, we're 
                  building language that works for humans.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
