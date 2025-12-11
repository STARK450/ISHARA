import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-earth-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://drive.google.com/thumbnail?id=1ED-2Qz0RHHSVrdP3aGHlacwW0U_Qrm5h&sz=w2000" 
                alt="Artisan working" 
                className="rounded-lg translate-y-8 object-cover shadow-lg"
              />
              <img 
                src="https://drive.google.com/thumbnail?id=1P3_93yzBqbpPQqjCrGx9C5Ok1lvFz4fR&sz=w2000" 
                alt="Materials" 
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-nature-100/50 rounded-full blur-3xl opacity-60" />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 leading-tight">
              Crafted from Earth, <br/> 
              <span className="text-nature-700">Designed for Life.</span>
            </h2>
            <div className="space-y-4 text-earth-600 text-lg font-light leading-relaxed">
              <p>
                Ishara began with a simple question: Can we create beautiful, functional accessories without compromising the planet's future?
              </p>
              <p>
                Every bag tells a story of regeneration. We partner directly with artisan communities to source organic hemp, cork, and recycled textiles. No toxic dyes, no plastic microfibers, just honest craftsmanship.
              </p>
              <p>
                When you carry an Ishara bag, you aren't just carrying your essentials—you're carrying a statement of care for the world we share.
              </p>
            </div>
            <div className="pt-4">
              <img src="https://picsum.photos/seed/signature/200/80" alt="Founder Signature" className="opacity-60 h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
