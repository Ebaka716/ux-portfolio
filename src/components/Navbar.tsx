'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white font-mono">
              d.ELI
            </Link>
          </div>
          <a
            href="https://www.linkedin.com/in/elibakal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
} 