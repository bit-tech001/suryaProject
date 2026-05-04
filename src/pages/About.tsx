import React from 'react';
import { motion } from 'motion/react';
import { Building2, Users, Rocket, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-24 bg-surya-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="accent-line mx-auto mb-6" />
          <h1 className="text-6xl font-display text-surya-charcoal mb-6 italic">About Our <span className="text-surya-gold">Legacy</span></h1>
          <p className="text-lg text-surya-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            Since 2011, Surya Developers has been at the forefront of high-quality construction and property development in Guwahati, Assam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img 
              src="https://convincing-green-vkorudmrwv.edgeone.app/oo.png" 
              alt="Office" 
              className="rounded-lg shadow-2xl  hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-surya-gold/10 -z-10 border border-surya-gold/20" />
          </div>
          <div>
            <h2 className="text-4xl font-display text-surya-charcoal mb-8 italic">Our <span className="text-surya-gold">History</span></h2>
            <div className="space-y-6 text-surya-charcoal/80 leading-relaxed font-light text-lg">
              <p>
                Founded on the principles of integrity and excellence, Surya Developers started as a small family-owned construction firm. Today, we have grown into one of Guwahati's most trusted real estate enterprises.
              </p>
              <p>
                We believe that a "home" is more than just four walls—it is a foundation for dreams. This philosophy drives us to ensure every brick we lay and every plot we develop meets the highest standards of safety and sustainability.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <Users size={32} />, title: '200+ Clients', desc: 'Trusting us for their dream projects' },
            { icon: <Building2 size={32} />, title: '15+ Projects', desc: 'Completed across Assam' },
            { icon: <Rocket size={32} />, title: '10 Years', desc: 'Of architectural innovation' },
            { icon: <ShieldCheck size={32} />, title: 'Verified', desc: 'Transparent legal documentation' },
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-white border border-surya-border text-center group hover:bg-surya-charcoal hover:text-white transition-all duration-500">
              <div className="text-surya-gold mb-6 flex justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-widest">{stat.title}</h3>
              <p className="text-sm opacity-60 font-light">{stat.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-surya-charcoal p-12 lg:p-20 text-white rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-display italic text-surya-gold mb-6">Our Vision</h2>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                To redefine the real estate landscape of Northeast India by delivering innovative, sustainable, and high-value housing solutions that enhance the quality of life.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-display italic text-surya-gold mb-6">Our Mission</h2>
              <p className="text-lg opacity-80 leading-relaxed font-light">
                To maintain transparency in every deal, use premium materials in every build, and deliver "Real Simple" real estate experiences for every family in Assam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
