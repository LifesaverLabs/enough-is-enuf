import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

const featuredVideo = {
  title: "English Spelling is Broken",
  videoId: "7BRn4kYxuE4",
  isShorts: true,
  description: "A compelling visual demonstration of why English spelling needs reform."
};

const videos = [
  {
    title: "Why English Spelling is Ridiculous",
    description: "A deep dive into the historical accidents that made English spelling the nightmare it is today.",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The American vs British Spelling Divide",
    description: "How two dialects diverged and why it matters for global communication.",
    thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Learning to Spell: Why It Takes So Long",
    description: "Educational research on how spelling complexity affects literacy development in children.",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
  }
];

export const Resources = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
            Learn More
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Explore the evidence for why English spelling needs reform
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="overflow-hidden border-4 border-primary shadow-2xl">
            <CardContent className="p-0">
              <div className="aspect-[9/16] md:aspect-video bg-foreground/5 relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${featuredVideo.videoId}`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {featuredVideo.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {featuredVideo.description}
                </p>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Note for visitors in restricted regions:</span> YouTube is blocked in some countries including China. 
                    We encourage community members to mirror this content on accessible platforms like Bilibili or WeChat Video. 
                    View our{" "}
                    <a 
                      href="https://github.com/LifesaverLabs/english-for-humans" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:text-primary/80 underline transition-colors"
                    >
                      open source GitHub repository
                    </a>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Additional Resources
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer border-2 hover:border-primary">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-primary-foreground group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
