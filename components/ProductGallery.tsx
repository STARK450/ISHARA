import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS } from '../constants';
import { Plus, ShoppingBag, X, ZoomIn } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductGallery: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  // Handle escape key to close modal and focus management
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    
    if (selectedProduct) {
      // Store currently focused element to return to later
      lastFocusedElement.current = document.activeElement as HTMLElement;
      
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      // Return focus when modal closes
      if (lastFocusedElement.current) {
        lastFocusedElement.current.focus();
        lastFocusedElement.current = null;
      }
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  return (
    <>
      <section id="collection" className="py-24 bg-white" aria-label="Product Collection">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-900 mb-4">Latest Collection</h2>
            <p className="text-earth-600 max-w-xl mx-auto">
              Timeless designs inspired by the raw beauty of nature.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group relative flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-earth-100 mb-4 shadow-sm group-hover:shadow-md transition-all duration-500">
                  {/* Zoom Trigger Button - Semantic button for keyboard users */}
                  <button 
                    type="button"
                    className="block w-full h-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-earth-900 focus:ring-offset-2 relative"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`View details of ${product.name}`}
                  >
                    <img
                      src={product.image}
                      alt="" /* Alt text empty as the button aria-label provides context, preventing redundancy */
                      loading="lazy"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    
                    {/* Overlay for hover state */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" aria-hidden="true">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="p-3 bg-white/90 rounded-full text-earth-900 shadow-lg">
                          <ZoomIn size={24} />
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {/* Floating Quick Add Button (Desktop Hover) */}
                  <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 right-4 p-3 bg-white text-earth-900 rounded-full shadow-lg translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 focus:opacity-100 focus:translate-y-0 transition-all duration-300 hover:bg-earth-900 hover:text-white active:scale-90 hidden md:block focus:outline-none focus:ring-2 focus:ring-earth-900 focus:ring-offset-2 z-10"
                    aria-label={`Quick add ${product.name} to cart`}
                  >
                    <Plus size={20} aria-hidden="true" />
                  </button>
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-medium text-earth-900 group-hover:text-nature-700 transition-colors">
                      {product.name}
                    </h3>
                    {/* Increased contrast for category text */}
                    <p className="text-sm text-earth-600 mt-1">{product.category}</p>
                  </div>
                  <p className="text-lg font-serif font-semibold text-earth-800">${product.price}</p>
                </div>
                
                {/* Main Add to Cart Button (Visible on all screens) */}
                <button 
                  onClick={() => addToCart(product)}
                  className="mt-auto w-full py-3 bg-earth-100 text-earth-900 rounded-lg text-sm font-medium hover:bg-earth-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-earth-900 focus:ring-offset-2"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingBag size={16} aria-hidden="true" /> 
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-8 py-3 border border-earth-300 text-earth-800 rounded-full hover:bg-earth-900 hover:text-white transition-colors duration-300 uppercase text-xs tracking-widest font-semibold focus:outline-none focus:ring-2 focus:ring-earth-900 focus:ring-offset-2">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button 
            ref={closeButtonRef}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-full z-10"
            onClick={() => setSelectedProduct(null)}
            aria-label="Close zoom view"
          >
            <X size={32} />
          </button>

          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()} 
          >
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name}
              className="w-full h-auto max-h-[80vh] object-contain rounded-sm shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 id="modal-title" className="text-2xl font-serif text-white font-medium">{selectedProduct.name}</h3>
              <p className="text-white/70 mt-1 text-lg">{selectedProduct.category} — ${selectedProduct.price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGallery;