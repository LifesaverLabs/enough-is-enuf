import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            hsl(var(--primary-foreground)) 10px,
            hsl(var(--primary-foreground)) 11px
          )`
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <div className="text-5xl md:text-7xl font-black text-primary-foreground/80 mb-4 leading-tight">
              Enough is Enuf
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-primary-foreground mb-6 leading-tight">
              English for Humans
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-primary-foreground/90 mb-4">
              Stop the spelling madness. Start the reform.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-8"
          >
            <div className="text-4xl md:text-6xl font-bold mb-6 space-y-4">
              <div className="flex flex-wrap justify-center gap-4 items-center">
                <span className="text-destructive line-through opacity-70">Neighbor</span>
                <span className="text-muted-foreground">vs</span>
                <span className="text-destructive line-through opacity-70">Neighbour</span>
              </div>
              <div className="text-5xl md:text-7xl text-secondary font-black">
                = Naybor
              </div>
            </div>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              One spelling. No confusion. Easier for everyone—from emergency responders to language learners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-8 py-6 rounded-xl font-bold shadow-lg transition-all hover:scale-105"
              onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn Why
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-xl px-8 py-6 rounded-xl font-bold backdrop-blur-sm transition-all hover:scale-105"
              onClick={() => document.getElementById('dialects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Dialects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <ArrowDown className="w-8 h-8 text-primary-foreground/60 mx-auto animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
