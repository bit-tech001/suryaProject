import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Home as HomeIcon, Building2, TrendingUp, ShieldCheck, X, MessageCircle } from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Surya Developers, I'm ${formData.name}. I'm interested in booking a consultation for your "${selectedService}" service. My phone number is ${formData.phone}.`;
    window.open(`https://wa.me/916003700715?text=${encodeURIComponent(text)}`, '_blank');
    setSelectedService(null);
  };
  const services = [
    {
      title: 'Real Estate & Builders',
      icon: <Building2 size={40} />,
      desc: 'Expert construction services for high-quality residential and commercial buildings in Guwahati. We bring architectural visions to life with precision and care.',
      features: ['Turnkey Construction', 'Architectural Design', 'Premium Materials']
    },
    {
      title: 'Land Buying & Selling',
      icon: <MapPin size={40} />,
      desc: 'Most reliable platform for buying and selling non-disputed land in prime development zones. We ensure every transaction is legally sound and transparent.',
      features: ['Legal Title Verification', 'Fair Market Valuation', 'Fast Registration']
    },
    {
      title: 'Property Investment',
      icon: <TrendingUp size={40} />,
      desc: 'Strategic investment advisory to grow your wealth through Northeast India’s booming real estate market. Data-driven insights for maximum ROI.',
      features: ['Market Trend Analysis', 'Portfolio Growth', 'High Appreciation Assets']
    },
    {
      title: 'Plots & Villas',
      icon: <HomeIcon size={40} />,
      desc: 'Curated selection of premium residential plots and luxury independent villas. Designed for modern living with a touch of elegance.',
      features: ['Gated Communities', 'Bespoke Villa Designs', 'Lush Green Environments']
    },
    {
      title: 'Commercial Buildings',
      icon: <Building2 size={40} />,
      desc: 'Development of state-of-the-art office spaces and retail hubs. We create environments that foster business growth and long-term value.',
      features: ['Strategic Locations', 'Modern Infrastructure', 'Efficient Floor Plans']
    },
    {
      title: 'Real Estate Broking',
      icon: <ShieldCheck size={40} />,
      desc: 'Professional brokerage services for all types of properties. We bridge the gap between buyers and sellers with absolute trust.',
      features: ['Verified Listings', 'Transparent Negotiations', 'Hassle-free Documentation']
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="accent-line mx-auto mb-6" />
          <h1 className="text-6xl font-display text-surya-charcoal mb-6 italic">Signature <span className="text-surya-gold">Services</span></h1>
          <p className="text-lg text-surya-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            Delivering excellence across residential, commercial, and advisory sectors in Northeast India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border border-surya-border bg-surya-cream/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-surya-gold mb-8 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-display text-surya-charcoal italic mb-6">{service.title}</h3>
              <p className="text-surya-charcoal/60 leading-relaxed mb-8 text-sm">{service.desc}</p>
              <ul className="space-y-3 mb-10">
                {service.features.map((f, j) => (
                  <li key={j} className="text-xs uppercase tracking-widest font-bold text-surya-charcoal flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-surya-gold rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(service.title)}
                className="w-full py-4 border border-surya-charcoal text-[11px] uppercase tracking-[3px] font-bold hover:bg-surya-charcoal hover:text-white transition-all shadow-xl shadow-black/5"
              >
                Book Consultation
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Development Process */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto" />
            <h2 className="text-4xl font-display text-surya-charcoal italic mt-4">Our Building <span className="text-surya-gold">Process</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your unique spatial requirements and budget.' },
              { step: '02', title: 'Planning', desc: 'Detailed architectural drawings and legal verification.' },
              { step: '03', title: 'Execution', desc: 'Quality-controlled construction using premium materials.' },
              { step: '04', title: 'Delivery', desc: 'Final walkthrough and handover of your dream property.' }
            ].map((p, i) => (
              <div key={i} className="relative p-10 bg-surya-cream/30 border border-surya-border">
                <span className="text-4xl font-display text-surya-gold/20 absolute top-4 right-6 font-bold">{p.step}</span>
                <h3 className="text-xl font-display italic text-surya-charcoal mb-4">{p.title}</h3>
                <p className="text-surya-charcoal/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-surya-charcoal/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white max-w-lg w-full relative z-10 p-8 md:p-12 border border-surya-border shadow-2xl"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-surya-charcoal/40 hover:text-surya-charcoal transition-colors"
              >
                <X size={24} />
              </button>

              <div className="accent-line mb-6" />
              <h2 className="text-3xl font-display italic text-surya-charcoal mb-4">Book <span className="text-surya-gold">Consultation</span></h2>
              <p className="text-surya-charcoal/60 text-sm mb-8 leading-relaxed">
                Service: <b className="text-surya-charcoal italic">{selectedService}</b>. Please provide your contact details to proceed.
              </p>

              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-3 block">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="E.g. Rajesh Kumar"
                    className="w-full border-b border-surya-border pb-3 text-sm focus:outline-none focus:border-surya-gold transition-colors bg-transparent italic font-display"
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
                    className="w-full border-b border-surya-border pb-3 text-sm focus:outline-none focus:border-surya-gold transition-colors bg-transparent italic font-display"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-surya-charcoal text-white py-5 font-bold uppercase tracking-[3px] text-[11px] hover:bg-surya-gold transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Consult on WhatsApp <MessageCircle size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
