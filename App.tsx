import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import ProductGallery from './components/ProductGallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import InstagramPromo from './components/InstagramPromo';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-earth-50">
        <Navbar />
        <CartDrawer />
        <ScrollToTop />
        <main>
          <Hero />
          <Values />
          <ProductGallery />
          <About />
          <Testimonials />
          <InstagramPromo />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;