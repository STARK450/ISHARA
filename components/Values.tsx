import React from 'react';
import { Leaf, Heart, Recycle, Globe } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-nature-600" />,
      title: "Eco-Friendly",
      desc: "100% biodegradable materials used in every stitch."
    },
    {
      icon: <Recycle className="w-8 h-8 text-nature-600" />,
      title: "Upcycled",
      desc: "Giving new life to high-quality discarded fabrics."
    },
    {
      icon: <Heart className="w-8 h-8 text-nature-600" />,
      title: "Handcrafted",
      desc: "Made with love and care by skilled local artisans."
    },
    {
      icon: <Globe className="w-8 h-8 text-nature-600" />,
      title: "Ethical Trade",
      desc: "Fair wages and safe working conditions for all."
    }
  ];

  return (
    <section id="values" className="py-20 bg-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-3 bg-nature-50 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-earth-900 mb-2">{item.title}</h3>
              <p className="text-sm text-earth-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
