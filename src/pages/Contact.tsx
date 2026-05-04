import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const PRIMARY_PHONE = "916003700715";
const CONTACT_PHONE = "6003700715 or 9207309612";

const CONTACT_EMAIL = "Suryadevelopers05@gmail.com";
const ADDRESS = "Office - 1st floor, Royal centre Near metro shoes , makhan bhog building, bora service, ulubari , guwahati.";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Plot Inquiry',
    message: ''
  });

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Surya Developers, I'm ${formData.name}. \nEmail: ${formData.email} \nInterested in: ${formData.service} \nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${PRIMARY_PHONE}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="accent-line mx-auto mb-6" />
          <h1 className="text-6xl font-display text-surya-charcoal mb-6 italic">Get In <span className="text-surya-gold">Touch</span></h1>
          <p className="text-lg text-surya-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for your dream plot or need expert construction advice, we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            {[
              { icon: <MapPin />, title: 'Our Studio', detail: ADDRESS },
              { icon: <Phone />, title: 'Direct Line', detail: '+91 60037 00715 or  9207309612' },
              { icon: <Mail />, title: 'Inquiries', detail: CONTACT_EMAIL },
              { icon: <Clock />, title: 'Studio Hours', detail: 'Mon — Sat: 10AM — 7PM' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="text-surya-gold">{item.icon}</div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-2">{item.title}</h4>
                  <p className="text-lg font-display italic text-surya-charcoal">{item.detail}</p>
                </div>
              </div>
            ))}

            <div className="pt-10 border-t border-surya-border">
              <h4 className="text-[11px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-6">Find us on map</h4>
              <div className="bg-surya-cream aspect-video rounded flex items-center justify-center border border-surya-border relative overflow-hidden group">
                 <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" 
                    alt="Map Preview" 
                    referrerPolicy="no-referrer"
                 />
                 <div className="relative z-10 bg-white/90 p-4 shadow-xl border border-surya-border">
                   <p className="text-xs font-bold uppercase tracking-widest text-surya-charcoal">Guwahati, Assam</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-surya-cream/30 p-1 lg:p-2 border border-surya-border">
            <div className="bg-white p-8 md:p-16 border border-surya-border">
              <h2 className="text-4xl font-display italic text-surya-charcoal mb-10">Private Consultation</h2>
              <form onSubmit={sendWhatsApp} className="space-y-6">
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
                  <label className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-3 block">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="hello@example.com"
                    className="w-full border-b border-surya-border pb-3 text-sm focus:outline-none focus:border-surya-gold transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-3 block">Select Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full border-b border-surya-border pb-3 text-sm focus:outline-none focus:border-surya-gold transition-colors bg-transparent appearance-none"
                  >
                    <option>Plot Inquiry</option>
                    <option>Villa Inquiry</option>
                    <option>Property Investment </option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-3 block">Your Vision</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help bring your project to life?"
                    className="w-full border border-surya-border p-4 text-sm focus:outline-none focus:border-surya-gold transition-colors bg-white resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-surya-charcoal text-white py-5 font-bold uppercase tracking-[3px] text-xs hover:bg-surya-gold hover:text-white transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  Send to WhatsApp <MessageCircle size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto" />
            <h2 className="text-4xl font-display text-surya-charcoal italic mt-4">Common <span className="text-surya-gold">Inquiries</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x- 20 gap-y-12">
            {[
             
              { q: 'Can I visit the project site?', a: 'Absolutely. We encourage private site visits. Please book a consultation to schedule a guided walkthrough.' }
            ].map((faq, i) => (
              <div key={i} className="border-b border-surya-border pb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest text-surya-charcoal mb-4 flex gap-4">
                  <span className="text-surya-gold">Q.</span> {faq.q}
                </h3>
                <p className="text-surya-charcoal/60 text-sm leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
