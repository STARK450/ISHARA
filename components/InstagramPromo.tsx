import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

const InstagramPromo: React.FC = () => {
  return (
    <section className="w-full bg-earth-900 text-white overflow-hidden relative py-12 border-y border-earth-800 cursor-pointer transition-colors hover:bg-earth-800">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-64 h-64 bg-nature-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-48 h-48 bg-nature-600 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <a 
          href="https://www.instagram.com/ishara_bags?igsh=c3Ztdm9tNXR0d2pm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block w-full"
          aria-label="Visit Instagram Profile"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            
            <div className="flex items-center gap-6 text-center md:text-left">
              <div className="hidden md:block p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                <Instagram size={40} className="text-nature-300" />
              </div>
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                   <Instagram size={24} className="md:hidden text-nature-300" />
                   <h3 className="text-2xl md:text-3xl font-serif font-bold">
                    Follow us on Instagram
                  </h3>
                </div>
                <p className="text-earth-200 text-sm md:text-base max-w-md">
                  @ishara_bags • Get daily sustainability tips, behind-the-scenes content, and exclusive offers.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 px-8 py-3 bg-nature-600 rounded-full font-medium text-white shadow-lg group-hover:bg-nature-500 group-hover:shadow-nature-900/20 group-hover:-translate-y-0.5 transition-all duration-300">
                <span>View Profile</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

          </div>
        </a>
      </div>
    </section>
  );
};

export default InstagramPromo;