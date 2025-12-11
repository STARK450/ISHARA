import React from 'react';

const BrandVideo: React.FC = () => {
  const videoUrl = "https://drive.google.com/thumbnail?id=1kBpS8LeimPLZgtcaNLd5B4bhIJ88N-_j&sz=w2000";

  return (
    <section className="py-24 bg-earth-900 text-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 space-y-4 fade-in-up">
          <span className="text-nature-400 text-sm font-medium tracking-widest uppercase">Behind the Scenes</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">The Art of Sustainability</h2>
          <p className="max-w-2xl mx-auto text-earth-300 font-light leading-relaxed">
            Every Ishara bag is a result of patience, precision, and passion. 
            Watch how we transform raw, eco-friendly materials into timeless accessories.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black border border-earth-800">
           <video 
             className="w-full h-auto aspect-video object-cover"
             controls
             poster={videoUrl}
             playsInline
           >
             <source src={videoUrl} type="video/mp4" />
             <source src={videoUrl} type="video/webm" />
             Your browser does not support the video tag.
           </video>
        </div>
      </div>
    </section>
  );
};

export default BrandVideo;