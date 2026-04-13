import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ChevronLeft, 
  Check, 
  ArrowRight, 
  Settings, 
  AlertTriangle, 
  Lightbulb, 
  Layers, 
  Trophy,
  Video,
  GitPullRequest,
  TestTube2,
  Eye
} from 'lucide-react';
import { GithubIcon } from '@/components/icons';

const projectData: Record<string, any> = {
  project1: {
    title: 'Access Control System',
    fullTitle: 'Centralized Governance & Seasonal Menu Control',
    github: 'https://github.com/Nav33nR4J/franchisemultimenu',
    problem: 'Franchise operations faced significant challenges with fragmented menu and pricing control across 150+ global locations. Manual updates were prone to human error, leading to pricing inconsistencies and operational friction during peak seasonal transitions.',
    solution: 'Designed and implemented a centralized multi-tenant governance platform. The system allows HQ to maintain master catalogues and global pricing rules while empowering local branches with controlled autonomy for inventory management and local customization.',
    architecture: 'Architected using a hub-and-spoke model with Next.js for the frontend dashboard and PostgreSQL for data persistence. Leveraged Row-Level Security (RLS) to ensure strict data isolation between franchise branches while maintaining a unified global state.',
    achievements: 'Engineered the core RBAC engine and designed the automated switching logic that handles recursive menu updates (Breakfast/Lunch/Dinner) without downtime, reducing manual configuration time by over 90%.',
    keyFeatures: [
      'Multi-Tenant Role-Based Access Control',
      'Centralized Master Catalogue Management',
      'Automated Recursive Menu Switching',
      'Seasonal Promotion Scheduling',
      'Conflict-Free Data Synchronization',
    ],
    video: 'https://drive.foodhub.com/external/file/bvmdgf70b9d2fc06c442eb333678e6680c3cd',
    repos: ['franchisemultimenu'],
    stats: {
      uptime: '99.9%',
      branches: '150+',
      efficiency: '+90%'
    }
  },
  project2: {
    title: 'Mobile Application',
    fullTitle: 'Restaurant Management Mobile Ecosystem',
    github: 'http://github.com/Nav33nR4J/restaurant-management',
    problem: 'Restaurant managers lacked real-time visibility into branch performance when away from their workstations. Traditional management tools were desktop-bound, leading to delayed decision-making and inefficient communication between HQ and branch staff.',
    solution: 'Developed a high-performance cross-platform mobile ecosystem using React Native. The app provides managers with live analytics, real-time inventory tracking, and a secure communication bridge, all optimized for low-latency updates.',
    architecture: 'Built on React Native (Expo) with a robust Redux-based state management layer using Redux-Persist for offline reliability. The backend utilizes Node.js and JWT-based authentication to ensure secure data transmission across distributed networks.',
    achievements: 'Lead the end-to-end development of the mobile frontend, implemented a custom dynamic theming system for white-labeling, and optimized the Redux store to handle complex synchronization patterns with SQLite persistence.',
    keyFeatures: [
      'Real-Time Performance Analytics',
      'Offline-First Data Persistence',
      'Secure JWT Authentication',
      'Dynamic White-Label Theming',
      'Cross-Platform Deployment (iOS/Android)',
    ],
    video: 'https://drive.foodhub.com/external/file/gj1f8e362f52491c44b0e80b36fdbbdc9469e',
    repos: ['restaurant-management'],
    stats: {
      reach: '10k+ Users',
      latency: '<100ms',
      rating: '4.8/5'
    }
  },
  project3: {
    title: 'Promotions System',
    fullTitle: 'Advanced Analytics & Promotions Engine',
    github: 'https://github.com/Nav33nR4J/restaurant-management-5f60117c4fe71a0c9513c0c28d7378f9a930cfb4',
    problem: 'Promotional campaigns often suffered from a lack of integration with real-time stock levels, causing overselling and customer dissatisfaction. Existing systems struggled to handle high concurrency during flash sales or global promotion launches.',
    solution: 'Engineered a specialized high-concurrency promotions engine designed to synchronize global stock levels in real-time. The system calculates promotional eligibility instantly based on localized stock data and centralized business rules.',
    architecture: 'Utilized a microservices architecture with Node.js and Redis sorted sets for lightning-fast stock counter management. Integrated Socket.io for real-time WebSocket communication to ensure sub-100ms state updates across all endpoints.',
    achievements: 'Designed the high-speed stock synchronization logic, architected the Redis-backed queue system for handling concurrent order bursts, and built the analytics dashboard for real-time campaign performance tracking.',
    keyFeatures: [
      'High-Concurrency Stock Sync',
      'Real-Time WebSocket Updates',
      'Geo-Localized Promotion Triggers',
      'Advanced Campaign Analytics',
      'Redis-Optimized Inventory Management',
    ],
    video: 'https://drive.foodhub.com/external/file/lssrqb450728ae81e41ddb277d6dcb42a8f8c',
    repos: ['restaurant-management-analytics'],
    stats: {
      concurrency: '50k+',
      latency: '<50ms',
      sync: 'Global'
    }
  },
  project4: {
    title: 'Quality Assurance',
    fullTitle: 'Automated Testing Suite for MyTakeaway 2.0',
    github: 'https://github.com/uktech/mytakeaway2.0',
    problem: 'Critical UI components like HorizontalStackBar and OrderCompletionTimeModal lacked comprehensive test coverage, increasing regression risks during rapid feature iterations in the complex, multi-tenant mytakeaway2.0 ecosystem.',
    solution: 'Engineered a highly decoupled unit testing framework using Jest and React Native Testing Library. Implemented comprehensive test suites covering edge cases, localized data states, and complex Redux interactions.',
    architecture: 'Built on a modular testing architecture leveraging Jest as the primary runner. Utilized advanced mocking strategies for Redux state and navigation to ensure isolated component verification without side effects.',
    achievements: 'Successfully developed and stabilized the test environment for core analytics modules. Fixed inherited test failures and reached high branch coverage for mission-critical modal logic and data visualization components.',
    keyFeatures: [
      'Component Lifecycle & State Verification',
      'Localized Content & Skeleton Loader Testing',
      'Redux Interaction & Mocking',
      'Animation Stability (Jest Timers)',
      'High-Confidence Modal Logic Coverage',
    ],
    prLinks: [
      { label: 'Fix HorizontalStackBar tests', url: 'https://github.com/uktech/mytakeaway2.0/pull/34945' },
      { label: 'OrderCompletionTimeModal tests', url: 'https://github.com/uktech/mytakeaway2.0/pull/35062' }
    ],
    video: '',
    repos: ['mytakeaway2.0'],
    stats: {
      components: 'Core UI',
      coverage: 'High Branch',
      framework: 'Jest/RNTL'
    }
  },
  project5: {
    title: 'Operations Dashboard',
    fullTitle: 'Real-Time Kiosk Operations & Monitoring System',
    github: 'https://github.com/Naveen-fh/smartkiosk',
    problem: 'Managing a large fleet of self-service kiosks (1000+) proved difficult without a unified visibility layer. Identifying hardware failures, network drops, or software issues in real-time was reactive, leading to prolonged downtime and lost revenue.',
    solution: 'Engineered a comprehensive monitoring ecosystem that aggregates live health telemetry from distributed kiosks. Featuring a high-performance React Native dashboard and a robust Node.js backend to provide instantaneous alerts and system-wide visibility.',
    architecture: 'Built using a distributed architecture with a Node.js/Express backend for telemetry ingestion and a React Native (Expo) frontend for the dashboard. Leveraged Firebase for real-time data synchronization and Redux Saga for handling complex side effects and asynchronous data fetching.',
    achievements: 'Developed the real-time alert engine, architected the kiosk health monitoring system, and optimized the mobile dashboard to handle visualization of 1000+ concurrently active devices with sub-second latency.',
    keyFeatures: [
      'Real-Time Kiosk Health Monitoring',
      'Instant System-Wide Alerts',
      'Performance Analytics & Visualization',
      'Cross-Platform Management Dashboard',
      'Secure Multi-Tenant Authentication',
    ],
    video: '', // Placeholder since no specific video for this project was found
    repos: ['smartkiosk', 'kiosk_backend'],
    stats: {
      reach: '1,200+ Kiosks',
      latency: '<500ms',
      availability: '99.99%'
    }
  },
  project6: {
    title: 'Face Recognition',
    fullTitle: 'Advanced Biometric Authentication & Face Recognition',
    github: 'https://github.com/Naveen-fh/smartkiosk',
    problem: 'Restaurant kiosks needed an automated and secure method to verify employee identities and recognize loyal customers without manual input, improving speed of service and personalization.',
    solution: 'Developed a sophisticated Face Recognition module for Smart Kiosks, leveraging high-performance computer vision algorithms to perform sub-second biometric matching at the edge.',
    architecture: 'Engineered using React Native Vision Camera for high-speed frame capture and a Node.js/TypeScript backend for secure biometric processing. The system implements a robust image storage service for optimized retrieval and matching.',
    achievements: 'Successfully designed the end-to-end recognition pipeline, integrated biometric feedback into the Kiosk UI (Vision Notch), and optimized processing to handle real-world lighting conditions in busy restaurant environments.',
    keyFeatures: [
      'High-Speed Edge-Based Face Detection',
      'Secure Biometric Storage & Encryption',
      'Sub-Second Authentication Latency',
      'Real-Time UI Notch Feedback',
      'Background Analysis Engine',
    ],
    video: 'https://drive.foodhub.com/external/file/t6tz379c0f16d879443ddb5b58b857b260def',
    repos: ['smartkiosk', 'kiosk_backend'],
    stats: {
      speed: '<800ms',
      processing: 'On-Device',
      success: '99%+'
    }
  },
  project7: {
    title: 'UI Component Library',
    fullTitle: 'Foodhub Slice - Standardized UI Systems',
    github: 'https://github.com/uktech/foodhub-slice',
    problem: 'fragmented legacy UI patterns across hundreds of files created significant design debt and maintenance challenges in the mytakeaway2.0 mobile app.',
    solution: 'Engineered the "SliceUI" library, centralizing core components like the highly-configurable Divider to ensure ecosystem-wide consistency.',
    architecture: 'Token-based design system supporting React Native and Web, with automated documentation via Storybook.',
    achievements: 'Successfully replaced custom separators in 343 files with the new Divider component, streamlining the engineering workflow and UI fidelity.',
    keyFeatures: [
      'Multi-Platform Support (RN & Web)',
      'Token-Mapped Thickness & Colors',
      'Complex Line Patterns (Dashed/Dotted)',
      'Performance Optimized (Memoized)',
      'High-Confidence Test Integration',
    ],
    video: 'https://storybook.sitfoodhub.com/?path=/docs/components-divider--docs',
    repos: ['foodhub-slice'],
    stats: {
      adoption: '343+ Files',
      fixes: '40+ Patterns',
      env: 'Web & Mobile'
    }
  },
};

export async function generateStaticParams() {
  return [
    { id: 'project1' },
    { id: 'project2' },
    { id: 'project3' },
    { id: 'project4' },
    { id: 'project5' },
    { id: 'project6' },
    { id: 'project7' },
  ];
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const project = projectData[id];

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12 px-6 max-w-7xl animate-fade-in mx-auto">
      <div className="flex justify-between items-center mb-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold opacity-40 hover:opacity-100 transition-all group text-foreground">
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Project Showcase
        </Link>
        <div className="flex gap-2">
          {project.repos && project.repos.map((repo: string) => (
            <div key={repo} className="bg-brand-red text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-brand-red/20 opacity-90">
              {repo}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.05] tracking-tighter">
          {project.fullTitle}
        </h1>
        
        <div className="flex flex-wrap gap-4 mb-20">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary gap-3 text-white px-8"
          >
            <GithubIcon size={20} /> View Technical Source
          </a>
          {project.video && (
            <a 
              href={project.video} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-glass gap-3 px-8 border-foreground/10"
            >
              <Video size={20} /> Preview
            </a>
          )}
          {project.prLinks && project.prLinks.map((pr: any, index: number) => (
            <a 
              key={index}
              href={pr.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-glass gap-3 px-8 border-accent/20 text-accent group"
            >
              <GitPullRequest size={20} className="group-hover:rotate-12 transition-transform" /> {pr.label}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {Object.entries(project.stats).map(([label, value]: [string, any]) => (
            <div key={label} className="glass p-8 rounded-3xl border-dashed">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">{label}</p>
              <p className="text-3xl font-extrabold text-accent">{value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-brand-red/10 text-brand-red">
                <AlertTriangle size={24} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">Problem Statement</h2>
            </div>
            <p className="opacity-60 leading-relaxed text-xl font-medium">
              {project.problem}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                <Lightbulb size={24} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">Proposed Solution</h2>
            </div>
            <p className="opacity-60 leading-relaxed text-xl font-medium">
              {project.solution}
            </p>
          </section>

          <section className="glass p-10 rounded-[2.5rem] border-none bg-accent/[0.03]">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-accent text-white">
                <Layers size={24} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">System Architecture</h2>
            </div>
            <p className="opacity-70 leading-relaxed text-xl font-medium mb-10">
              {project.architecture}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3 p-4 glass rounded-2xl border-accent/10 bg-white dark:bg-black/20">
                  <Check size={18} className="text-accent shrink-0" />
                  <span className="font-bold text-sm opacity-80">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-brand-red text-white shadow-lg shadow-brand-red/20">
                <Trophy size={24} />
              </div>
              <h2 className="text-3xl font-black tracking-tight">What I Have Done</h2>
            </div>
            <p className="opacity-60 leading-relaxed text-xl font-medium">
              {project.achievements}
            </p>
          </section>



          <section className="pt-20 border-t border-foreground/5">
            <Link href="/" className="flex items-center gap-4 text-xl font-black text-accent group w-fit">
              Explore More Technical Portfolios 
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
