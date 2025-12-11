import React, { useState } from 'react';
import { Send, Wand2, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { generateEmailDraft } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAiGenerate = async () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    const draft = await generateEmailDraft(aiPrompt, 'friendly');
    setFormData(prev => ({ ...prev, message: draft }));
    setIsGenerating(false);
    setShowAiModal(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-earth-900 mb-6">Get in Touch</h2>
              <p className="text-earth-600 mb-8">
                Have questions about our materials, shipping, or custom orders? We'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-nature-50 text-nature-700 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900">Visit our Studio</h4>
                  <p className="text-earth-500 text-sm">123 Eco Lane, Green District<br/>Portland, OR 97204</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-nature-50 text-nature-700 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900">Email Us</h4>
                  <a href="mailto:nehamuthyalu04@gmail.com" className="text-earth-500 text-sm hover:text-nature-700 transition-colors">
                    nehamuthyalu04@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-nature-50 text-nature-700 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900">Call / WhatsApp</h4>
                  <a href="https://wa.me/917337202024" target="_blank" rel="noopener noreferrer" className="text-earth-500 text-sm hover:text-nature-700 transition-colors">
                    +91 733 720 2024
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-earth-50 p-8 md:p-12 rounded-2xl shadow-sm relative overflow-hidden">
            {/* Decorative leaf */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-nature-100 rounded-bl-[100px] -z-0 opacity-50" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-earth-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-nature-400 focus:border-transparent outline-none bg-white transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-earth-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-nature-400 focus:border-transparent outline-none bg-white transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="message" className="text-sm font-medium text-earth-700">Message</label>
                  <button 
                    type="button"
                    onClick={() => setShowAiModal(!showAiModal)}
                    className="text-xs flex items-center gap-1 text-nature-700 hover:text-nature-800 font-medium transition-colors"
                  >
                    <Wand2 size={12} /> AI Assist
                  </button>
                </div>

                {/* AI Assistant Expandable Area */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showAiModal ? 'max-h-40 mb-4' : 'max-h-0'}`}>
                  <div className="bg-nature-50 p-4 rounded-lg border border-nature-100 mb-2">
                    <p className="text-xs text-nature-800 mb-2">Tell us what you want to ask, and we'll draft the message for you.</p>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="e.g., Ask about wholesale pricing..."
                        className="flex-1 text-sm px-3 py-2 rounded border border-nature-200 focus:outline-none"
                      />
                      <button 
                        type="button"
                        onClick={handleAiGenerate}
                        disabled={isGenerating}
                        className="bg-nature-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-nature-700 disabled:opacity-50 flex items-center"
                      >
                        {isGenerating ? <Loader2 size={14} className="animate-spin" /> : 'Draft'}
                      </button>
                    </div>
                  </div>
                </div>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-earth-200 focus:ring-2 focus:ring-nature-400 focus:border-transparent outline-none bg-white transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-earth-900 text-white rounded-lg font-medium hover:bg-earth-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;