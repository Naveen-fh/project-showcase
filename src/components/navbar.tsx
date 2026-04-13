'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, LayoutGrid } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="glass sticky top-0 z-50 py-4 px-6 mb-8 mt-4 mx-4 rounded-2xl">
      <div className="container flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <span className="text-xl font-bold tracking-tight">
              B.U.Naveen Raj
            </span>
            <span className="hidden md:block opacity-20">|</span>
            <span className="text-xl font-extrabold tracking-tighter text-brand-red">
              Foodhub
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="hidden sm:block text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity"
          >
            Showcase
          </Link>
          <div className="h-4 w-[1px] bg-foreground/10 hidden sm:block"></div>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-3 rounded-xl hover:bg-foreground/5 transition-all active:scale-95 relative overflow-hidden group min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted ? (
              <div className="relative w-5 h-5">
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Sun size={20} className="text-amber-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Moon size={20} className="text-blue-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="w-5 h-5 opacity-0" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
