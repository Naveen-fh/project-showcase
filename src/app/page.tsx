'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Zap, ArrowRight, ExternalLink, Code2, LayoutDashboard, TestTube2, Eye, Layers, MessageSquare } from 'lucide-react';
import { GithubIcon } from '@/components/icons';

const projects = [
  {
    id: 'project1',
    title: 'Access Control System',
    subtitle: 'Core Governance & Menu Management',
    description: 'Centralized control over menus, pricing, and franchise governance with seasonal scheduling. Built for scale and reliability.',
    icon: Shield,
    gradient: 'from-blue-500/20 to-indigo-500/20',
    tags: ['Next.js', 'PostgreSQL', 'RBAC'],
  },
  {
    id: 'project2',
    title: 'Mobile Application',
    subtitle: 'React Native Management App',
    description: 'Cross-platform restaurant management system with Redux state and offline persistence. Seamless UX for on-the-go management.',
    icon: Smartphone,
    gradient: 'from-purple-500/20 to-pink-500/20',
    tags: ['React Native', 'Redux', 'SQLite'],
  },
  {
    id: 'project3',
    title: 'Promotions System',
    subtitle: 'Advanced Analytics & Sync',
    description: 'Integrated promotions engine, real-time stock tracking, and unified ordering platform. Data-driven growth strategies.',
    icon: Zap,
    gradient: 'from-amber-500/20 to-orange-500/20',
    tags: ['Node.js', 'Socket.io', 'Redis'],
  },
  {
    id: 'project4',
    title: 'Quality Assurance',
    subtitle: 'Automated Testing & QA',
    description: 'Developed robust automation suites for mission-critical components, ensuring localized reliability and stable performance across the ecosystem.',
    icon: TestTube2,
    gradient: 'from-rose-500/20 to-orange-500/20',
    tags: ['Jest', 'RNTL', 'Automation'],
  },
  {
    id: 'project5',
    title: 'Operations Dashboard',
    subtitle: 'Real-Time Monitoring System',
    description: 'High-performance dashboard for managing 1,200+ kiosks with live telemetry and instant alerts. Full-stack visibility.',
    icon: LayoutDashboard,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    tags: ['React Native', 'Firebase', 'Redux Saga'],
  },
  {
    id: 'project6',
    title: 'Face Recognition',
    subtitle: 'Biometric Recognition System',
    description: 'High-speed biometric identification system for Smart Kiosks, enabling seamless customer recognition and secure authentication.',
    icon: Eye,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    tags: ['Biometrics', 'Vision Camera', 'Node.js'],
  },
  {
    id: 'project7',
    title: 'UI Component Library',
    subtitle: 'Design Systems & Components',
    description: 'Robust UI library powering the Foodhub ecosystem. Centralized 343 legacy instances of fragmented separators into a single component.',
    icon: Layers,
    gradient: 'from-orange-500/20 to-red-500/20',
    tags: ['Design Systems', 'Storybook', 'React Native'],
  },
  {
    id: 'project9',
    title: 'AI Chatbot Ordering',
    subtitle: 'Preference-Aware Self-Ordering Assistant',
    description: 'Conversational AI assistant embedded in the customer app that lets users discover menus, set dietary preferences, and place orders end-to-end through natural chat.',
    icon: MessageSquare,
    gradient: 'from-teal-500/20 to-cyan-500/20',
    tags: ['React Native', 'Redux', 'LLM / NLP'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
} as const;

export default function Home() {
  return (
    <div className="container py-12 px-6 max-w-7xl mx-auto relative min-h-screen">
      {/* Background Decorative Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="text-center mb-32 pt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold mb-8"
        >
          <Code2 size={16} /> Product Portfolio 2026
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Project <span className="text-accent underline decoration-accent/20 underline-offset-8">Showcase</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl opacity-60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Portal to display projects and work done at Foodhub
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
           className="flex flex-wrap justify-center gap-6"
        >
          {/* Action buttons removed as requested */}
        </motion.div>
      </section>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 mb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="group flex">
            <motion.div 
              variants={itemVariants}
              className={`glass p-8 rounded-[2.5rem] card-hover h-full flex flex-col relative overflow-hidden w-full`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8 p-4 rounded-2xl bg-foreground/5 w-fit group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <project.icon className="w-8 h-8" />
                </div>
                
                <h2 className="text-3xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                
                <p className="text-xs font-black text-accent/60 mb-6 uppercase tracking-[0.2em]">
                  {project.subtitle}
                </p>
                
                <p className="text-lg opacity-60 mb-10 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-foreground/5 opacity-60">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between text-sm font-bold pt-6 border-t border-foreground/5">
                  <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform text-foreground">
                    View Project <ArrowRight size={16} />
                  </span>
                  <ExternalLink size={16} className="opacity-20" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>


    </div>
  );
}
