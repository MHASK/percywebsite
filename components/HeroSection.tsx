"use client";
import { useEffect, useRef } from 'react';
import 'plyr/dist/plyr.css';
import { useLanguage } from '../contexts/LanguageContext';
import type Plyr from 'plyr';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstance = useRef<Plyr | null>(null);
  
  // Extract video ID from the YouTube URL
  const getVideoId = (url: string | undefined | null) => {
    if (!url || typeof url !== 'string') return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Use the correct translation key for the video URL
  const videoUrl = t('hero.videoUrl');
  const videoId = getVideoId(videoUrl);

  useEffect(() => {
    // Cleanup existing player
    if (playerInstance.current) {
      playerInstance.current.destroy();
      playerInstance.current = null;
    }

    // Create new player container
    if (playerRef.current) {
      playerRef.current.innerHTML = '';
      const newPlayerDiv = document.createElement('div');
      newPlayerDiv.id = 'player';
      newPlayerDiv.setAttribute('data-plyr-provider', 'youtube');
      newPlayerDiv.setAttribute('data-plyr-embed-id', videoId || '');
      playerRef.current.appendChild(newPlayerDiv);

      // Initialize new player
      import('plyr').then((module) => {
        const Plyr = module.default;
        playerInstance.current = new Plyr('#player', {
          muted: true,
          autoplay: true,
          controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
        });
      });
    }

    return () => {
      if (playerInstance.current) {
        playerInstance.current.destroy();
        playerInstance.current = null;
      }
    };
  }, [language, videoId]);

  return (
    <section className="text-center max-w-6xl mx-auto pt-16 pb-8 px-4 xl:px-0">
      {/* Tag line */}
      <div className="mb-4">
        <p className="text-xl font-[600]">{t('hero.tagline')}</p>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl font-[1000] sm:text-6xl mb-6 leading-tight">
        {t('hero.headline')}
      </h1>
      
      {/* Subheadline */}
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        {t('hero.subheadline')}
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12 lg:mb-25">
        <a 
          href="https://calendly.com/juergen-touchstage" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {t('hero.tryPercy')}
        </a>
        <a 
          href="https://calendly.com/juergen-touchstage" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-secondary"
        >
          {t('hero.bookDemo')}
        </a>
      </div>
      
      {/* Plyr YouTube Video Embed */}
      <div className="w-full max-w-none rounded-3xl overflow-hidden shadow-lg mb-16 mt-2">
        <div className="relative w-full aspect-[16/9] bg-black p-0 rounded-xl" ref={playerRef} />
        {/* Show fallback if videoId is missing */}
        {(!videoId || videoId === '') && (
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black/80">
            <span>Video unavailable</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection; 