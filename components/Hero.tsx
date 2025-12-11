import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#collection');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: 'url("https://drive.google.com/thumbnail?id=1P3_93yzBqbpPQqjCrGx9C5Ok1lvFz4fR&sz=w2000")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-4 max-w-5xl mx-auto pt-20">
        <div className="space-y-6 fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-semibold text-white tracking-widest uppercase mb-4">
            Sustainable Luxury
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1]">
            Carrying the <br/> Future
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            Handcrafted bags made from ethically sourced, 100% biodegradable materials. 
            Style that respects the planet.
          </p>
          <div className="pt-8">
            <a 
              href="#collection" 
              onClick={handleExploreClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-earth-900 rounded-full font-medium hover:bg-nature-50 transition-all duration-300 hover:shadow-lg group"
            >
              Explore Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;