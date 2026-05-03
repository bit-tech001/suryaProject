import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-surya-charcoal text-white pt-20 pb-10 border-t border-surya-border/20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <Link to="/" className="mb-12">
          <Logo variant="light" className="scale-125" />
        </Link>
        <nav className="flex justify-center flex-wrap gap-6 md:gap-10 mb-12 text-[11px] uppercase tracking-[2px] font-semibold opacity-70">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="border-t border-white/5 pt-10 text-[10px] uppercase tracking-[3px] opacity-40">
          © 2026 Surya Developers &mdash; BORA SERVICE, GUWAHATI, ASSAM
        </div>
      </div>
    </footer>
  );
};

export default Footer;
