import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 mt-20 border-t border-card-border">
      <div className="container text-center">
        <p className="text-sm text-primary opacity-60">
          © {new Date().getFullYear()} Project Showcase. Built with Next.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
