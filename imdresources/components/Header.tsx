'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  onAccountClick?: () => void;
}

export default function Header({ onAccountClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/IMD-Medical-Resources-300x300.webp"
                alt="iMD Medical Resources Logo"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-600 leading-tight">iMD MEDICAL RESOURCES</span>
              <span className="text-lg font-bold text-blue-600 leading-tight">iMD Medical Resources</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/databases" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Databases & Resources
            </Link>
            <Link href="#subscribe" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Subscribe Now
            </Link>
            <Link href="#support" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/databases" className="block text-gray-700 hover:text-blue-600 transition">
              Databases & Resources
            </Link>
            <Link href="#subscribe" className="block text-gray-700 hover:text-blue-600 transition">
              Subscribe Now
            </Link>
            <Link href="#support" className="block text-gray-700 hover:text-blue-600 transition">
              Support
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
