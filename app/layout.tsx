import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from "../contexts/LanguageContext";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Percy - Product Tours & User Onboarding Platform',
  description: 'Enhance user experience with intelligent product tours and seamless onboarding solutions to increase user adoption and engagement.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght@400;700&display=swap" rel="stylesheet" />
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
