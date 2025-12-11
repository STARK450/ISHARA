import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Community Voices</h2>
          <p className="text-earth-500">Hear from those walking the sustainable path with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-earth-50 p-8 rounded-2xl relative hover:translate-y-[-5px] transition-transform duration-300">
              <Quote className="absolute top-8 right-8 text-nature-200" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                <div>
                  <h4 className="font-semibold text-earth-900">{t.name}</h4>
                  <p className="text-xs text-nature-600 uppercase tracking-wide font-medium">{t.role}</p>
                </div>
              </div>
              <p className="text-earth-600 italic leading-relaxed">"{t.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
