import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from "../contexts/LanguageContext";
import Script from 'next/script'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Percy - AI-Powered Product Tours & User Onboarding Platform',
  description: 'Transform your SaaS onboarding with Percy\'s AI-powered product tours, interactive walkthroughs, and in-app guidance. Reduce churn, boost activation, and eliminate support tickets without engineering time.',
  keywords: [
    // Top Priority Keywords
    'user onboarding software',
    'product tour tool',
    'digital adoption platform',
    'in-app guidance software',
    'AI onboarding tool',
    'user onboarding automation',
    'SaaS onboarding solution',
    'interactive product walkthrough',
    'onboarding with GPT',
    'AI product onboarding',
    'AI co-pilot for apps',
    'product-led onboarding',
    'AI help widget',
    'AI onboarding vs traditional DAP',
    'reduce onboarding friction in SaaS',
    "why product tours don't work",
    "onboarding tools that don't break with UI changes",
    "onboarding maintenance is killing engineering time",
    'alternatives to WalkMe',
    'alternatives to Pendo',
    'alternatives to Appcues',
    'alternatives to Whatfix',
    'how to boost user activation with fewer dev hours',
    'reduce support tickets with in-app guidance',
    'AI for SaaS onboarding and support',
    'best tools for product-led growth',
    'self-healing onboarding guides',
    'Percy vs WalkMe',
    'Percy vs Pendo',
    'Percy vs Appcues',
    'Percy vs Whatfix',
    'WalkMe alternative',
    'Pendo alternative',
    'Appcues alternative',
    'Whatfix alternative',
    'What is AI-powered onboarding?',
    'Do I need a digital adoption platform for my SaaS?',
    'How to reduce churn during onboarding?',
    'How to automate in-app help?',
    '2025 Product Onboarding Trends',
    'AI Co-Pilots in SaaS',
    'Product Onboarding Trends',
    'AI onboarding better than Appcues?',
    'Best Digital Adoption Platforms',
    'Best AI Onboarding Tools',
    'Percy',
    'Percy app',
    'percyapp.com',
    // Additional Feature Keywords
    'no-code onboarding builder',
    'self-healing product tours',
    'onboarding checklists',
    'user segmentation for onboarding',
    'A/B testing onboarding flows',
    'onboarding analytics',
    'session replays for onboarding',
    'multi-language onboarding',
    'in-app surveys and NPS',
    'resource center for SaaS',
    'product-led growth tools',
    'user adoption metrics',
    'digital adoption for enterprise',
    'onboarding for complex apps',
    'contextual in-app guidance',
    'reduce technical debt in onboarding',
    'ROI of digital adoption',
    'customer onboarding automation'
  ],
  openGraph: {
    title: 'Percy - AI-Powered Product Tours & User Onboarding Platform',
    description: 'Transform your SaaS onboarding with Percy\'s AI-powered product tours, interactive walkthroughs, and in-app guidance. Reduce churn, boost activation, and eliminate support tickets without engineering time.',
    url: 'https://percyapp.com',
    siteName: 'Percy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Percy Product Tours',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Percy - AI-Powered Product Tours & User Onboarding Platform',
    description: 'Transform your SaaS onboarding with Percy\'s AI-powered product tours, interactive walkthroughs, and in-app guidance. Reduce churn, boost activation, and eliminate support tickets without engineering time.',
    images: ['/og-image.png'],
    creator: '@percyapp',
  },
  alternates: {
    canonical: 'https://percyapp.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-0W4Y2FMJYH" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0W4Y2FMJYH');
          `}
        </Script>
        
        <Script id="intercom-settings" strategy="afterInteractive">
          {`
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "jrd66iqe",
            };
          `}
        </Script>
        <Script id="intercom-widget" strategy="afterInteractive">
          {`
            (function(){
              var w=window;var ic=w.Intercom;
              if(typeof ic==="function"){
                ic('reattach_activator');ic('update',w.intercomSettings);
              }else{
                var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;
                var l=function(){
                  var s=d.createElement('script');
                  s.type='text/javascript';s.async=true;
                  s.src='https://widget.intercom.io/widget/jrd66iqe';
                  var x=d.getElementsByTagName('script')[0];
                  x.parentNode.insertBefore(s,x);
                };
                if(document.readyState==='complete'){l();}
                else if(w.attachEvent){w.attachEvent('onload',l);}
                else{w.addEventListener('load',l,false);}
              }
            })();
          `}
        </Script>
        
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/percy_logo2.png" type="image/png" />
        <link rel="apple-touch-icon" href="/percy_logo2.png" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght@400;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Percy",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered product tours and user onboarding platform that helps SaaS companies reduce churn, boost activation, and eliminate support tickets without engineering time.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "120"
              },
              "featureList": "AI product tours, interactive walkthroughs, onboarding checklists, user segmentation, in-app guidance, contextual help, onboarding analytics"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is AI-powered onboarding?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AI-powered onboarding uses machine learning to create personalized product tours and user guidance that adapts to each user's behavior, role, and needs. Percy's AI technology helps SaaS companies deliver contextual onboarding experiences that increase activation and reduce support costs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Percy compare to other digital adoption platforms?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike traditional DAPs like WalkMe or Pendo that require significant implementation resources, Percy offers a lightweight, no-code solution with AI-powered features that doesn't break when your UI changes. Percy focuses on reducing engineering time while providing superior user experiences through contextual guidance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can Percy help reduce support tickets?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Percy reduces support tickets by providing contextual in-app guidance, interactive product tours, and self-service help resources exactly when users need them. Our AI technology anticipates user questions and provides answers before they need to contact support, resulting in up to 60% fewer onboarding-related tickets."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${manrope.className} antialiased min-h-screen`}
      >
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
