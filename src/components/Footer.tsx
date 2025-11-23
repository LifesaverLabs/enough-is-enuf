import { Heart, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black mb-2">English for Humans</h3>
            <p className="text-background/80 text-lg mb-4">
              Making language work for everyone
            </p>
            
            <div className="flex items-center justify-center gap-2 text-background/70 mb-6">
              <span>Built with</span>
              <Heart className="w-4 h-4 fill-current text-accent" />
              <span>for calmunity⁵</span>
            </div>

            <a 
              href="https://github.com/LifesaverLabs/english-for-humans"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View, Branch, Contribute, or Fork on GitHub</span>
            </a>
          </div>

          <div className="border-t border-background/20 pt-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-background/80 mb-2">
                Part of the <span className="font-bold">Kohlberg Commons</span>
              </p>
              <p className="text-sm text-background/70 mb-3">
                Licensed under{" "}
                <a 
                  href="https://opensource.org/licenses/MIT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-background/90"
                >
                  MIT License
                </a>
                {" "}(code) and{" "}
                <a 
                  href="https://creativecommons.org/licenses/by/4.0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-background/90"
                >
                  Creative Commons Attribution 4.0
                </a>
                {" "}(content)
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-background/70 mb-2">
                An initiative of{" "}
                <span className="font-bold text-background/90">Lifesaver Labs™</span>
                {" "}and{" "}
                <span className="font-bold text-background/90">Naybor 911™</span>
              </p>
              <p className="text-sm text-background/60">
                Join the conversation. Challenge the status quo. Spell for humans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
