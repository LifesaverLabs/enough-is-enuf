import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Keyboard, Users, GitBranch } from "lucide-react";
import { Card } from "./ui/card";

const tools = [
  {
    icon: Sparkles,
    title: "AI-Assisted Spell-Checking",
    description: "Smart spell-checkers can suggest reformed spellings in stages, making the transition smooth and natural. As you type, AI learns your preferences and helps you adopt new standards at your own pace."
  },
  {
    icon: Users,
    title: "Consensus-Driven Standards",
    description: "Each calmunity⁵ can adopt choices by consensus, moving toward a primary suggested standard together. The process is democratic and inclusive, ensuring everyone has a voice in the evolution of their language."
  },
  {
    icon: GitBranch,
    title: "Freedom to Fork",
    description: "Don't like the direction? You always retain the ability to break off and form or promote another unique standard instead. Language evolution thrives on diversity and experimentation."
  },
  {
    icon: Keyboard,
    title: "Evolved Keyboard Layouts",
    description: "Modern keyboards can make Unicode characters like superscripts (⁵) or special symbols (diacritics or symbols from arts, sciences, calmunity⁵, or religious traditions) easier to type. This helps differentiate homophones if that's the direction we choose."
  }
];

export const TransitionTools = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology-Assisted Transition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern tools make language reform practical and accessible. 
            AI spell-checking and evolved keyboard layouts help us transition smoothly, 
            one step at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <p className="text-lg text-center">
              <strong>The future of spelling is flexible.</strong> Whether through AI suggestions, 
              evolved keyboards with easy access to superscripts and diacritics, or community consensus, 
              we have the tools to make language reform practical, accessible, and democratic. 
              The technology serves the people, not the other way around.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
