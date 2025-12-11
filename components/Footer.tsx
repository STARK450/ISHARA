import React from 'react';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-earth-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-white tracking-wider">ISHARA</h3>
            <p className="text-sm text-earth-300 leading-relaxed">
              Sustainable handmade bags crafted for the conscious consumer. Connecting nature, style, and ethics.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-earth-300">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Totes & Shoppers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-earth-300">
              <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability Report</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/ishara_bags?igsh=c3Ztdm9tNXR0d2pm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-earth-800 rounded-full hover:bg-nature-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/917337202024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-earth-800 rounded-full hover:bg-nature-700 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
              <a 
                href="mailto:nehamuthyalu04@gmail.com" 
                className="p-2 bg-earth-800 rounded-full hover:bg-nature-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="space-y-1 text-xs text-earth-400">
              <p>nehamuthyalu04@gmail.com</p>
              <p>+91 733 720 2024</p>
            </div>
          </div>

        </div>

        <div className="border-t border-earth-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-earth-400">
            &copy; {new Date().getFullYear()} Ishara Bags. All rights reserved.
          </p>
          <p className="text-xs text-earth-400 flex items-center gap-1">
            Made with <Heart size={12} className="text-nature-500 fill-nature-500" /> for the planet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;