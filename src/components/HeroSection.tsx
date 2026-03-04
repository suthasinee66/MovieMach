import { Play, Info } from "lucide-react";
import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Featured movie"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 overlay-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-32 overlay-gradient-bottom" />

      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 pb-24 max-w-2xl">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-wide text-foreground mb-4 animate-fade-in">
          RAYA AND THE LAST DRAGON
        </h2>
        <p className="text-sm text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A quest to save her world. · Mar 23, 2021
        </p>
        <p className="text-sm text-secondary-foreground/70 mb-4 max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.
        </p>
        <div className="flex items-center gap-2 mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
            <Star className="w-4 h-4 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">6.0 RATING</span>
        </div>
        <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
            <Play className="w-4 h-4 fill-current" />
            PLAY
          </button>
          <button className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground/10 transition-colors">
            <Info className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
