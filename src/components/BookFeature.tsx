import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import bookCover from "@/assets/enough-is-enuf-book.jpg";

export const BookFeature = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="border-4 border-secondary shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-secondary/20 p-8 flex items-center justify-center">
                  <img 
                    src={bookCover} 
                    alt="Enough is Enuf book cover showing the evolution from 'enough' to 'enuf' with crossed-out variations" 
                    className="max-w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                
                <div className="p-12 flex flex-col justify-center bg-card">
                  <h3 className="text-4xl font-black text-foreground mb-6">
                    Featured Reading
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Gabe Henry's groundbreaking work makes the case for sensible spelling reform with 
                    clarity, humor, and undeniable logic. If the title can prove the point, imagine 
                    what the whole book accomplishes.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    "Enough is Enuf" challenges readers to question why we accept needless complexity 
                    in our most fundamental tool for communication.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold w-full md:w-auto"
                    asChild
                  >
                    <a href="https://www.worldcat.org/search?q=Enough+is+Enuf+Gabe+Henry" target="_blank" rel="noopener noreferrer">
                      Find This Book <ExternalLink className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
