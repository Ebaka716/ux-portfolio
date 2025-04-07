'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const projects = [
  {
    id: 'fidelity-customer-service',
    title: 'Fidelity Customer Service',
    description: 'Led end-to-end design for Customer Service improvements, creating a streamlined single-page application that enhances support interactions.',
    image: '/images/fidelity-cs.jpg'
  },
  {
    id: 'fidelity-ai-solutions',
    title: 'Fidelity AI Assistant',
    description: 'Designed intuitive interfaces for Fidelity Assistant, enhancing service delivery through natural interactions and clear communication.',
    image: '/images/fidelity-ai.jpg'
  },
  {
    id: 'fidelity-institutional',
    title: 'Fidelity Institutional',
    description: 'Led UX efforts for financial advisors, developing enterprise solutions and driving design decisions on legacy systems.',
    image: '/images/fidelity-fi.jpg'
  },
  {
    id: '36creative-ecommerce',
    title: 'E-commerce Optimization',
    description: 'Improved eCommerce conversion rates by 20% through research validation, competitive analysis, and strategic design improvements.',
    image: '/images/36creative-ecom.jpg'
  },
  {
    id: 'twin-birch-farm',
    title: 'Twin Birch Farm',
    description: 'Created a digital platform for organic farm distribution and community building, establishing brand identity and engagement.',
    image: '/images/twin-birch.jpg'
  },
  {
    id: 'boston-gov-covid',
    title: 'Boston.gov COVID',
    description: 'Redesigned COVID response pages, improving public trust and information accessibility through enhanced navigation and testing.',
    image: '/images/boston-gov.jpg'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 flex items-center justify-center">
              Eli Bakal's Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Creating intuitive digital experiences that drive results and delight users.
              <span className="inline-block animate-float ml-2">💡</span>
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/elibakal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Showcase</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                href={`/projects/${project.id}`} 
                key={project.id}
                className="group"
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-700">
                    <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-400">Project Image</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
