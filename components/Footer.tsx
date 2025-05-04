'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#18181B] text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 xl:px-0">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="logo-container flex items-center justify-center mb-4 relative overflow-hidden p-[20px] rounded-[12px]">
            <Image
              src="/logo-full.svg"
              alt="Percy Logo"
              width={400}
              height={120}
              className="animated-logo w-[400px] md:w-[500px] lg:w-[600px]"
              priority
            />
          </div>
          
          {/* Tagline */}
          <div className="tagline-container opacity-60 hover:opacity-90 transition-opacity duration-300 mt-2 mb-12">
            <p className="text-gray-400 text-sm md:text-base lg:text-lg italic font-light tracking-wide">
              {t('footer.tagline')}
            </p>
          </div>
          
          {/* Links */}
          <div className="flex space-x-4 mb-8">
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              {t('footer.termsOfUse')}
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            {t('footer.copyright')} {new Date().getFullYear()}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animated-logo {
          animation: shimmer 3s infinite;
          filter: drop-shadow(0 0 8px rgba(175, 132, 230, 0.8));
          transition: transform 0.3s ease-in-out;
        }
        
        .logo-container:hover .animated-logo {
          transform: scale(1.05);
        }
        
        @keyframes shimmer {
          0% {
            filter: drop-shadow(0 0 8px rgba(175, 132, 230, 0.8));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(129, 140, 248, 0.9));
          }
          100% {
            filter: drop-shadow(0 0 8px rgba(175, 132, 230, 0.8));
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 