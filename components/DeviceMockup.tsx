"use client";
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import { useLanguage } from '@/contexts/LanguageContext'

const DeviceMockup = () => {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght@400;700&display=swap" rel="stylesheet" />
        <style>{`.material-symbols-rounded { font-family: 'Material Symbols Rounded'; font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48; font-size: 2.5rem; display: flex; align-items: center; justify-content: center; }`}</style>
      </Head>
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="text-center mb-20">
            <div className="mb-4">
              <p className="text-sm uppercase tracking-wider font-semibold text-[#5666A2]">
                {t('features.tagline')}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              {t('features.headline')}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('features.subheadline')}
            </p>
          </div>

          {/* Main Feature Box */}
          <div className="rounded-2xl p-6 sm:p-8 lg:p-12 mb-20 bg-white shadow-sm border border-gray-200 w-full max-w-none">
            <div className="md:flex items-center">
              {/* Left content */}
              <div className="mb-10 md:mb-0 md:w-1/2 space-y-4 md:pr-8">
                <p className="text-sm uppercase tracking-wider font-semibold text-[#5666A2]">
                  {t('productTours.tagline')}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                  {t('productTours.headline')}
                </h2>
                <p className="text-lg text-[#5666A2] leading-relaxed">
                  {t('productTours.subheadline')}
                </p>
              </div>

              {/* Right content */}
              <div className="md:w-1/2 flex justify-end">
                <div className="w-full md:w-[110%] relative aspect-[16/12] rounded-xl overflow-hidden">
                  <Image
                    src="/productUImockup.png"
                    alt="Product UI Mockup"
                    fill
                    className="object-contain object-right"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-20">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-16 h-16 bg-[#A4F0FB] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-black text-4xl">support_agent</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 leading-snug text-gray-900">
                {t('feature1.title')}
              </h3>
              <p className="text-sm text-gray-600 leading-normal">
                {t('feature1.description')}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-16 h-16 bg-[#F8EAB1] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-black text-4xl">sentiment_satisfied</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 leading-snug text-gray-900">
                {t('feature2.title')}
              </h3>
              <p className="text-sm text-gray-600 leading-normal">
                {t('feature2.description')}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="w-16 h-16 bg-[#FBE2E8] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-black text-4xl">bar_chart</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 leading-snug text-gray-900">
                {t('feature3.title')}
              </h3>
              <p className="text-sm text-gray-600 leading-normal">
                {t('feature3.description')}
              </p>
            </div>
          </div>

          {/* AI Answers Section */}
          <div className="rounded-2xl p-6 sm:p-8 lg:p-12 mb-20 overflow-hidden bg-white shadow-sm border border-gray-200 w-full max-w-none">
            <div className="md:flex items-center">
              <div className="mb-10 md:mb-0 md:w-1/2 space-y-4 md:pr-8">
                <p className="text-sm uppercase tracking-wider font-semibold text-[#5666A2]">
                  {t('contextualHelp.tagline')}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-4">
                  {t('contextualHelp.headline')}
                </h2>
                <p className="text-lg text-[#5666A2] leading-relaxed">
                  {t('contextualHelp.subheadline')}
                </p>
              </div>

              <div className="md:w-1/2 flex justify-end">
                <div className="w-full md:w-[110%] relative aspect-[16/12] rounded-xl overflow-hidden">
                  <Image
                    src="/ai-chat-interface.png"
                    alt="Ai Chat Interface"
                    fill
                    className="object-contain object-right"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Make everything count section */}
          <div className="mb-20 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#FBD4A4] rounded-full flex items-center justify-center">
                <span className="text-amber-700">
                  <Image
                    src="/poll.svg"
                    alt="Poll icon"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm uppercase tracking-wider font-semibold text-[#5666A2] mb-4">
                {t('userInsights.tagline')}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-4">
                {t('userInsights.headline')}
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                {t('userInsights.subheadline')}
              </p>
            </div>

            {/* Image placeholder for survey interface */}
            <div className="w-full mx-auto relative rounded-xl overflow-hidden bg-[#F3FAEC] p-4 shadow-sm border border-gray-100 mb-8">
              <div className="aspect-[16/6] w-full relative">
                <Image
                  src="/survey_feedback.png"
                  alt="Survey & Feedback Interface"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Ask feedbacks section */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl p-8 lg:p-12 overflow-hidden shadow-sm border border-gray-200 w-full max-w-none">
              <div className="md:flex items-center gap-10">
                {/* Left: Text */}
                <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:pr-8 mb-10 md:mb-0">
                  <span className="text-sm uppercase tracking-wider font-semibold text-[#5666A2] mb-4">
                    {t('userFeedback.tagline')}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                    {t('userFeedback.headline')}
                  </h2>
                  <p className="text-lg text-[#5666A2] leading-relaxed max-w-xl mx-auto md:mx-0">
                    {t('userFeedback.subheadline')}
                </p>
              </div>

                {/* Right: NPS Score & Avatars */}
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <div className="relative aspect-square w-full max-w-[400px] mx-auto">
                    {/* Central NPS score */}
                    <div className="bg-white rounded-full border border-gray-200 flex flex-col items-center justify-center w-48 h-48 md:w-56 md:h-56 shadow-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <span className="text-4xl mb-2">😃</span>
                      <span className="text-3xl md:text-4xl font-bold mb-1 text-black">
                        {t('userFeedback.nps')}
                    </span>
                      <span className="text-[#5666A2] font-medium text-base md:text-lg">NPS score</span>
                  </div>

                    {/* User avatars, positioned around the NPS score */}
                  <Image
                    src="/user_1.png"
                    alt="User 1"
                      width={80}
                      height={80}
                      className="rounded-full absolute left-0 top-10 border-4 border-white shadow-md"
                  />
                  <Image
                    src="/user_2.png"
                    alt="User 2"
                      width={80}
                      height={80}
                      className="rounded-full absolute right-0 top-16 border-4 border-white shadow-md"
                  />
                  <Image
                    src="/user_3.png"
                    alt="User 3"
                      width={70}
                      height={70}
                      className="rounded-full absolute left-12 bottom-10 border-4 border-white shadow-md"
                  />
                  <Image
                    src="/user_4.png"
                    alt="User 4"
                      width={80}
                      height={80}
                      className="rounded-full absolute right-12 bottom-0 border-4 border-white shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Announce & Nudge section */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row mb-12 md:mb-16 justify-between items-start md:items-center gap-8 md:gap-16">
              <div className="md:w-1/3">
                <p className="text-sm uppercase tracking-wider font-semibold text-[#5666A2] mb-3">
                  {t('featureAnnouncements.tagline')}
                </p>
                <h3 className="text-3xl font-bold leading-tight text-gray-900">
                  {t('featureAnnouncements.headline')}
                </h3>
              </div>

              {/* Image placeholder for flow diagram - FIXED VERSION */}
              <div className="flex justify-center md:justify-end md:w-2/3">
                <div className="relative w-full max-w-[500px]">
                  {/* SVG Flow Arrows */}
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* First Arc - Show'em to Nudge'em */}
                    <path 
                      d="M120 80 Q180 10, 250 80" 
                      stroke="url(#blue-gradient)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Second Arc - Nudge'em to Guide'em */}
                    <path 
                      d="M250 130 Q330 200, 400 130" 
                      stroke="url(#purple-gradient)" 
                      strokeWidth="3" 
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A4BBFB" />
                        <stop offset="100%" stopColor="#A4F0FB" />
                      </linearGradient>
                      <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A4F0FB" />
                        <stop offset="100%" stopColor="#C1A4FB" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {/* Show'em button */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 bg-[#A4BBFB] text-black px-4 py-3 rounded-full shadow-sm">
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </div>
                        <span className="font-semibold text-base">
                          {t('flowDiagram.button1')}
                        </span>
                      </div>
                    </div>

                    {/* Nudge'em button */}
                    <div className="relative z-10 mt-4 md:mt-0">
                      <div className="flex items-center gap-2 bg-[#A4F0FB] text-black px-4 py-3 rounded-full shadow-sm">
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13"></path>
                            <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                          </svg>
                  </div>
                        <span className="font-semibold text-base">
                          {t('flowDiagram.button2')}
                        </span>
                      </div>
                    </div>

                    {/* Guide'em button */}
                    <div className="relative z-10 mt-4 md:mt-0">
                      <div className="flex items-center gap-2 bg-[#C1A4FB] text-black px-4 py-3 rounded-full shadow-sm">
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                  </div>
                        <span className="font-semibold text-base">
                          {t('flowDiagram.button3')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image placeholder for announcement interface */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 overflow-hidden shadow-sm border border-gray-200 w-full max-w-none">
              <div className="md:flex items-center">
                <div className="w-full md:w-1/2 space-y-4 mb-10 md:mb-0 md:pr-8">
                  <p className="text-sm uppercase tracking-wider font-semibold text-[#5666A2]">
                    {t('featureAnnouncements.tagline')}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                    {t('featureAnnouncements.headline')}
                  </h3>
                  <p className="text-lg text-[#5666A2] leading-relaxed">
                    {t('featureAnnouncements.subheadline')}
                  </p>
                </div>

                <div className="md:w-1/2 flex justify-end">
                  <div className="w-full md:w-[110%] relative aspect-[16/12] rounded-xl overflow-hidden">
                    <Image
                      src="/announcement.png"
                      alt="Announcement Interface"
                      fill
                      className="object-contain object-right"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Image placeholder for product tours */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* First card */}
              <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col items-center shadow-sm border border-gray-200 min-w-[320px] h-full">
                <div className="w-full mb-6">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src="/product_tour_interface1.png"
                        alt="Product Tour Interface 1"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                <div className="w-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#82DCE9] rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-black text-4xl">explore</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 leading-snug text-gray-900">
                    {t('card1.title')}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {t('card1.description')}
                  </p>
                </div>
              </div>

              {/* Second card */}
              <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col items-center shadow-sm border border-gray-200 min-w-[320px] h-full">
                <div className="w-full mb-6">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                      src="/onboarding checklist.png"
                      alt="Onboarding Checklist"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                <div className="w-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#F999BA] rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-black text-4xl">check_box</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 leading-snug text-gray-900">
                    {t('card2.title')}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {t('card2.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Spotlight Search section */}
          <div className="bg-white rounded-2xl mb-20 overflow-hidden shadow-sm border border-gray-200 w-full max-w-none">
            {/* Interface images section */}
            <div className="relative">
              {/* Base interface image */}
              <div className="relative w-full h-[450px] md:h-[700px]">
                <Image
                  src="/under_imgage.png"
                  alt="Base interface"
                  fill
                  className="object-contain object-top"
                  priority
                />

                {/* Spotlight search overlay */}
                <div className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[600px] max-w-[95%]">
                  <Image
                    src="/Spotlight_search.png"
                    alt="Spotlight search interface"
                    width={600}
                    height={84}
                    className="w-full shadow-lg rounded-md"
                    priority
                  />
                </div>
              </div>

              {/* Content section - white background with icon above */}
              <div className="absolute bottom-0 left-0 right-0 bg-white flex flex-col items-center text-center px-4 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#9BA2FF] rounded-full flex items-center justify-center mb-6 shadow-md absolute -top-10 md:-top-12">
                  <Image
                    src="/manage_search.png"
                    alt="Search icon"
                    width={32}
                    height={32}
                    className=""
                    priority
                  />
                </div>

                <p className="text-sm uppercase tracking-wider font-semibold text-[#5666A2] mb-3">
                  {t('spotlightSearch.tagline')}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 mb-4">
                  {t('spotlightSearch.headline')}
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  {t('spotlightSearch.subheadline')}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials section - redesigned as slider */}
          <div className="mb-20 lg:mb-28">
            <div className="max-w-4xl mx-auto px-4">
              {/* Testimonial stars */}
              <div className="flex justify-center mb-5">
                <div className="flex">
                  <svg className="w-8 h-8 text-[#FF5C35]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-8 h-8 text-[#FF5C35]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-8 h-8 text-[#FF5C35]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-8 h-8 text-[#FF5C35]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-8 h-8 text-[#FF5C35]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Slider */}
              <div className="relative">
                {/* Slider content */}
                <div className="overflow-hidden">
                  <div className="flex transition-transform duration-500">
            {/* Testimonial 1 */}
                    <div className="w-full flex-shrink-0 px-4">
                      <div className="text-center">
                        <h3 className="font-bold text-xl mb-4">
                          {t('testimonial1.headline')}
                        </h3>
                        <p className="text-gray-700 font-medium text-base leading-relaxed max-w-2xl mx-auto mb-8">
                          {t('testimonial1.quote')}
                        </p>
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 rounded-full overflow-hidden mb-3">
                <Image
                              src="/Rainer-Portrait-klein.jpg"
                              alt="Mr. Rainer Wilmers"
                              width={56}
                              height={56}
                  className="object-cover"
                  priority
                />
              </div>
                          <p className="font-semibold text-base mb-1 text-gray-900">
                            {t('testimonial1.name')}
                          </p>
                          <p className="text-sm text-gray-500">
                            {t('testimonial1.title')}
                          </p>
                        </div>
              </div>
            </div>

            {/* Testimonial 2 */}
                    <div className="w-full flex-shrink-0 px-4 hidden">
                      <div className="text-center">
                        <h3 className="font-bold text-xl mb-4">
                          {t('testimonial2.headline')}
                        </h3>
                        <p className="text-gray-700 font-medium text-base leading-relaxed max-w-2xl mx-auto mb-8">
                          {t('testimonial2.quote')}
                        </p>
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 rounded-full overflow-hidden mb-3">
                <Image
                              src="/profile_1.png"
                  alt="Jurgen Thom"
                              width={56}
                              height={56}
                  className="object-cover"
                  priority
                />
              </div>
                          <p className="font-semibold text-base mb-1 text-gray-900">
                            {t('testimonial2.name')}
                          </p>
                          <p className="text-sm text-gray-500">
                            {t('testimonial2.title')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation dots */}
                <div className="flex justify-center mt-8">
                  <button className="w-3 h-3 rounded-full bg-gray-900 mx-1" aria-label="Go to slide 1"></button>
                  <button className="w-3 h-3 rounded-full bg-gray-300 mx-1" aria-label="Go to slide 2"></button>
                </div>
              </div>
            </div>
          </div>

          {/* Developer section */}
          <div className="mb-20 text-center">
            {/* Badge - bolder, no card/box */}
            <div className="inline-block bg-[#FFAA88] rounded-full px-6 py-3 mb-8 shadow-sm">
              <span className="flex items-center text-black font-bold text-base md:text-xl tracking-tight">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 md:mr-3">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                {t('developer.badge')}
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900">
              {t('developer.headline')}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('developer.subheadline')}
            </p>

            {/* CTA Button */}
            <div className="mb-16">
              <a
                href="#"
                className="inline-flex items-center bg-black text-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                {t('developer.cta')}
              </a>
            </div>

            {/* Developer image with text overlay */}
            <div className="relative max-w-5xl mx-auto my-16">
              <div className="w-full aspect-[16/5] md:aspect-[16/3] flex items-center justify-center relative rounded-full overflow-hidden">
                  <Image
                    src="/developer.png"
                    alt="Smiling developer"
                    fill
                    className="object-cover"
                    priority
                  />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-block bg-[#FFAA88] px-8 py-4 md:px-12 md:py-6 rounded-full text-black font-bold text-2xl md:text-4xl tracking-tight shadow-md">
                    {t('developer.promise')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple gradient fade to footer */}
      <div className="w-full h-32 md:h-48 gradient-fade"></div>
      <style jsx>{`
        .gradient-fade {
          background: linear-gradient(to bottom, white 0%, #18181B 100%);
        }
      `}</style>
    </>
  )
}

export default DeviceMockup
