import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const color = variant === 'light' ? '#FAF9F6' : '#1A1A1A';
  const gold = '#C5A059';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://screeching-amber-4gdctlze8j.edgeone.app/Screenshot%202026-05-03%20162933.png" 
        alt="Surya Developers Logo"
        className="w-20 h-20 object-contain shrink-0 radius-50"
      />
      <div className="flex flex-col">
        <span className="font-display text-xl font-bold tracking-[3px] uppercase leading-none  text-surya-gold" >
          Surya
        </span>
        <span className="font-sans text-[10px] tracking-[4px] uppercase font-bold text-gray-600 -mt-0.5">
          Developers
        </span>
      </div>
    </div>
  );
};

export default Logo;
