import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Crown, Flag, Heart } from "lucide-react";

const dialects = [
  {
    name: "English For Humans",
    icon: Crown,
    description: "The reformed UK King's English variant, maintaining the elegance of British English while embracing sensible spelling simplification.",
    url: "https://EnglishForHumans.org",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    name: "American For Humans",
    icon: Flag,
    description: "The simplified variant exemplified by the United States and now, by total speakers, China. Practical, direct, accessible.",
    url: "https://AmericanForHumans.org",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    name: "Blessed Dialect",
    icon: Heart,
    description: "Borlaug Less Educational Dialect (BLED)—the youngest and most flexible variant, designed for the wounded and for achieving species-scale educational achievements. As a relative newborn, it's the easiest dialect to evolve through valuable, consensus-driven proposals that support fundamental human needs.",
    url: "https://BlessedDialect.org",
    color: "text-accent",
    bgColor: "bg-accent/10",
    subtitle: "BLED: Most Open to Change"
  }
];

export const Dialects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="dialects" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            Three Branches, One Goal
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            English isn't one language—it's three languages in a trenchcoat. Each dialect is reforming 
            on its own path, united by the vision of language for humans.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {dialects.map((dialect, index) => (
            <motion.div
              key={dialect.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex"
            >
              <Card className="border-2 hover:border-primary transition-all hover:shadow-xl flex flex-col h-full">
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className={`${dialect.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <dialect.icon className={`w-8 h-8 ${dialect.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    {dialect.name}
                  </h3>
                  
                  {dialect.subtitle && (
                    <p className={`text-sm font-bold ${dialect.color} mb-4`}>
                      {dialect.subtitle}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {dialect.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:bg-primary hover:text-primary-foreground font-bold group"
                    asChild
                  >
                    <a href={dialect.url} target="_blank" rel="noopener noreferrer">
                      Visit Site
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 border-accent bg-card/80 backdrop-blur">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Not Orwellian, But Liberating
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Language reform isn't about control—it's about freedom. Freedom from arbitrary complexity. 
                Freedom to learn faster. Freedom to communicate more clearly across borders and cultures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Through spirited community linguistic debates, we chart new directions without falling 
                into dystopian traps. This is language by the people, for the people.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground">Note on flexibility:</span> While all three dialects 
                  welcome thoughtful proposals, Blessed Dialect—as the youngest and least traditional—offers the 
                  most agility for consensus-driven change when proposals are valuable and supportive of fundamental 
                  needs right now.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
