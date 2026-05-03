import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';

const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const categories = ['All', 'Villas', 'Plots', 'Commercial'];
  const images = [
    { url: 'https://images.unsplash.com/photo-1773145513138-0d46d3cd4fbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SW5kdXN0cmlhbCUyMEVzdGF0ZSUyMFBsb3RzfGVufDB8fDB8fHww', title: 'Industrial Estate Plots', cat: 'Plots' },
    { url: 'https://deaf-lavender-ifeu67ud5s.edgeone.app/surya.png', title: 'Surya Villas', cat: 'Villas' },
    { url: 'https://rival-plum-weeeawzjg7.edgeone.app/p2.png', title: ' Surya Square commercial project', cat: 'Commercial' },
    { url: 'https://powerful-amaranth-kdqlt2ebzj.edgeone.app/WhatsApp%20Image%202026-05-03%20at%204.03.07%20PM.jpeg', title: 'Office Hub Ulubari', cat: 'Commercial' },
    { url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd', title: ' Surya Green Estate Kaziranga', cat: 'Residential plots' },
    { url: 'https://mass-coral-y99n0398d7.edgeone.app/967729da-a6b4-498f-a6d2-7b2da8690d4f.jpg', title: ' Balchand niwas Residential', cat: 'Residential ' },
    { url: 'https://shared-gray-vrqc1ifya6.edgeone.app/Screenshot%202026-05-03%20170738.png', title: 'Roodraksh Arham ', cat: 'Residential ' },
    { url: 'https://plus.unsplash.com/premium_photo-1775457876351-4191ee5e67a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5kdXN0cmlhbCUyMHBsb3RzJTIwYXZhaWxhYmxlfGVufDB8fDB8fHww', title: 'Kamalpur Industrial estate  ', cat: 'Industrial ' },
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
          <h1 className="text-6xl font-display text-surya-charcoal mb-6 italic">Architecture <span className="text-surya-gold">Gallery</span></h1>
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
              className="relative group bg-white p-2 border border-surya-border shadow-xl transition-all duration-500 overflow-hidden"
            >
              <img 
                src={img.url.startsWith('http') && img.url.includes('unsplash') ? `${img.url}?auto=format&fit=crop&q=80&w=800` : img.url} 
                alt={img.title} 
                className="w-full transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-surya-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-8 text-center">
                <span className="text-[10px] uppercase tracking-[3px] text-surya-gold mb-2">{img.cat}</span>
                <h3 className="text-2xl font-display italic text-white mb-6">{img.title}</h3>
                
                <button 
                  onClick={() => setSelectedProject(img.title)}
                  className="bg-surya-gold text-white px-8 py-3 text-[10px] uppercase tracking-[2px] font-bold hover:brightness-110 transition-all"
                >
                  Book Now
                </button>
                
                <div className="w-10 h-0.5 bg-surya-gold mt-6 transform translate-y-4 group-hover:translate-y-0 transition-transform" />
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
