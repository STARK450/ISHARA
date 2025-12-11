import React from 'react';
import { PRODUCTS } from '../constants';
import { Plus } from 'lucide-react';

const ProductGallery: React.FC = () => {
  return (
    <section id="collection" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Latest Collection</h2>
          <p className="text-earth-500 max-w-xl mx-auto">
            Timeless designs inspired by the raw beauty of nature.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-earth-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <button className="absolute bottom-4 right-4 p-3 bg-white text-earth-900 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-nature-500 hover:text-white">
                  <Plus size={20} />
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-earth-900 group-hover:text-nature-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-earth-500 mt-1">{product.category}</p>
                </div>
                <p className="text-lg font-serif font-semibold text-earth-800">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 border border-earth-300 text-earth-800 rounded-full hover:bg-earth-900 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
