'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppChat from './WhatsAppChat';

const socialLinks = [
  { name: 'YouTube', href: '#', icon: '▶' },
  { name: 'Telegram', href: '#', icon: '✈' },
  { name: 'Instagram', href: '#', icon: '📷' },
  { name: 'WhatsApp', href: '#', icon: '💬' },
  { name: 'Facebook', href: '#', icon: 'f' }
];

export default function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer id="support" className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/IMD-Medical-Resources-300x300.webp"
                  alt="iMD Medical Resources Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 leading-tight">iMD MEDICAL RESOURCES</p>
                <p className="text-lg font-bold leading-tight">iMD Medical Resources</p>
              </div>
            </div>
            <p className="text-gray-400">
              Your trusted source for medical education and exam preparation.
            </p>
          </div>
          
          {/* Middle - Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/databases" className="text-gray-400 hover:text-white transition">
                  Databases & Resources
                </Link>
              </li>
              <li>
                <Link href="#subscribe" className="text-gray-400 hover:text-white transition">
                  Subscribe Now
                </Link>
              </li>
              <li>
                <Link href="#support" className="text-gray-400 hover:text-white transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Right Side - Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow us on</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition px-4 py-2 rounded-lg text-sm font-medium"
                  title={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <h4 className="text-lg font-semibold mb-4">You can contact us 24/7</h4>
          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Message on Telegram
            </a>
            <a
              href="mailto:support@imdresources.com"
              className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email us at support@imdresources.com
            </a>
            <a
              href="#"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Contact on WhatsApp
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Disclaimer: These are our only handles to get in contact with us.
          </p>
        </div>
      </div>
      
      {/* Chat Widget Button */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 group">
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition transform hover:scale-110 relative"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
          </button>
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl p-3 text-gray-800 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Need Help? Chat with us
          </div>
        </div>
      )}

      {/* WhatsApp Chat Modal */}
      <WhatsAppChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </footer>
  );
}
