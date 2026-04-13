import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 mt-32 border-t border-foreground/5 bg-background/50 backdrop-blur-sm">
      <div className="container text-center max-w-7xl mx-auto opacity-60">
        <p className="text-sm font-medium mb-2">
          &copy; 2026 B.U.Naveen Raj | <span className="text-brand-red font-bold">Foodhub</span> Engineering
        </p>
        <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">
          Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
