'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="flex items-center py-4 md:py-10 max-w-5xl mx-auto px-4 xl:px-0 relative">
      <div className="flex-1">
        <Link href="/" className="flex items-center">
          <Image
            src="/percy_logo.svg"
            alt="Percy Logo"
            width={92}
            height={34}
            priority
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
        <Link href="/pricing" className="font-[600] text-base">
          {t('nav.pricing')}
        </Link>
        <Link href="/roadmap" className="font-[600] text-base">
          {t('nav.roadmap')}
        </Link>
        {/* <Link href="/blog" className="font-[600] text-base">
          Blog
        </Link> */}
        {/* <Link href="/" className="font-[600] text-base">
          {t('nav.about')}
        </Link> */}
      </div>

      <div className="flex-1 flex justify-end items-center space-x-4">
        {/* Language Switcher */}
        <LanguageSwitcher />
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <a 
          href="https://calendly.com/juergen-touchstage" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white px-[12px] py-[10px] rounded-full font-[800] text-[13px]"
        >
          {t('nav.getStarted')}
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-2 py-4 px-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              href="/pricing"
              className="font-[600] text-base block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.pricing')}
            </Link>
            <Link
              href="/roadmap"
              className="font-[600] text-base block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.roadmap')}
            </Link>
            {/* <Link
              href="/blog"
              className="font-[600] text-base block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link> */}
            <Link
              href="/"
              className="font-[600] text-base block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            {/* Language Switcher in Mobile Menu */}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
