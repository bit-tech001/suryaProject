import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const categories = ['All', 'Villas', 'Plots', 'Commercial'];
  const images = [
    { 
      url: 'https://homeless-ivory-nbh9boa5za.edgeone.app/radiksh.jpeg', 
      title: 'Roodraksh Arham', 
      location: 'Bijoynagar',
      cat: 'Residential',
      details: 'Premium flats @ ₹3800/sqft. Possession: 2026'
    },
    { 
      url: 'https://reasonable-sapphire-v7upkxxsaa.edgeone.app/cg3.png', 
      title: 'Surya Villas', 
      location: 'Sonapur, Guwahati',
      cat: 'Villas',
      details: 'Luxury villas @ ₹5600/sqft. Possession: 2027'
    },
    { 
      url: 'https://interior-peach-yerq68avkh.edgeone.app/ch4.jpg', 
      title: 'Surya Green Estate Kaziranga', 
      location: 'Kaziranga',
      cat: 'Plots',
      details: 'Residential plots @ ₹16 Lakhs/katha. Possession: 2027'
    },
    { 
      url: 'https://variable-lavender-j7pfx5258v.edgeone.app/ch1.png', 
      title: 'Surya Square', 
      location: 'Mirza Road, Bijoynagar',
      cat: 'Commercial',
      details: 'G+4 Commercial building, delivered in 2022'
    },
    { 
      url: 'https://mass-coral-y99n0398d7.edgeone.app/967729da-a6b4-498f-a6d2-7b2da8690d4f.jpg', 
      title: 'Balchand Niwas', 
      location: 'Bijoynagar',
      cat: 'Residential',
      details: 'Delivered G+5 Residential project (2020)'
    },
    { 
      url: 'https://misleading-green-bzokvppncr.edgeone.app/kamalpur.jpeg', 
      title: 'Kamalpur Industrial Estate', 
      location: 'North Guwahati',
      cat: 'Plots',
      details: 'Industrial plots available. Possession: 2026'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Surya Developers, I'm ${formData.name}. I'm interested in booking a consultation for "${selectedProject}". My phone is ${formData.phone}.`;
    window.open(`https://wa.me/916003700715?text=${encodeURIComponent(text)}`, '_blank');
    setSelectedProject(null);
  };

  return (
    <div className="pt-32 pb-24 bg-surya-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto mb-6" />
          <h1 className="text-6xl font-display text-surya-charcoal mb-6 italic">Featured <span className="text-surya-gold">Projects</span></h1>
          <div className="flex justify-center flex-wrap gap-8 text-[11px] uppercase tracking-[3px] font-bold text-surya-charcoal/50 mt-10">
            {categories.map(c => (
              <button key={c} className={`hover:text-surya-gold transition-colors cursor-pointer ${c === 'All' ? 'text-surya-gold' : ''}`}>{c}</button>
            ))}
          </div>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group bg-white p-2 border border-surya-border shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="overflow-hidden bg-surya-cream">
                <img 
                  src={img.url.startsWith('http') && img.url.includes('unsplash') ? `${img.url}?auto=format&fit=crop&q=80&w=800` : img.url} 
                  alt={img.title} 
                  className="w-full transition-all duration-700 hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-center">
                <span className="text-[9px] uppercase tracking-[3px] text-surya-gold mb-1 block font-bold">{img.cat}</span>
                <span className="text-[10px] uppercase tracking-[1px] text-surya-charcoal/40 mb-3 block font-medium">{img.location}</span>
                <h3 className="text-xl font-display italic text-surya-charcoal mb-2">
                  {img.title}
                </h3>
                <p className="text-[11px] text-surya-charcoal/60 mb-6 font-medium tracking-wide leading-relaxed">
                  {img.details}
                </p>
                
                <button 
                  onClick={() => setSelectedProject(img.title)}
                  className="w-full bg-surya-gold text-white px-8 py-3 text-[10px] uppercase tracking-[2px] font-bold hover:bg-surya-charcoal transition-all shadow-lg"
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-surya-charcoal/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white max-w-lg w-full relative z-10 p-8 md:p-12 border border-surya-border shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-surya-charcoal/40 hover:text-surya-charcoal transition-colors"
              >
                <X size={24} />
              </button>

              <div className="accent-line mb-6" />
              <h2 className="text-3xl font-display italic text-surya-charcoal mb-4">Book <span className="text-surya-gold">Inquiry</span></h2>
              <p className="text-surya-charcoal/60 text-sm mb-8 leading-relaxed">
                You are inquiring about: <b className="text-surya-charcoal italic">{selectedProject}</b>. Please provide your details below.
              </p>

              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-3 block">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full border-b border-surya-border pb-3 text-sm focus:outline-none focus:border-surya-gold transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-3 block">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 00000 00000"
                    className="w-full border-b border-surya-border pb-3 text-sm focus:outline-none focus:border-surya-gold transition-colors bg-transparent"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-surya-charcoal text-white py-5 font-bold uppercase tracking-[3px] text-[11px] hover:bg-surya-gold transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Confirm on WhatsApp <MessageCircle size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
