'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const PricingSection = () => {
  const { t } = useLanguage();
  const [annualBilling, setAnnualBilling] = useState(false)
  const [starterCredits, setStarterCredits] = useState('1,200')
  const [proCredits, setProCredits] = useState('7,500')
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  // Pricing based on credit selection
  const getStarterPrice = () => {
    if (annualBilling) {
      return starterCredits === '1,200'
        ? Math.round(69 * 12 * 0.9) // 10% discount for annual billing
        : Math.round(99 * 12 * 0.9)
    } else {
      return starterCredits === '1,200' ? 69 : 99
    }
  }

  const getProPrice = () => {
    if (annualBilling) {
      return proCredits === '7,500'
        ? Math.round(349 * 12 * 0.9) // 10% discount for annual billing
        : Math.round(499 * 12 * 0.9)
    } else {
      return proCredits === '7,500' ? 349 : 499
    }
  }

  const getFreeCreditText = () => {
    return annualBilling ? '3,000 yearly credits' : '250 monthly credits'
  }

  const getStarterCreditText = () => {
    const monthlyCredits = parseInt(starterCredits.replace(',', ''))
    return annualBilling
      ? `${(monthlyCredits * 12).toLocaleString()} yearly credits`
      : `${starterCredits} monthly credits`
  }

  const getProCreditText = () => {
    const monthlyCredits = parseInt(proCredits.replace(',', ''))
    return annualBilling
      ? `${(monthlyCredits * 12).toLocaleString()} yearly credits`
      : `${proCredits} monthly credits`
  }

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="max-w-7xl mx-auto xl:px-0">
      {/* Pricing Header */}
      <div className="text-center mb-12 pt-16 pb-10">
        <h2 className="text-lg font-semibold mb-4 text-gray-600 uppercase tracking-wide">
          {t('pricing.tagline')}
        </h2>
        <h1 className="text-5xl font-bold mb-6">
          {t('pricing.headline')}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {t('pricing.description')}
        </p>
      </div>

      {/* Pricing Card */}
      <div className="block px-4 md:px-0 lg:hidden space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 px-6">
          <span className="font-semibold text-center md:text-left w-full md:w-auto mb-4 md:mb-0">
            {t('pricing.comparePlans')}
          </span>
          <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
            <div className="flex items-center justify-center w-full md:justify-start gap-2">
              <span className="text-sm text-gray-600">Pay monthly</span>
              <label className="relative inline-flex items-center cursor-pointer mx-2">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={annualBilling}
                  onChange={() => setAnnualBilling(!annualBilling)}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <span className="text-sm text-gray-600">
                Pay annually - 10% discount & all credits upfront
              </span>
            </div>
          </div>
        </div>

        <div className="border block lg:hidden border-gray-200 rounded-lg p-6 max-w-3xl mx-auto">
          {/* Plan Label */}
          <div className="flex justify-center mb-4">
            <span className="bg-gray-100 text-sm font-semibold px-4 py-1 rounded-full">
              FREE
            </span>
          </div>

          {/* Price */}
          <div className="text-center mb-2">
            <div className="text-4xl font-bold">
              $0
              <span className="text-sm font-normal">
                {annualBilling ? '/year' : '/month'}
              </span>
            </div>
          </div>

          {/* Billing Info */}
          <div className="text-center text-sm text-gray-600 mb-6">
            {getFreeCreditText()}
          </div>

          {/* Credit Selection */}
          <div className="relative mb-4">
            <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white">
              <option>
                {annualBilling ? '3,000 credits/year' : '250 credits/month'}
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-black text-white rounded-lg py-3 font-semibold mb-8">
            <a 
              href="https://calendly.com/juergen-touchstage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              {t('pricing.getStarted')}
            </a>
          </button>

          {/* Features List */}
          <div>
            <div className="divide-y divide-black/10">
              <div className="grid grid-cols-2 gap-y-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">{t('pricing.feature1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">{t('pricing.feature2')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Exporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">AI / Claygent</span>
                </div>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 pb-4 border-b border-black/10 w-1/2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Rollover credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border  bg-[#d7ebfe] block lg:hidden border-gray-200 rounded-lg p-6 max-w-3xl mx-auto">
          {/* Plan Label */}
          <div className="flex justify-center mb-4">
            <span className="bg-gray-100 text-sm font-semibold px-4 py-1 rounded-full">
              STARTER
            </span>
          </div>

          {/* Price */}
          <div className="text-center mb-2">
            <div className="text-4xl font-bold">
              ${getStarterPrice()}
              <span className="text-sm font-normal">
                {annualBilling ? '/year' : '/month'}
              </span>
            </div>
          </div>

          {/* Billing Info */}
          <div className="text-center text-sm text-gray-600 mb-6">
            {getStarterCreditText()}
          </div>

          {/* Credit Selection */}
          <div className="relative mb-4">
            <select
              className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white"
              onChange={(e) => setStarterCredits(e.target.value)}
              value={starterCredits}
            >
              <option value="1,200">
                {annualBilling ? '14,400 credits/year' : '1,200 credits/month'}
              </option>
              <option value="2,400">
                {annualBilling ? '28,800 credits/year' : '2,400 credits/month'}
              </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-black text-white rounded-lg py-3 font-semibold mb-8">
            <a 
              href="https://calendly.com/juergen-touchstage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              {t('pricing.getStarted')}
            </a>
          </button>

          {/* Features List */}
          <div>
            <div className="divide-y divide-black/10">
              <div className="grid grid-cols-2 gap-y-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Unlimited users</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Up to 100/search</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Exporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">AI / Claygent</span>
                </div>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 pb-4 border-b border-black/10 w-1/2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Rollover credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border block bg-[#f8cc65] lg:hidden border-gray-200 rounded-lg p-6 max-w-3xl mx-auto">
          {/* Plan Label */}
          <div className="flex justify-center mb-4">
            <span className="bg-gray-100 text-sm font-semibold px-4 py-1 rounded-full">
              PRO
            </span>
          </div>

          {/* Price */}
          <div className="text-center mb-2">
            <div className="text-4xl font-bold">
              ${getProPrice()}
              <span className="text-sm font-normal">
                {annualBilling ? '/year' : '/month'}
              </span>
            </div>
          </div>

          {/* Billing Info */}
          <div className="text-center text-sm text-gray-600 mb-6">
            {getProCreditText()}
          </div>

          {/* Credit Selection */}
          <div className="relative mb-4">
            <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white"
              onChange={(e) => setProCredits(e.target.value)}
              value={proCredits}
            >
              <option value="7,500">
                  {annualBilling
                    ? '90,000 credits/year'
                    : '7,500 credits/month'}
                </option>
                <option value="10,000">
                  {annualBilling
                    ? '120,000 credits/year'
                    : '10,000 credits/month'}
                </option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-black text-white rounded-lg py-3 font-semibold mb-8">
            <a 
              href="https://calendly.com/juergen-touchstage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              {t('pricing.getStarted')}
            </a>
          </button>

          {/* Features List */}
          <div>
            <div className="divide-y divide-black/10">
              <div className="grid grid-cols-2 gap-y-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Unlimited users</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Up to 100/search</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Exporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">AI / Claygent</span>
                </div>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 pb-4 border-b border-black/10 w-1/2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="black" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Rollover credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border block  bg-[#001e4b] lg:hidden border-gray-200 rounded-lg p-6 max-w-3xl mx-auto">
          {/* Plan Label */}
          <div className="flex justify-center mb-4">
            <span className="bg-gray-100 text-sm font-semibold px-4 py-1 rounded-full">
              ENTERPRISE
            </span>
          </div>

          {/* Price */}
          <div className="text-center mb-2">
            <div className="text-4xl text-white font-bold">
              Talk to us
            </div>
          </div>

          {/* Billing Info */}
          <div className="text-center text-sm text-white mb-6">
            {annualBilling ? 'From $52,920/year' : 'From $4,900/month'}
          </div>

          {/* Credit Selection */}
          <div className="relative mb-6"></div>

          {/* CTA Button */}

          <button className="bg-white text-black rounded-full py-2 px-4 text-sm font-semibold w-full">
            Contact sales
          </button>

          {/* Features List */}
          <div>
            <div className="divide-y text-white divide-white/10">
              <div className="grid grid-cols-2 gap-y-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="white" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Unlimited users</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="white" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Up to 100/search</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-4 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="white" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Exporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="white" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">AI / Claygent</span>
                </div>
              </div>

              <div className="py-4">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10 w-1/2">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="white" />
                    <path
                      d="M8 12L11 15L16 9"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm">Rollover credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="bg-[#f5f4ef] pt-4 border border-gray-200 hidden lg:block">
        <div className="flex justify-between items-center mb-10 px-6">
          <span className="font-semibold">Compare our plans</span>
          <div className="flex items-center gap-2">
            <span className="text-sm">Pay monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={annualBilling}
                onChange={() => setAnnualBilling(!annualBilling)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className="text-sm">
              Pay annually - 10% discount & all credits upfront
            </span>
          </div>
        </div>

        {/* Pricing Tier Headers */}
        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-1"></div>
          <div className="bg-white p-3 text-center border-t border-x border-gray-100">
            <div className="inline-block bg-gray-100 text-sm font-semibold px-4 py-1 rounded-full">
              {t('pricing.free')}
            </div>
            <div className="border-b border-black opacity-10 mt-3"></div>
          </div>
          <div className="bg-[#f0ecff] p-3 text-center border-t border-x border-gray-100">
            <div className="inline-block bg-white text-sm font-semibold px-4 py-1 rounded-full">
              {t('pricing.starter')}
            </div>
            <div className="border-b border-black opacity-10 mt-3"></div>
          </div>
          <div className="relative">
            <div className="absolute -top-5 left-0 right-0 bg-[#a76214] text-white text-center py-1 text-xs font-medium shadow-md">
              {t('pricing.mostPopular')}
            </div>
            <div className="bg-[#f8c056] p-3 pt-3 text-center border-t border-x border-gray-100">
              <div className="inline-block bg-white text-sm font-semibold px-4 py-1 rounded-full">
                {t('pricing.pro')}
              </div>
              <div className="border-b border-black opacity-10 mt-3"></div>
            </div>
          </div>
          <div className="bg-[#001c46] p-3 text-center text-white border-t border-x border-gray-800">
            <div className="inline-block bg-white text-sm font-semibold px-4 py-1 rounded-full text-black">
              {t('pricing.enterprise')}
            </div>
            <div className="border-b border-white opacity-10 mt-3"></div>
          </div>
        </div>

        {/* Price Row */}
        <div className="grid grid-cols-5 gap-0">
          <div className="col-span-1 px-6 flex items-end mb-4 justify-center">
            <a 
              href="https://calendly.com/juergen-touchstage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white btn-primary w-full py-2 px-6 text-sm font-semibold"
            >
              Try Percy for free
            </a>
          </div>
          <div className="bg-white p-5 text-center border-x border-gray-100 flex flex-col h-48">
            <div className="text-3xl font-bold mb-1">
              $0
              <span className="text-sm font-normal">
                {annualBilling ? '/year' : '/month'}
              </span>
            </div>
            <div className="text-xs text-gray-500 mb-3">
              {getFreeCreditText()}
            </div>

            <div className="relative mt-auto">
              <select className="w-full p-2 border appearance-none text-sm bg-white">
                <option>
                  {annualBilling ? '3,000 credits/year' : '250 credits/month'}
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#f0ecff] p-5 text-center border-x border-gray-100 flex flex-col h-48">
            <div className="text-3xl font-bold mb-1">
              ${getStarterPrice()}
              <span className="text-sm font-normal">
                {annualBilling ? '/year' : '/month'}
              </span>
            </div>
            <div className="text-xs text-gray-500 mb-3">
              {getStarterCreditText()}
            </div>

            <div className="relative mt-auto">
              <select
                className="w-full p-2 border appearance-none text-sm bg-white"
                onChange={(e) => setStarterCredits(e.target.value)}
                value={starterCredits}
              >
                <option value="1,200">
                  {annualBilling
                    ? '14,400 credits/year'
                    : '1,200 credits/month'}
                </option>
                <option value="2,400">
                  {annualBilling
                    ? '28,800 credits/year'
                    : '2,400 credits/month'}
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#f8c056] p-5 text-center border-x border-gray-100 flex flex-col h-48">
            <div className="text-3xl font-bold mb-1">
              ${getProPrice()}
              <span className="text-sm font-normal">
                {annualBilling ? '/year' : '/month'}
              </span>
            </div>
            <div className="text-xs text-gray-700 mb-3">
              {getProCreditText()}
            </div>

            <div className="relative mt-auto">
              <select
                className="w-full p-2 border appearance-none text-sm bg-white"
                onChange={(e) => setProCredits(e.target.value)}
                value={proCredits}
              >
                <option value="7,500">
                  {annualBilling
                    ? '90,000 credits/year'
                    : '7,500 credits/month'}
                </option>
                <option value="10,000">
                  {annualBilling
                    ? '120,000 credits/year'
                    : '10,000 credits/month'}
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#001c46] p-5 text-center text-white border-x border-gray-800 flex flex-col h-48">
            <div className="text-3xl font-bold mb-1">Talk to us</div>
            <div className="text-xs opacity-70 mb-3">
              {annualBilling ? 'From $52,920/year' : 'From $4,900/month'}
            </div>

            <div className="mt-auto">
              <button className="bg-white text-black rounded-full py-2 px-4 text-sm font-semibold w-full">
                Contact sales
              </button>
            </div>
          </div>
        </div>
        <div>
        </div>

        {/* Feature Table */}
        <div>
          {/* Percy Credits Row */}
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="bg-white text-black p-3 pl-6 font-medium text-sm">
              {t('pricing.percyCredits')}
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              250/mo
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              1,200/mo - 2,400/mo
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              7,500/mo - 10,000/mo
            </div>
            <div className="bg-white p-3 text-center text-sm">
              60,000/mo - 100,000/mo
            </div>
          </div>

          {/* Additional Credit Cost Row */}
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="bg-white text-black p-3 pl-6 font-medium text-sm">
              {t('pricing.additionalCreditCost')}
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              $0.10/credit
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              $0.09/credit
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              $0.08/credit
            </div>
            <div className="bg-white p-3 text-center text-sm">$0.06/credit</div>
          </div>

          {/* Support Level Row */}
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="bg-white text-black p-3 pl-6 font-medium text-sm">
              {t('pricing.supportLevel')}
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              {t('pricing.basic')}
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              {t('pricing.standard')}
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              {t('pricing.priority')}
            </div>
            <div className="bg-white p-3 text-center text-sm">
              {t('pricing.dedicated')}
            </div>
          </div>

          {/* Branding Row */}
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="bg-white text-black p-3 pl-6 font-medium text-sm">
              {t('pricing.branding')}
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              {t('pricing.percy')}
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              {t('pricing.custom')}
            </div>
            <div className="bg-white p-3 text-center border-r border-gray-200 text-sm">
              {t('pricing.custom')}
            </div>
            <div className="bg-white p-3 text-center text-sm">
              {t('pricing.custom')}
            </div>
          </div>

          {/* Feature Influence Row */}
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="bg-white text-black p-3 pl-6 font-medium text-sm">
              {t('pricing.featureInfluence')}
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="black" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Customized Workflow Row */}
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="bg-white text-black p-3 pl-6 font-medium text-sm">
              {t('pricing.customizedWorkflow')}
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="black" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Beta Feature Access Row */}
          <div className="grid grid-cols-5 border-b border-gray-200">
            <div className="bg-white text-black p-3 pl-6 font-medium text-sm">
              {t('pricing.betaFeatureAccess')}
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="black" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Flexible Exit Row */}
          <div className="grid grid-cols-5">
            <div className="bg-white text-black p-3 pl-6 font-medium text-sm">
              {t('pricing.flexibleExit')}
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="black" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="black" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 flex justify-center items-center border-r border-gray-200">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" fill="black" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-white p-3 text-center text-sm">
              {t('pricing.contractBased')}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-center text-[#6B7280] text-sm font-medium uppercase tracking-wider mb-2">
            {t('faq.heading')}
          </h3>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1E293B] leading-relaxed">
            {t('faq.subheading')}
          </h2>

          <div className="space-y-6">
            {/* Featured Questions */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg">
              <div className="flex flex-col">
                <div className="text-gray-700 mb-4 flex justify-center">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">
                    {t('faq.question1')}
                  </h3>
                  <p className="text-gray-600">
                    {t('faq.answer1')}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <div className="flex flex-col">
                  <div className="text-gray-700 mb-4 flex justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 text-center">
                      {t('faq.question2')}
                    </h3>
                    <p className="text-gray-600">
                      {t('faq.answer2')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F5F5] p-6 rounded-lg">
                <div className="flex flex-col">
                  <div className="text-gray-700 mb-4 flex justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900 text-center">
                      {t('faq.question3')}
                    </h3>
                    <p className="text-gray-600">
                      {t('faq.answer3')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expandable Questions */}
            <div className="mt-8">
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-3">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-semibold">
                      {t('faq.question4')}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openAccordion === 0 ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {openAccordion === 0 && (
                  <div className="pb-4 pl-10 pr-4 text-gray-600">
                    {t('faq.answer4')}
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-3">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-semibold">
                      {t('faq.question5')}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openAccordion === 1 ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {openAccordion === 1 && (
                  <div className="pb-4 pl-10 pr-4 text-gray-600">
                    {t('faq.answer5')}
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-3">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-semibold">
                      {t('faq.question6')}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openAccordion === 2 ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {openAccordion === 2 && (
                  <div className="pb-4 pl-10 pr-4 text-gray-600">
                    {t('faq.answer6')}
                  </div>
                )}
              </div>

              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(3)}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <div className="flex items-center">
                    <span className="text-gray-700 mr-3">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-semibold">
                      {t('faq.question7')}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      openAccordion === 3 ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                {openAccordion === 3 && (
                  <div className="pb-4 pl-10 pr-4 text-gray-600">
                    {t('faq.answer7')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingSection
