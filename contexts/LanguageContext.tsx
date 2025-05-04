'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'de';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Navbar
    'nav.pricing': 'Pricing',
    'nav.roadmap': 'Roadmap',
    'nav.about': 'About',
    'nav.getStarted': 'Get started',
    
    // Hero Section
    'hero.tagline': 'AI that Onboards & Supports — so you don\'t have to',
    'hero.headline': 'Guide users. Cut tickets. Boost adoption.',
    'hero.subheadline': 'Percy lives in your product, showing users what to do — right when they need it.',
    'hero.tryPercy': 'Try Percy free',
    'hero.bookDemo': 'Book a demo',
    
    // Footer
    'footer.tagline': 'Every user can be a power user',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfUse': 'Terms of Use',
    'footer.copyright': '©Percy',
    
    // Language Switcher
    'languageSwitcher.en': 'English',
    'languageSwitcher.de': 'Deutsch',

    // DeviceMockup Main Sections
    'features.tagline': 'PRODUCT TOURS + USER GUIDANCE + USER FEEDBACK',
    'features.headline': 'Seamless onboarding. Smarter support. Faster adoption.',
    'features.subheadline': 'Guide users through your product with interactive tours, provide contextual help when they need it, and gather valuable feedback along the way.',
    
    // Product Tours Section
    'productTours.tagline': 'AI POWERED PRODUCT TOURS',
    'productTours.headline': 'Turn confusion into clarity — instantly.',
    'productTours.subheadline': 'Percy shows users exactly what to do, when they need it. No frustration. No waiting. Just smooth navigation and faster adoption.',
    
    // Features Grid
    'feature1.title': 'Slash support load by 60% from day one',
    'feature1.description': 'Guided onboarding clears up confusion and prevents repetitive questions',
    'feature2.title': 'Make 90% of your users smile',
    'feature2.description': 'Clear guidance leads to happier, more confident users',
    'feature3.title': 'Unlock 75% more product engagement',
    'feature3.description': 'Help users explore and use more — without handholding',
    
    // Contextual Help
    'contextualHelp.tagline': 'CONTEXTUAL HELP',
    'contextualHelp.headline': 'Built-in answers. No waiting. No tickets.',
    'contextualHelp.subheadline': 'Percy responds in real-time with contextual product knowledge — so users never hit a dead end.',
    
    // User Insights
    'userInsights.tagline': 'USER INSIGHTS & FEEDBACK',
    'userInsights.headline': 'Capture what users feel. And why.',
    'userInsights.subheadline': 'Collect actionable feedback at every step of the user journey to understand pain points, motivations, and opportunities for improvement.',
    
    // User Feedback
    'userFeedback.tagline': 'USER INSIGHTS & FEEDBACK',
    'userFeedback.headline': 'Ask when it matters. Learn what matters.',
    'userFeedback.subheadline': 'Percy triggers feedback at the perfect time, giving you real user insights — not noise.',
    'userFeedback.nps': 'NPS score',
    
    // Feature Announcements
    'featureAnnouncements.tagline': 'FEATURE ANNOUNCEMENTS',
    'featureAnnouncements.headline': 'Launch smarter. Drive adoption.',
    'featureAnnouncements.subheadline': 'Announce updates, trigger nudges, and guide users',
    'featureAnnouncements.description': 'Show what\'s new right when it\'s relevant',
    
    // Flow Diagram
    'flowDiagram.button1': 'Show\'em',
    'flowDiagram.button2': 'Nudge\'em',
    'flowDiagram.button3': 'Guide\'em',
    
    // Interactive Cards
    'card1.title': 'Interactive product tours',
    'card1.description': 'Personalized guidance based on user roles and needs for a seamless experience',
    'card2.title': 'Onboarding checklists',
    'card2.description': 'Help users get started with interactive, step-by-step onboarding checklists that drive activation and completion.',
    
    // Spotlight Search
    'spotlightSearch.tagline': 'SPOTLIGHT SEARCH',
    'spotlightSearch.headline': 'Search that feels like magic',
    'spotlightSearch.subheadline': 'Let users find the answers they need instantly with our powerful search functionality',
    
    // Testimonials
    'testimonial1.headline': 'Easy peasy lemon squeezy!',
    'testimonial1.quote': '"I love that Percy is so user-friendly! I love that you can have Spaces to easily organize all of your documents. Visual design is appealing, and I love how organized the layout is."',
    'testimonial1.name': 'Mr. Rainer Wilmers',
    'testimonial1.title': 'Talent Program Manager · qnova.ai',
    'testimonial2.headline': 'Making a contract? No problem!',
    'testimonial2.quote': '"Our support team members used to work 24x7 to handle customers from different timezones. Percy just snapped and the world turned upside down for us. It really is pure magic!"',
    'testimonial2.name': 'Jurgen Thom',
    'testimonial2.title': 'CVO & Partner · Ivoice.ai',
    
    // Developer Section
    'developer.badge': 'Hello engineers, we don\'t take up your time',
    'developer.headline': 'Easy on the resources, deploy it in 5 minutes',
    'developer.subheadline': 'It\'s not written by marketing, just install our package, set few variables and that\'s it. A Promise by our developers to yours.',
    'developer.cta': 'See our developer documentation',
    'developer.promise': 'A promise from our developers to yours',
    
    // Pricing Section
    'pricing.tagline': 'Pricing',
    'pricing.headline': 'Start guiding users, pay as you grow',
    'pricing.description': 'Simple pricing based on how many users you guide. Our flexible credit system scales with your product adoption and user engagement.',
    'pricing.comparePlans': 'Compare our plans',
    'pricing.annualCredits': '90,000 credits/year',
    'pricing.monthlyCredits': '7,500 credits/month',
    'pricing.annualCredits2': '120,000 credits/year',
    'pricing.monthlyCredits2': '10,000 credits/month',
    'pricing.getStarted': 'Get Started',
    'pricing.feature1': 'Unlimited users',
    'pricing.feature2': 'Up to 100/search',
    'pricing.feature3': 'Exporting',
    'pricing.feature4': 'AI / Claygent',
    'pricing.rolloverCredits': 'Rollover credits',
    'pricing.tryPercy': 'Try Percy for free',
    'pricing.talkToUs': 'Talk to us',
    'pricing.contactSales': 'Contact sales',
    'pricing.percyCredits': 'Percy Credits',
    'pricing.additionalCreditCost': 'Additional Credit Cost',
    'pricing.supportLevel': 'Support Level',
    'pricing.branding': 'Branding',
    'pricing.featureInfluence': 'Feature Influence & Consultation',
    'pricing.customizedWorkflow': 'Customized Workflow Assistance',
    'pricing.betaFeatureAccess': 'Beta Feature Access',
    'pricing.flexibleExit': 'Flexible Exit',
    'pricing.basic': 'Basic',
    'pricing.standard': 'Standard',
    'pricing.priority': 'Priority',
    'pricing.dedicated': 'Dedicated',
    'pricing.percy': 'Percy',
    'pricing.custom': 'Custom',
    'pricing.contractBased': 'Contract-based',
    'pricing.mostPopular': 'MOST POPULAR',
    'pricing.free': 'FREE',
    'pricing.starter': 'STARTER',
    'pricing.pro': 'PRO',
    'pricing.enterprise': 'ENTERPRISE',
    
    // FAQ
    'faq.heading': 'FREQUENTLY ASKED QUESTIONS',
    'faq.subheading': 'Common questions about Percy',
    'faq.question1': 'What are Percy Credits?',
    'faq.answer1': 'Percy Credits are our flexible usage metric. Each user interaction with Percy (viewing a product tour or engaging with guidance) consumes credits. Our tiered plans offer monthly credit allocations to match your needs.',
    'faq.question2': 'Can I upgrade my plan anytime?',
    'faq.answer2': 'Yes, you can easily upgrade or downgrade your Percy plan at any time. When you upgrade, you\'ll immediately gain access to additional features and credits.',
    'faq.question3': 'How do rollover credits work?',
    'faq.answer3': 'Unused Percy Credits roll over to the next month on paid plans. The rollover limit depends on your plan tier, providing flexibility for varying usage patterns.',
    'faq.question4': 'How do I implement Percy in my product?',
    'faq.answer4': 'Percy\'s installation is simple. Add our lightweight script to your web app or use our SDK for mobile apps. Our team provides personalized onboarding to ensure smooth implementation, and most customers are up and running within days.',
    'faq.question5': 'What support options do Percy customers receive?',
    'faq.answer5': 'All customers receive comprehensive documentation and email support. Starter plans include standard response times, while Pro and Enterprise customers enjoy priority support, dedicated account managers, and regular check-ins to maximize your success with Percy.',
    'faq.question6': 'Can I customize Percy\'s appearance to match my brand?',
    'faq.answer6': 'Yes! All paid plans include branding customization. You can set your brand colors, add your logo, and adjust the look and feel of Percy to match your application\'s design. Enterprise plans include additional customization options for a truly seamless experience.',
    'faq.question7': 'How does Percy integrate with our analytics?',
    'faq.answer7': 'Percy offers seamless integration with popular analytics platforms like Google Analytics, Segment, Mixpanel, and more. We provide detailed engagement metrics in our dashboard, and you can pass events to your existing analytics setup to measure the impact on user behavior and conversion rates.',

    // Roadmap/Changelog
    'roadmap.title': 'Changelog',
    'roadmap.headline': 'What\'s new?',
    'roadmap.description': 'A rundown of the latest Attio feature releases, product enhancements, design updates, and important bug fixes.',
    'roadmap.subscribe': 'Subscribe to updates',
    'roadmap.tag.newFeature': 'New Feature',
    'roadmap.tag.ai': 'AI',
    'roadmap.tag.enhancement': 'Enhancement',
    'roadmap.tag.ux': 'User Experience',
    'roadmap.tag.feature': 'Feature',
    'roadmap.tag.devTools': 'Developer Tools',
    'roadmap.tag.comingSoon': 'Coming Soon',
    
    'roadmap.entry1.title': 'AI-Powered Contextual Help',
    'roadmap.entry1.desc': 'We\'re excited to introduce our new AI-powered contextual help system that understands exactly what your users need, right when they need it:',
    'roadmap.entry1.feature1.title': 'Context-aware responses:',
    'roadmap.entry1.feature1.desc': 'Percy now analyzes the user\'s current view and recent actions to provide highly relevant support in real-time.',
    'roadmap.entry1.feature2.title': 'Knowledge base integration:',
    'roadmap.entry1.feature2.desc': 'Automatically pulls from your existing knowledge base, documentation, and support history to answer user questions with precision.',
    'roadmap.entry1.feature3.title': 'Continuous learning:',
    'roadmap.entry1.feature3.desc': 'The system improves over time by learning from user interactions and feedback, making each response more helpful than the last.',
    
    'roadmap.entry2.title': 'Spotlight Search Functionality',
    'roadmap.entry2.desc': 'Finding answers in your product just got a lot easier with our new Spotlight Search feature. This powerful global search allows users to:',
    'roadmap.entry2.feature1.title': 'Search across all content:',
    'roadmap.entry2.feature1.desc': 'Access help topics, product features, and documentation from anywhere in your application.',
    'roadmap.entry2.feature2.title': 'Command palette functionality:',
    'roadmap.entry2.feature2.desc': 'Power users can now execute common actions directly from the search interface without navigating through menus.',
    'roadmap.entry2.feature3.title': 'Natural language understanding:',
    'roadmap.entry2.feature3.desc': 'Users can type questions in plain English and get meaningful results.',
    
    'roadmap.entry3.title': 'Advanced Integration API',
    'roadmap.entry3.desc': 'Our new developer-friendly API makes integrating Percy into your product easier than ever:',
    'roadmap.entry3.feature1.title': 'Comprehensive webhooks:',
    'roadmap.entry3.feature1.desc': 'Get notified of key user events and interactions in real-time to trigger custom workflows.',
    'roadmap.entry3.feature2.title': 'GraphQL support:',
    'roadmap.entry3.feature2.desc': 'More flexibility with our new GraphQL endpoint alongside our REST API.',
    'roadmap.entry3.feature3.title': 'SDKs for multiple languages:',
    'roadmap.entry3.feature3.desc': 'New official SDKs for JavaScript, Python, Ruby, and Java to streamline integration.',
    'roadmap.entry3.feature4.title': 'Improved documentation:',
    'roadmap.entry3.feature4.desc': 'Completely redesigned developer docs with interactive examples and quickstart guides.',
    'roadmap.entry3.checkOut': 'Check out our new',
    'roadmap.entry3.devPortal': 'Developer Portal',
    'roadmap.entry3.forMore': 'for more details and implementation guides.',
    
    'roadmap.entry4.title': 'Advanced User Analytics Dashboard',
    'roadmap.entry4.desc': 'We\'re working on a comprehensive analytics dashboard that will provide deep insights into how users interact with your product:',
    'roadmap.entry4.feature1.title': 'User journey visualization:',
    'roadmap.entry4.feature1.desc': 'See exactly how users navigate through your product with intuitive flow diagrams.',
    'roadmap.entry4.feature2.title': 'Feature adoption metrics:',
    'roadmap.entry4.feature2.desc': 'Track which features are being used and by whom to identify opportunities for improvement.',
    'roadmap.entry4.feature3.title': 'Onboarding completion analysis:',
    'roadmap.entry4.feature3.desc': 'Identify where users get stuck in your onboarding process and optimize accordingly.',
    'roadmap.entry4.feature4.title': 'Custom reporting:',
    'roadmap.entry4.feature4.desc': 'Build and save custom reports focused on the metrics that matter most to your team.',
    'roadmap.entry4.comingIn': 'Coming in Q3 2024',
    'youtube.link': 'https://youtu.be/x8XIARHQWHM',

    // Changelog (Roadmap)
    'changelog.title': 'Changelog',
    'changelog.headline': "What's new?",
    'changelog.description': 'A rundown of the latest Percy feature releases, product enhancements, design updates, and important bug fixes.',
    'changelog.subscribe': 'Subscribe to updates',
    'changelog.tag.newFeature': 'New Feature',
    'changelog.tag.ai': 'AI',
    'changelog.tag.enhancement': 'Enhancement',
    'changelog.tag.ux': 'User Experience',
    'changelog.tag.feature': 'Feature',
    'changelog.tag.devTools': 'Developer Tools',
    'changelog.tag.comingSoon': 'Coming Soon',
    'changelog.entry1.title': 'AI-Powered Contextual Help',
    'changelog.entry1.desc': "We're excited to introduce our new AI-powered contextual help system that understands exactly what your users need, right when they need it:",
    'changelog.entry1.feature1.title': 'Context-aware responses:',
    'changelog.entry1.feature1.desc': "Percy now analyzes the user's current view and recent actions to provide highly relevant support in real-time.",
    'changelog.entry1.feature2.title': 'Knowledge base integration:',
    'changelog.entry1.feature2.desc': 'Automatically pulls from your existing knowledge base, documentation, and support history to answer user questions with precision.',
    'changelog.entry1.feature3.title': 'Continuous learning:',
    'changelog.entry1.feature3.desc': 'The system improves over time by learning from user interactions and feedback, making each response more helpful than the last.',
    'changelog.entry2.title': 'Spotlight Search Functionality',
    'changelog.entry2.desc': 'Finding answers in your product just got a lot easier with our new Spotlight Search feature. This powerful global search allows users to:',
    'changelog.entry2.feature1.title': 'Search across all content:',
    'changelog.entry2.feature1.desc': 'Access help topics, product features, and documentation from anywhere in your application.',
    'changelog.entry2.feature2.title': 'Command palette functionality:',
    'changelog.entry2.feature2.desc': 'Power users can now execute common actions directly from the search interface without navigating through menus.',
    'changelog.entry2.feature3.title': 'Natural language understanding:',
    'changelog.entry2.feature3.desc': 'Users can type questions in plain English and get meaningful results.',
    'changelog.entry3.title': 'Advanced Integration API',
    'changelog.entry3.desc': 'Our new developer-friendly API makes integrating Percy into your product easier than ever:',
    'changelog.entry3.feature1.title': 'Comprehensive webhooks:',
    'changelog.entry3.feature1.desc': 'Get notified of key user events and interactions in real-time to trigger custom workflows.',
    'changelog.entry3.feature2.title': 'GraphQL support:',
    'changelog.entry3.feature2.desc': 'More flexibility with our new GraphQL endpoint alongside our REST API.',
    'changelog.entry3.feature3.title': 'SDKs for multiple languages:',
    'changelog.entry3.feature3.desc': 'New official SDKs for JavaScript, Python, Ruby and Java to streamline integration.',
    'changelog.entry3.feature4.title': 'Improved documentation:',
    'changelog.entry3.feature4.desc': 'Completely redesigned developer docs with interactive examples and quickstart guides.',
    'changelog.entry3.checkOut': 'Check out our new',
    'changelog.entry3.devPortal': 'Developer Portal',
    'changelog.entry3.forMore': 'for more details and implementation guides.',
    'changelog.entry4.title': 'Advanced User Analytics Dashboard',
    'changelog.entry4.desc': "We're working on a comprehensive analytics dashboard that will provide deep insights into how users interact with your product:",
    'changelog.entry4.feature1.title': 'User journey visualization:',
    'changelog.entry4.feature1.desc': 'See exactly how users navigate through your product with intuitive flow diagrams.',
    'changelog.entry4.feature2.title': 'Feature adoption metrics:',
    'changelog.entry4.feature2.desc': 'Track which features are being used and by whom to identify opportunities for improvement.',
    'changelog.entry4.feature3.title': 'Onboarding completion analysis:',
    'changelog.entry4.feature3.desc': 'Identify where users get stuck in your onboarding process and optimize accordingly.',
    'changelog.entry4.feature4.title': 'Custom reporting:',
    'changelog.entry4.feature4.desc': 'Build and save custom reports focused on the metrics that matter most to your team.',
    'changelog.entry4.comingIn': 'Coming in Q3 2024',
  },
  de: {
    /* ── Navbar ─────────────────────────────────────────────────────────── */
    'nav.pricing': 'Preise',
    'nav.roadmap': 'Produktplan',
    'nav.about': 'Über Percy',
    'nav.getStarted': 'Loslegen',

    /* ── Hero ───────────────────────────────────────────────────────────── */
    'hero.tagline': 'Nutzer leiten. Tickets senken. Adoption steigern.',
    'hero.headline': 'KI, die Onboarding & Support übernimmt – damit Sie es nicht müssen',
    'hero.subheadline': 'Percy läuft direkt in Ihrem Produkt und zeigt Nutzern exakt dann den nächsten Schritt, wenn sie ihn brauchen.',
    'hero.tryPercy': 'Percy gratis testen',
    'hero.bookDemo': 'Demo buchen',

    /* ── Footer ─────────────────────────────────────────────────────────── */
    'footer.tagline': 'Jeder Nutzer kann zum Power‑User werden',
    'footer.privacyPolicy': 'Datenschutz',
    'footer.termsOfUse': 'Nutzungsbedingungen',
    'footer.copyright': '© Percy',

    /* ── Language Switcher ──────────────────────────────────────────────── */
    'languageSwitcher.en': 'English',
    'languageSwitcher.de': 'Deutsch',

    /* ── Device‑Mockup Main Section ─────────────────────────────────────── */
    'features.tagline': 'PRODUKTTOUREN · NUTZERFÜHRUNG · FEEDBACK',
    'features.headline': 'Nahtloses Onboarding. Smarter Support. Schnelle Adoption.',
    'features.subheadline': 'Interaktive Touren, kontextbezogene Hilfe und integriertes Feedback – alles in einem.',

    /* ── Product Tours ──────────────────────────────────────────────────── */
    'productTours.tagline': 'KI‑GESTEUERTE PRODUKTTOUREN',
    'productTours.headline': 'Verwandle Verwirrung sofort in Klarheit.',
    'productTours.subheadline': 'Percy zeigt Nutzern punktgenau den nächsten Schritt. Null Frust, null Wartezeit – nur flüssige Navigation und höhere Adoption.',

    /* ── Feature Grid ───────────────────────────────────────────────────── */
    'feature1.title': 'Ab Tag 1 60 % weniger Supporttickets',
    'feature1.description': 'Geführtes Onboarding beseitigt Unklarheiten und repetitive Fragen.',
    'feature2.title': '90 % zufriedenere Nutzer',
    'feature2.description': 'Klare Guidance macht Nutzer glücklicher und selbstbewusster.',
    'feature3.title': '75 % mehr Feature‑Nutzung freischalten',
    'feature3.description': 'Helfen Sie Ihren Nutzern, mehr zu entdecken – ganz ohne Händchenhalten.',

    /* ── Contextual Help ────────────────────────────────────────────────── */
    'contextualHelp.tagline': 'KONTEXTUELLE HILFE',
    'contextualHelp.headline': 'Antworten eingebaut. Keine Wartezeit. Keine Tickets.',
    'contextualHelp.subheadline': 'Percy liefert in Echtzeit passendes Produktwissen, damit Ihre Nutzer nie feststecken.',

    /* ── User Insights & Feedback ───────────────────────────────────────── */
    'userInsights.tagline': 'NUTZERINSIGHTS & FEEDBACK',
    'userInsights.headline': 'Verstehen, was Nutzer denken – und warum.',
    'userInsights.subheadline': 'Sammeln Sie entlang der Journey verwertbares Feedback zu Pain‑Points, Motivation und Chancen.',

    'userFeedback.tagline': 'NUTZERINSIGHTS & FEEDBACK',
    'userFeedback.headline': 'Fragen, wenn es zählt. Lernen, was zählt.',
    'userFeedback.subheadline': 'Percy fragt zum perfekten Zeitpunkt nach Feedback und liefert echte Insights – kein Rauschen.',
    'userFeedback.nps': 'NPS‑Score',

    /* ── Feature Announcements ─────────────────────────────────────────── */
    'featureAnnouncements.tagline': 'FEATURE‑ANKÜNDIGUNGEN',
    'featureAnnouncements.headline': 'Clever launchen. Adoption treiben.',
    'featureAnnouncements.subheadline': 'Updates ankündigen, Nudges auslösen und Nutzer führen',
    'featureAnnouncements.description': 'Zeigen Sie Neues genau dann, wenn es relevant ist',

    /* ── Flow Diagram Buttons ──────────────────────────────────────────── */
    'flowDiagram.button1': 'Zeig es',
    'flowDiagram.button2': 'Stups sie an',
    'flowDiagram.button3': 'Führ sie',

    /* ── Interactive Cards ─────────────────────────────────────────────── */
    'card1.title': 'Interaktive Produkttouren',
    'card1.description': 'Personalisierte Führung nach Rolle und Bedarf – für ein reibungsloses Erlebnis.',
    'card2.title': 'Onboarding‑Checklisten',
    'card2.description': 'Aktivieren Sie Nutzer mit klaren Schritt‑für‑Schritt‑Checklisten bis zum Abschluss.',

    /* ── Spotlight Search ──────────────────────────────────────────────── */
    'spotlightSearch.tagline': 'SPOTLIGHT‑SUCHE',
    'spotlightSearch.headline': 'Suche, die sich wie Magie anfühlt',
    'spotlightSearch.subheadline': 'Nutzer finden Antworten sofort – dank leistungsstarker Suche.',

    /* ── Testimonials (names/titles stay as given) ─────────────────────── */
    'testimonial1.headline': 'Kinderleicht!',
    'testimonial1.quote': '"Percy ist super intuitiv! Die Spaces halten alles ordentlich und das Design ist top."',
    'testimonial1.name': 'Herr Rainer Wilmers',
    'testimonial1.title': 'Talent‑Programm Manager · qnova.ai',

    'testimonial2.headline': 'Verträge? Kein Problem!',
    'testimonial2.quote': '"Früher arbeitete unser Support 24/7 wegen der Zeitzonen. Seit Percy ist das Vergangenheit – reine Magie!"',
    'testimonial2.name': 'Jürgen Thom',
    'testimonial2.title': 'CVO & Partner · Ivoice.ai',

    /* ── Developer Section ─────────────────────────────────────────────── */
    'developer.badge': 'Hey Entwickler, wir verschwenden eure Zeit nicht',
    'developer.headline': 'Ressourcenschonend, in 5 Minuten integriert',
    'developer.subheadline': 'Kein Marketing‑Blabla: Paket installieren, Variablen setzen, fertig. Unser Versprechen an euch.',
    'developer.cta': 'Zur Dev‑Doku',
    'developer.promise': 'Versprochen – von Devs für Devs',

    /* ── Pricing (only the wordier bits) ───────────────────────────────── */
    'pricing.tagline': 'Preise',
    'pricing.headline': 'Guidance starten, wachsen, zahlen',
    'pricing.description': 'Faire Preise je nach geführten Nutzern. Unser flexibles Creditsystem skaliert mit Ihrer Adoption.',
    'pricing.comparePlans': 'Pläne vergleichen',
    'pricing.annualCredits': '90.000 Kredite/Jahr',
    'pricing.monthlyCredits': '7.500 Kredite/Monat',
    'pricing.annualCredits2': '120.000 Kredite/Jahr',
    'pricing.monthlyCredits2': '10.000 Kredite/Monat',
    'pricing.getStarted': 'Jetzt starten',
    'pricing.feature1': 'Unbegrenzte Benutzer',
    'pricing.feature2': 'Bis zu 100/Suche',
    'pricing.feature3': 'Exportieren',
    'pricing.feature4': 'KI / Claygent',
    'pricing.rolloverCredits': 'Übertragbare Kredite',
    'pricing.tryPercy': 'Percy kostenlos testen',
    'pricing.talkToUs': 'Sprechen Sie mit uns',
    'pricing.contactSales': 'Vertrieb kontaktieren',
    'pricing.percyCredits': 'Percy-Kredite',
    'pricing.additionalCreditCost': 'Zusätzliche Kreditkosten',
    'pricing.supportLevel': 'Support-Level',
    'pricing.branding': 'Branding',
    'pricing.featureInfluence': 'Feature-Einfluss & Beratung',
    'pricing.customizedWorkflow': 'Angepasste Workflow-Unterstützung',
    'pricing.betaFeatureAccess': 'Beta-Feature-Zugang',
    'pricing.flexibleExit': 'Flexibler Ausstieg',
    'pricing.basic': 'Basis',
    'pricing.standard': 'Standard',
    'pricing.priority': 'Priorität',
    'pricing.dedicated': 'Dediziert',
    'pricing.percy': 'Percy',
    'pricing.custom': 'Angepasst',
    'pricing.contractBased': 'Vertragsbasiert',
    'pricing.mostPopular': 'AM BELIEBTESTEN',
    'pricing.free': 'KOSTENLOS',
    'pricing.starter': 'STARTER',
    'pricing.pro': 'PRO',
    'pricing.enterprise': 'ENTERPRISE',
    
    // FAQ
    'faq.heading': 'HÄUFIG GESTELLTE FRAGEN',
    'faq.subheading': 'Häufige Fragen zu Percy',
    'faq.question1': 'Was sind Percy-Kredite?',
    'faq.answer1': 'Percy-Kredite sind unsere flexible Nutzungsmetrik. Jede Benutzerinteraktion mit Percy (Anzeigen einer Produkttour oder Interaktion mit Anleitungen) verbraucht Kredite. Unsere gestaffelten Pläne bieten monatliche Kreditzuweisungen, die Ihren Bedürfnissen entsprechen.',
    'faq.question2': 'Kann ich meinen Plan jederzeit upgraden?',
    'faq.answer2': 'Ja, Sie können Ihren Percy-Plan jederzeit einfach upgraden oder downgraden. Bei einem Upgrade erhalten Sie sofort Zugriff auf zusätzliche Funktionen und Kredite.',
    'faq.question3': 'Wie funktionieren übertragbare Kredite?',
    'faq.answer3': 'Nicht verwendete Percy-Kredite werden bei bezahlten Plänen in den nächsten Monat übertragen. Das Übertragungslimit hängt von Ihrem Plantarif ab und bietet Flexibilität für unterschiedliche Nutzungsmuster.',
    'faq.question4': 'Wie implementiere ich Percy in mein Produkt?',
    'faq.answer4': 'Die Installation von Percy ist einfach. Fügen Sie unser leichtgewichtiges Skript zu Ihrer Web-App hinzu oder verwenden Sie unser SDK für mobile Apps. Unser Team bietet personalisiertes Onboarding für eine reibungslose Implementierung, und die meisten Kunden sind innerhalb weniger Tage einsatzbereit.',
    'faq.question5': 'Welche Support-Optionen erhalten Percy-Kunden?',
    'faq.answer5': 'Alle Kunden erhalten umfassende Dokumentation und E-Mail-Support. Starter-Pläne beinhalten Standard-Antwortzeiten, während Pro- und Enterprise-Kunden von Prioritäts-Support, dedizierten Account-Managern und regelmäßigen Check-ins profitieren, um Ihren Erfolg mit Percy zu maximieren.',
    'faq.question6': 'Kann ich das Erscheinungsbild von Percy an meine Marke anpassen?',
    'faq.answer6': 'Ja! Alle bezahlten Pläne beinhalten Branding-Anpassungen. Sie können Ihre Markenfarben festlegen, Ihr Logo hinzufügen und das Aussehen und Gefühl von Percy an das Design Ihrer Anwendung anpassen. Enterprise-Pläne beinhalten zusätzliche Anpassungsoptionen für ein wirklich nahtloses Erlebnis.',
    'faq.question7': 'Wie integriert sich Percy mit unseren Analysen?',
    'faq.answer7': 'Percy bietet nahtlose Integration mit beliebten Analyseplattformen wie Google Analytics, Segment, Mixpanel und mehr. Wir stellen detaillierte Engagement-Metriken in unserem Dashboard bereit, und Sie können Ereignisse an Ihre bestehende Analyse-Einrichtung weiterleiten, um die Auswirkungen auf das Benutzerverhalten und die Konversionsraten zu messen.',

    // Roadmap/Changelog
    'roadmap.title': 'Änderungsprotokoll',
    'roadmap.headline': 'Was gibt es Neues?',
    'roadmap.description': 'Eine Übersicht der neuesten Percy-Feature-Veröffentlichungen, Produktverbesserungen, Design-Updates und wichtigen Fehlerbehebungen.',
    'roadmap.subscribe': 'Updates abonnieren',
    'roadmap.tag.newFeature': 'Neues Feature',
    'roadmap.tag.ai': 'KI',
    'roadmap.tag.enhancement': 'Verbesserung',
    'roadmap.tag.ux': 'Benutzererfahrung',
    'roadmap.tag.feature': 'Feature',
    'roadmap.tag.devTools': 'Entwickler-Tools',
    'roadmap.tag.comingSoon': 'Demnächst',
    
    'roadmap.entry1.title': 'KI-gestützte kontextbezogene Hilfe',
    'roadmap.entry1.desc': 'Wir freuen uns, unser neues KI-gestütztes kontextbezogenes Hilfesystem vorzustellen, das genau versteht, was Ihre Benutzer brauchen, genau dann, wenn sie es brauchen:',
    'roadmap.entry1.feature1.title': 'Kontextbezogene Antworten:',
    'roadmap.entry1.feature1.desc': 'Percy analysiert jetzt die aktuelle Ansicht des Benutzers und die letzten Aktionen, um in Echtzeit hochrelevante Unterstützung zu bieten.',
    'roadmap.entry1.feature2.title': 'Wissensdatenbank-Integration:',
    'roadmap.entry1.feature2.desc': 'Greift automatisch auf Ihre bestehende Wissensdatenbank, Dokumentation und Support-Verlauf zu, um Benutzerfragen präzise zu beantworten.',
    'roadmap.entry1.feature3.title': 'Kontinuierliches Lernen:',
    'roadmap.entry1.feature3.desc': 'Das System verbessert sich im Laufe der Zeit durch das Lernen aus Benutzerinteraktionen und Feedback, wodurch jede Antwort hilfreicher wird als die letzte.',
    
    'roadmap.entry2.title': 'Spotlight-Suchfunktion',
    'roadmap.entry2.desc': 'Das Finden von Antworten in Ihrem Produkt ist mit unserer neuen Spotlight-Suchfunktion viel einfacher geworden. Diese leistungsstarke globale Suche ermöglicht es Benutzern:',
    'roadmap.entry2.feature1.title': 'Suche über alle Inhalte:',
    'roadmap.entry2.feature1.desc': 'Zugriff auf Hilfethemen, Produktfunktionen und Dokumentation von überall in Ihrer Anwendung.',
    'roadmap.entry2.feature2.title': 'Befehlspalettenfunktion:',
    'roadmap.entry2.feature2.desc': 'Fortgeschrittene Benutzer können jetzt häufige Aktionen direkt über die Suchoberfläche ausführen, ohne durch Menüs navigieren zu müssen.',
    'roadmap.entry2.feature3.title': 'Verständnis natürlicher Sprache:',
    'roadmap.entry2.feature3.desc': 'Benutzer können Fragen in natürlicher Sprache eingeben und erhalten aussagekräftige Ergebnisse.',
    
    'roadmap.entry3.title': 'Erweiterte Integrations-API',
    'roadmap.entry3.desc': 'Unsere neue entwicklerfreundliche API macht die Integration von Percy in Ihr Produkt einfacher als je zuvor:',
    'roadmap.entry3.feature1.title': 'Umfassende Webhooks:',
    'roadmap.entry3.feature1.desc': 'Werden Sie in Echtzeit über wichtige Benutzerereignisse und Interaktionen informiert, um benutzerdefinierte Workflows auszulösen.',
    'roadmap.entry3.feature2.title': 'GraphQL-Unterstützung:',
    'roadmap.entry3.feature2.desc': 'Mehr Flexibilität mit unserem neuen GraphQL-Endpunkt neben unserer REST-API.',
    'roadmap.entry3.feature3.title': 'SDKs für mehrere Sprachen:',
    'roadmap.entry3.feature3.desc': 'Neue offizielle SDKs für JavaScript, Python, Ruby und Java zur Vereinfachung der Integration.',
    'roadmap.entry3.feature4.title': 'Verbesserte Dokumentation:',
    'roadmap.entry3.feature4.desc': 'Komplett neu gestaltete Entwicklerdokumentation mit interaktiven Beispielen und Schnellstartanleitungen.',
    'roadmap.entry3.checkOut': 'Besuchen Sie unser neues',
    'roadmap.entry3.devPortal': 'Entwicklerportal',
    'roadmap.entry3.forMore': 'für weitere Details und Implementierungsleitfäden.',
    
    'roadmap.entry4.title': 'Erweitertes Benutzeranalyse-Dashboard',
    'roadmap.entry4.desc': 'Wir arbeiten an einem umfassenden Analyse-Dashboard, das tiefe Einblicke bietet, wie Benutzer mit Ihrem Produkt interagieren:',
    'roadmap.entry4.feature1.title': 'Visualisierung der Benutzerreise:',
    'roadmap.entry4.feature1.desc': 'Sehen Sie genau, wie Benutzer durch Ihr Produkt navigieren, mit intuitiven Flussdiagrammen.',
    'roadmap.entry4.feature2.title': 'Metriken zur Funktionsübernahme:',
    'roadmap.entry4.feature2.desc': 'Verfolgen Sie, welche Funktionen genutzt werden und von wem, um Verbesserungsmöglichkeiten zu identifizieren.',
    'roadmap.entry4.feature3.title': 'Analyse der Onboarding-Fertigstellung:',
    'roadmap.entry4.feature3.desc': 'Identifizieren Sie, wo Benutzer in Ihrem Onboarding-Prozess hängen bleiben, und optimieren Sie entsprechend.',
    'roadmap.entry4.feature4.title': 'Benutzerdefinierte Berichterstattung:',
    'roadmap.entry4.feature4.desc': 'Erstellen und speichern Sie benutzerdefinierte Berichte, die sich auf die Metriken konzentrieren, die für Ihr Team am wichtigsten sind.',
    'roadmap.entry4.comingIn': 'Kommt im 3. Quartal 2024',
    'youtube.link': 'https://youtu.be/-vKTt2dEGdQ',

    // Changelog (Roadmap)
    'changelog.title': 'Änderungsprotokoll',
    'changelog.headline': 'Was gibt es Neues?',
    'changelog.description': 'Eine Übersicht der neuesten Percy-Feature-Veröffentlichungen, Produktverbesserungen, Design-Updates und wichtigen Fehlerbehebungen.',
    'changelog.subscribe': 'Updates abonnieren',
    'changelog.tag.newFeature': 'Neues Feature',
    'changelog.tag.ai': 'KI',
    'changelog.tag.enhancement': 'Verbesserung',
    'changelog.tag.ux': 'Benutzererfahrung',
    'changelog.tag.feature': 'Feature',
    'changelog.tag.devTools': 'Entwickler-Tools',
    'changelog.tag.comingSoon': 'Demnächst',
    'changelog.entry1.title': 'KI-gestützte kontextbezogene Hilfe',
    'changelog.entry1.desc': 'Wir freuen uns, unser neues KI-gestütztes kontextbezogenes Hilfesystem vorzustellen, das genau versteht, was Ihre Benutzer brauchen, genau dann, wenn sie es brauchen:',
    'changelog.entry1.feature1.title': 'Kontextbezogene Antworten:',
    'changelog.entry1.feature1.desc': 'Percy analysiert jetzt die aktuelle Ansicht des Benutzers und die letzten Aktionen, um in Echtzeit hochrelevante Unterstützung zu bieten.',
    'changelog.entry1.feature2.title': 'Wissensdatenbank-Integration:',
    'changelog.entry1.feature2.desc': 'Greift automatisch auf Ihre bestehende Wissensdatenbank, Dokumentation und Support-Verlauf zu, um Benutzerfragen präzise zu beantworten.',
    'changelog.entry1.feature3.title': 'Kontinuierliches Lernen:',
    'changelog.entry1.feature3.desc': 'Das System verbessert sich im Laufe der Zeit durch das Lernen aus Benutzerinteraktionen und Feedback, wodurch jede Antwort hilfreicher wird als die letzte.',
    'changelog.entry2.title': 'Spotlight-Suchfunktion',
    'changelog.entry2.desc': 'Das Finden von Antworten in Ihrem Produkt ist mit unserer neuen Spotlight-Suchfunktion viel einfacher geworden. Diese leistungsstarke globale Suche ermöglicht es Benutzern:',
    'changelog.entry2.feature1.title': 'Suche über alle Inhalte:',
    'changelog.entry2.feature1.desc': 'Zugriff auf Hilfethemen, Produktfunktionen und Dokumentation von überall in Ihrer Anwendung.',
    'changelog.entry2.feature2.title': 'Befehlspalettenfunktion:',
    'changelog.entry2.feature2.desc': 'Fortgeschrittene Benutzer können jetzt häufige Aktionen direkt über die Suchoberfläche ausführen, ohne durch Menüs navigieren zu müssen.',
    'changelog.entry2.feature3.title': 'Verständnis natürlicher Sprache:',
    'changelog.entry2.feature3.desc': 'Benutzer können Fragen in natürlicher Sprache eingeben und erhalten aussagekräftige Ergebnisse.',
    'changelog.entry3.title': 'Erweiterte Integrations-API',
    'changelog.entry3.desc': 'Unsere neue entwicklerfreundliche API macht die Integration von Percy in Ihr Produkt einfacher als je zuvor:',
    'changelog.entry3.feature1.title': 'Umfassende Webhooks:',
    'changelog.entry3.feature1.desc': 'Werden Sie in Echtzeit über wichtige Benutzerereignisse und Interaktionen informiert, um benutzerdefinierte Workflows auszulösen.',
    'changelog.entry3.feature2.title': 'GraphQL-Unterstützung:',
    'changelog.entry3.feature2.desc': 'Mehr Flexibilität mit unserem neuen GraphQL-Endpunkt neben unserer REST-API.',
    'changelog.entry3.feature3.title': 'SDKs für mehrere Sprachen:',
    'changelog.entry3.feature3.desc': 'Neue offizielle SDKs für JavaScript, Python, Ruby und Java zur Vereinfachung der Integration.',
    'changelog.entry3.feature4.title': 'Verbesserte Dokumentation:',
    'changelog.entry3.feature4.desc': 'Komplett neu gestaltete Entwicklerdokumentation mit interaktiven Beispielen und Schnellstartanleitungen.',
    'changelog.entry3.checkOut': 'Besuchen Sie unser neues',
    'changelog.entry3.devPortal': 'Entwicklerportal',
    'changelog.entry3.forMore': 'für weitere Details und Implementierungsleitfäden.',
    'changelog.entry4.title': 'Erweitertes Benutzeranalyse-Dashboard',
    'changelog.entry4.desc': 'Wir arbeiten an einem umfassenden Analyse-Dashboard, das tiefe Einblicke bietet, wie Benutzer mit Ihrem Produkt interagieren:',
    'changelog.entry4.feature1.title': 'Visualisierung der Benutzerreise:',
    'changelog.entry4.feature1.desc': 'Sehen Sie genau, wie Benutzer durch Ihr Produkt navigieren, mit intuitiven Flussdiagrammen.',
    'changelog.entry4.feature2.title': 'Metriken zur Funktionsübernahme:',
    'changelog.entry4.feature2.desc': 'Verfolgen Sie, welche Funktionen genutzt werden und von wem, um Verbesserungsmöglichkeiten zu identifizieren.',
    'changelog.entry4.feature3.title': 'Analyse der Onboarding-Fertigstellung:',
    'changelog.entry4.feature3.desc': 'Identifizieren Sie, wo Benutzer in Ihrem Onboarding-Prozess hängen bleiben, und optimieren Sie entsprechend.',
    'changelog.entry4.feature4.title': 'Benutzerdefinierte Berichterstattung:',
    'changelog.entry4.feature4.desc': 'Erstellen und speichern Sie benutzerdefinierte Berichte, die sich auf die Metriken konzentrieren, die für Ihr Team am wichtigsten sind.',
    'changelog.entry4.comingIn': 'Kommt im 3. Quartal 2024',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 