import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Plot Inquiry'
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Surya Developers, I'm ${formData.name}. I'd like to book a consultation regarding ${formData.service}.`;
    window.open(`https://wa.me/916003700715?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col md:grid md:grid-cols-[1fr_1.2fr] pt-20 overflow-hidden">
        <div className="bg-surya-charcoal p-12 lg:p-20 flex flex-col justify-center text-white relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-line" />
            <h1 className="text-5xl lg:text-7xl font-display font-light leading-[1.1] mb-6">
              Crafting <b className="text-surya-gold font-normal italic">Premium</b><br />Living Spaces
            </h1>
            <p className="text-lg opacity-80 mb-10 leading-relaxed max-w-lg">
              Building high-quality residential benchmarks in Guwahati since 2011. Transform your vision into architectural reality with Surya Developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/gallery"
                className="bg-surya-gold text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-surya-gold/20 text-center"
              >
                View Portfolio
              </Link>
              <Link 
                to="/about"
                className="border border-white/30 text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-surya-charcoal transition-all text-center"
              >
                Our Legacy
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[400px] md:h-auto overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <img 
              src="https://bewildered-salmon-055atfkxge.edgeone.app/hero.jpeg" 
              alt="Luxury Architecture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Service Preview */}
      <section className="py-24 bg-white border-b border-surya-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="accent-line" />
              <h2 className="text-4xl font-display text-surya-gold mb-8 italic">Signature Development</h2>
              <p className="text-lg text-surya-charcoal/80 mb-8 leading-relaxed italic">
                "We don't just build structures, we build legacies of trust and comfort in Assam."
              </p>
              <p className="text-surya-charcoal/60 mb-10 leading-relaxed">
                Specializing in luxury villas, premium plots, and strategic investments in the fastest growing corridors of Guwahati.
              </p>
              <Link to="/services" className="text-[11px] uppercase tracking-[3px] font-bold text-surya-charcoal hover:text-surya-gold transition-colors flex items-center gap-3">
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="pt-12">
                 <img src="https://logical-plum-ex1obnmdpz.edgeone.app/rs4.png" className="rounded-sm shadow-xl" alt="Plot" />
               </div>
               <div>
                  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600" className="rounded-sm shadow-xl" alt="Villa" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Summary */}
      <section className="py-24 bg-surya-cream border-b border-surya-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="https://screeching-amber-4gdctlze8j.edgeone.app/Screenshot%202026-05-03%20162933.png" className="w-full aspect-[4/5] object-cover rounded shadow-2xl" alt="About 1" />
                <div className="bg-surya-gold p-8 text-white">
                  <h4 className="text-4xl font-display italic mb-2">10+</h4>
                  <p className="text-[10px] uppercase tracking-[3px] font-bold opacity-80">Years of Building Excellence</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-surya-charcoal p-8 text-white">
                  <p className="text-sm font-light italic">"Architecting the future of Guwahati with sustainable and modern benchmarks."</p>
                </div>
                <img src="https://uptight-amaranth-dx7ivh2smp.edgeone.app/rs1.png" className="w-full aspect-[4/5] object-cover rounded shadow-2xl" alt="About 2" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="accent-line" />
              <h2 className="text-4xl font-display text-surya-charcoal italic mb-8">Our <span className="text-surya-gold">Foundation</span></h2>
              <p className="text-surya-charcoal/70 leading-relaxed mb-6 font-light text-lg">
                Surya Developers is more than just a construction company. We are a collection of visionaries dedicated to elevating the real estate landscape of Assam.
              </p>
              <p className="text-surya-charcoal/60 leading-relaxed mb-10 text-sm">
                Since our inception, we have focused on transparency, architectural integrity, and creating communities that stand the test of time. Our portfolio ranges from premium plotted developments to high-end luxury villas.
              </p>
              <Link to="/about" className="px-10 py-4 bg-surya-charcoal text-white text-[11px] uppercase tracking-[3px] font-bold hover:bg-surya-gold transition-colors inline-block">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-b border-surya-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto" />
            <h2 className="text-4xl font-display text-surya-charcoal italic mt-4">Why Partners Trust <span className="text-surya-gold">Surya</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Local Expertise', desc: 'Deep understanding of Guwahati’s growth corridors and legal landscape.' },
              { title: 'Quality Assurance', desc: 'Premium materials and strict architectural standards for every build.' },
              { title: 'Transparency', desc: 'Clear titles, honest pricing, and constant project updates.' }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-surya-border hover:bg-surya-cream/50 transition-colors">
                <h3 className="text-xl font-display italic text-surya-gold mb-4">{item.title}</h3>
                <p className="text-surya-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surya-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="accent-line" />
              <h2 className="text-5xl font-display italic mb-8">What Our <span className="text-surya-gold">Owners</span> Say</h2>
              <p className="text-surya-cream/60 leading-relaxed text-lg font-light">
                We measure our success by the satisfaction of the families and businesses that occupy the spaces we build.
              </p>
            </div>
            <div className="space-y-8">
              <div className="mb-6">
                <div className="w-8 h-px bg-surya-gold/30 mb-4" />
                <h3 className="text-surya-gold text-[20px] uppercase tracking-[4px] font-bold">Happy Customer Reviews</h3>
              </div>
              {[
                { name: 'Govind Agarwal', text: 'Very trustworthy company. They handled my plot registration with absolute transparency and ease.' },
                { name: 'Mukesh Jain', text: 'Premium service and professional team. The quality of finishing in their villas is unmatched in Guwahati.' }
              ].map((t, i) => (
                <div key={i} className="p-10 border border-white/10 bg-white/5 backdrop-blur-sm">
                  <p className="italic text-lg mb-6">"{t.text}"</p>
                  <p className="text-surya-gold text-[11px] uppercase tracking-[3px] font-bold">&mdash; {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-white border-b border-surya-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="accent-line" />
              <h2 className="text-5xl font-display text-surya-charcoal italic mt-4">Selected <span className="text-surya-gold">Projects</span></h2>
              <p className="text-surya-charcoal/60 mt-6 leading-relaxed">
                A glimpse into our portfolio of luxury residential developments and strategic prime plots across Guwahati.
              </p>
            </div>
            <Link to="/gallery" className="text-[11px] uppercase tracking-[3px] font-bold text-surya-charcoal hover:text-surya-gold transition-colors flex items-center gap-3 pb-2 border-b border-surya-border">
              View All Works <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 row-span-2 relative group overflow-hidden">
               <img src="https://mass-coral-y99n0398d7.edgeone.app/967729da-a6b4-498f-a6d2-7b2da8690d4f.jpg" className="w-full h-full object-cover  transition-all duration-700" alt="Featured 1" />
               <div className="absolute inset-0 bg-surya-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white text-[10px] uppercase tracking-[4px] font-bold border border-white/40 px-6 py-3">View Detail</span>
               </div>
            </div>
            <div className="relative group overflow-hidden">
               <img src="https://powerful-amaranth-kdqlt2ebzj.edgeone.app/WhatsApp%20Image%202026-05-03%20at%204.03.07%20PM.jpeg" className="w-full h-80 object-cover  transition-all duration-700" alt="Featured 2" />
            </div>
            <div className="relative group overflow-hidden">
               <img src="https://shared-gray-vrqc1ifya6.edgeone.app/Screenshot%202026-05-03%20170738.png" className="w-full h-80 object-cover  transition-all duration-700" alt="Featured 3" />
            </div>
            <div className="relative group overflow-hidden">
               <img src="https://rival-plum-weeeawzjg7.edgeone.app/p2.png" className="w-full h-80 object-cover  transition-all duration-700" alt="Featured 4" />
            </div>
            <div className="relative group overflow-hidden">
               <img src="https://deaf-lavender-ifeu67ud5s.edgeone.app/surya.png" className="w-full h-80 object-cover  transition-all duration-700" alt="Featured 5" />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-24 bg-surya-cream border-b border-surya-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-surya-border grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
            <div className="p-12 lg:p-20 bg-surya-charcoal text-white flex flex-col justify-center">
              <div className="accent-line" />
              <h2 className="text-5xl font-display italic mb-8">Book a <span className="text-surya-gold">Consultation</span></h2>
              <p className="text-surya-cream/60 leading-relaxed font-light mb-10 text-lg">
                Ready to take the next step? Secure a private session with our directors to discuss your investment or construction needs.
              </p>
              <div className="space-y-4 text-sm font-bold uppercase tracking-widest text-surya-gold">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-surya-gold rounded-full" />
                  Direct Site Visists
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-surya-gold rounded-full" />
                  Legal Portfolio Review
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-surya-gold rounded-full" />
                  Financial Planning
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-20">
              <form onSubmit={handleBooking} className="space-y-8">
                <div>
                  <label className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-4 block">Your Full Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="E.g. Rahul Sharma"
                    className="w-full border-b border-surya-border py-4 text-lg font-display focus:outline-none focus:border-surya-gold transition-colors italic"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40 mb-4 block">Interested In</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full border-b border-surya-border py-4 text-lg font-display focus:outline-none focus:border-surya-gold transition-colors italic bg-transparent appearance-none"
                  >
                    <option>Plot Inquiry</option>
                    <option>Villa Construction</option>
                    <option>Property Investment </option>
              
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-surya-gold text-white py-6 font-bold uppercase tracking-[4px] text-xs hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-4"
                >
                  Book Appointment <MessageCircle size={20} />
                </button>
                <p className="text-[10px] text-center text-surya-charcoal/40 uppercase tracking-[2px]">
                  Appointments usually confirmed within 2 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-surya-cream border-b border-surya-border">
         <div className="max-w-7xl mx-auto px-6 text-center">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
             {[
               { label: 'Completed', value: '15+' },
               { label: 'Happy Families', value: '15+' },
               { label: 'Years Exp', value: '10+' },
               { label: 'City Hubs', value: '5+' },
             ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-display italic text-surya-gold mb-2">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-[3px] font-bold text-surya-charcoal/40">{stat.label}</div>
                </div>
             ))}
           </div>
         </div>
      </section>
    </div>
  );
};

export default HomePage;
