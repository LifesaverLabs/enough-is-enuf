import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Zap, Globe } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Emergency Response",
    description: "Neighbor SOS™ systems need dual coverage for Neighbor/Neighbour variants. One spelling = faster, clearer emergency codes."
  },
  {
    icon: Users,
    title: "Easier Learning",
    description: "L1 and L2 learners spend less time memorizing arbitrary spellings and more time communicating effectively."
  },
  {
    icon: Globe,
    title: "Global Unity",
    description: "Bridge the Atlantic divide. Unified spelling means unified understanding across English-speaking communities."
  },
  {
    icon: BookOpen,
    title: "Logical System",
    description: "If it sounds like 'nay-bor', spell it like 'Naybor'. Phonetic consistency makes sense for humans."
  }
];

export const Manifesto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="manifesto" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            The Case for Reform
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            English spelling is a beautiful mess—a historical accident that makes life harder than it needs to be. 
            It's time for a change that puts humans first.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {benefit.description}
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
          <Card className="border-2 border-accent bg-card/50 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Real-World Impact
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    The Neighbor/Neighbour divide isn't just academic—it's complicating critical systems like 
                    <span className="font-bold text-foreground"> Neighbor SOS™</span>, forcing dual implementation 
                    of every emergency code variant. When seconds matter, complexity costs lives.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Simplification isn't dumbing down—it's clearing the path for what matters: human connection 
                    and understanding.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
