
import React from 'react';
import { 
  Code, 
  Smartphone, 
  Layers, 
  Palette, 
  Settings, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Cpu 
} from 'lucide-react';
import { Service, Project, Feature } from './types';

// Replace 'YOUR_ACCESS_KEY_HERE' with your actual key from https://web3forms.com/
export const WEB3FORMS_ACCESS_KEY = '3247dc10-a62c-4596-a003-fee5cedd9df0';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'High-performance, scalable websites built with the latest frameworks and modern architecture.',
    icon: <Code className="w-8 h-8 text-blue-400" />
  },
  {
    id: 'app-dev',
    title: 'App Development',
    description: 'Custom mobile and desktop applications with intuitive UX and cross-platform compatibility.',
    icon: <Smartphone className="w-8 h-8 text-purple-400" />
  },
  {
    id: 'prod-design',
    title: 'Product Design',
    description: 'User-centric design systems that convert visitors into loyal customers through research and testing.',
    icon: <Layers className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Professional visual identities, branding, and Photoshop-grade creative assets.',
    icon: <Palette className="w-8 h-8 text-pink-400" />
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Ongoing support, security updates, and performance optimization to keep your digital assets prime.',
    icon: <Settings className="w-8 h-8 text-cyan-400" />
  },
  {
    id: 'all-in-one',
    title: 'All-in-One Solutions',
    description: 'Comprehensive digital strategies from initial concept to deployment and scaling.',
    icon: <Globe className="w-8 h-8 text-emerald-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Quantum Dashboard',
    category: 'Web Application',
    image: 'https://picsum.photos/seed/quant/800/600',
    description: 'A data-heavy fintech dashboard with real-time analytics.',
    tags: ['React', 'D3.js', 'Tailwind']
  },
  {
    id: '2',
    title: 'Aura Mobile App',
    category: 'Mobile Design',
    image: 'https://picsum.photos/seed/aura/800/600',
    description: 'Wellness tracking app with focus on minimalist aesthetics.',
    tags: ['React Native', 'Firebase']
  },
  {
    id: '3',
    title: 'E-Luxe Commerce',
    category: 'E-Commerce',
    image: 'https://picsum.photos/seed/eluxe/800/600',
    description: 'Premium luxury shopping experience with headless architecture.',
    tags: ['Next.js', 'Stripe', 'Node']
  },
  {
    id: '4',
    title: 'Zenith Brand Identity',
    category: 'Graphic Design',
    image: 'https://picsum.photos/seed/zenith/800/600',
    description: 'Full corporate rebranding including logo and design system.',
    tags: ['Photoshop', 'Illustrator']
  },
  {
    id: '5',
    title: 'Insight Analytics',
    category: 'Product Design',
    image: 'https://picsum.photos/seed/insight/800/600',
    description: 'B2B SaaS platform for supply chain optimization.',
    tags: ['Figma', 'UX Research']
  },
  {
    id: '6',
    title: 'Pulse News',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/pulse/800/600',
    description: 'Hyper-local news portal with dynamic content delivery.',
    tags: ['TypeScript', 'GraphQL']
  }
];

export const FEATURES: Feature[] = [
  {
    title: 'Unmatched Quality',
    description: 'We adhere to the highest industry standards for code and design pixel-perfection.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Fast Delivery',
    description: 'Our agile methodology ensures your project moves from concept to launch rapidly.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Modern Tech Stack',
    description: 'Leveraging cutting-edge tools like Gemini AI, React, and serverless architectures.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: '24/7 Support',
    description: 'Dedicated long-term maintenance and technical support for your peace of mind.',
    icon: <Clock className="w-6 h-6" />
  }
];
