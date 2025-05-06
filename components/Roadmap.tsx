'use client'

import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

const Roadmap = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 xl:px-0 py-12">
      {/* Header Section */}
      <div className="text-center pb-16 mb-16">
        {/* <div className="flex justify-center mb-4">
          <span className="bg-gray-100 text-gray-600 text-sm px-4 py-1 rounded-full inline-block">
            Changelog
          </span>
        </div> */}
        <h1 className="inline-block w-fit rounded-[13px] border border-black/10 bg-primary px-3 py-1.5 text-[13px]/[1.4em] font-medium text-secondary">
          {t('changelog.title')}
        </h1>
        <h1 className="text-6xl text-center font-bold lg:mt-6 mt-4 mb-4">
          {t('changelog.headline')}
        </h1>
        <p className="mt-4 max-w-xl text-xl mx-auto text-secondary">
          {t('changelog.description')}
        </p>

        {/* Email Subscription Form */}
        <div className="max-w-xs mt-8 mx-auto space-y-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button className="w-full bg-black text-white rounded-lg py-3 font-semibold">
            {t('changelog.subscribe')}
          </button>
        </div>
      </div>

      {/* Roadmap Entry 4 - Coming Soon (Now First) */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 mb-16">
        <div className="hidden md:block">
          <span className="text-gray-500 text-sm">May 4, 2025</span>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
              {t('changelog.tag.comingSoon')}
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            {t('changelog.entry4.title')}
          </h2>

          <div className="block md:hidden mb-4">
            <span className="text-gray-500 text-sm">May 4, 2025</span>
          </div>

          <div className="text-gray-600 space-y-4">
            <p>
              {t('changelog.entry4.desc')}
            </p>

            <div className="space-y-3">
              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry4.feature1.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry4.feature1.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry4.feature2.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry4.feature2.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry4.feature3.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry4.feature3.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry4.feature4.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry4.feature4.desc')}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100 text-center text-gray-500">
            <p>Coming in Q3 2025</p>
          </div>
        </div>
      </div>

      {/* Roadmap Entry 1 */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 mb-16">
        <div className="hidden md:block">
          <span className="text-gray-500 text-sm">April 28, 2025</span>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#5666A2]"></div>
              <span className="text-sm font-medium">{t('changelog.tag.newFeature')}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
              <span className="text-sm font-medium">{t('changelog.tag.ai')}</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            {t('changelog.entry1.title')}
          </h2>

          <div className="block md:hidden mb-4">
            <span className="text-gray-500 text-sm">April 28, 2025</span>
          </div>

          {/* Description */}
          <div className="text-gray-600 space-y-4">
            <p>
              {t('changelog.entry1.desc')}
            </p>

            <div className="space-y-3">
              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry1.feature1.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry1.feature1.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry1.feature2.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry1.feature2.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry1.feature3.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry1.feature3.desc')}
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="mt-6 rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <Image 
              src="/ai-chat-interface.png" 
              alt="AI Chat Interface" 
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Roadmap Entry 2 */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 mb-16">
        <div className="hidden md:block">
          <span className="text-gray-500 text-sm">April 15, 2025</span>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#8741E1]"></div>
              <span className="text-sm font-medium">Enhancement</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
              <span className="text-sm font-medium">User Experience</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            {t('changelog.entry2.title')}
          </h2>

          <div className="block md:hidden mb-4">
            <span className="text-gray-500 text-sm">April 15, 2025</span>
          </div>

          <div className="text-gray-600 space-y-4">
            <p>
              {t('changelog.entry2.desc')}
            </p>

            <div className="space-y-3">
              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry2.feature1.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry2.feature1.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry2.feature2.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry2.feature2.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry2.feature3.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry2.feature3.desc')}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <Image 
              src="/Spotlight_search.png" 
              alt="Spotlight Search Feature" 
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Roadmap Entry 3 */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 mb-16">
        <div className="hidden md:block">
          <span className="text-gray-500 text-sm">April 1, 2025</span>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
              <span className="text-sm font-medium">Feature</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#EF4444]"></div>
              <span className="text-sm font-medium">Developer Tools</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            {t('changelog.entry3.title')}
          </h2>

          <div className="block md:hidden mb-4">
            <span className="text-gray-500 text-sm">April 1, 2025</span>
          </div>

          <div className="text-gray-600 space-y-4">
            <p>
              {t('changelog.entry3.desc')}
            </p>

            <div className="space-y-3">
              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry3.feature1.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry3.feature1.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry3.feature2.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry3.feature2.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry3.feature3.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry3.feature3.desc')}
                </span>
              </div>

              <div>
                <span className="text-gray-900 font-medium">
                  {t('changelog.entry3.feature4.title')}{' '}
                </span>
                <span>
                  {t('changelog.entry3.feature4.desc')}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-4">
            {t('changelog.entry3.checkOut')} <a href="#" className="text-[#5666A2] hover:underline">{t('changelog.entry3.devPortal')}</a> {t('changelog.entry3.forMore')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
