// app/layout.tsx
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Landing/Navbar/navbar';
import MinimalFooter from '../components/Landing/Footer/footer';
import { Metadata } from 'next';
import { GoogleOAuthProvider } from '@react-oauth/google';
import FloatingWhatsApp from '../components/Landing/botaoFlutuante/whatapp';
import { LanguageProvider } from '../context/LanguageContext';

const outfit = Outfit({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-outfit',
});

// SEO Otimizado
export const metadata: Metadata = {
  metadataBase: new URL('https://mozshaq.co.mz'),
  
  title: {
    default: 'MozShaq - Consultoria e Formação Profissional em Moçambique',
    template: '%s | MozShaq'
  },
  
  description: 'MozShaq é uma empresa de consultoria e formação profissional em Moçambique, especializada em estudos ambientais, segurança ocupacional, sistemas de gestão e energias renováveis. SherqAcademy oferece cursos certificados.',
  
  keywords: [
    'MozShaq',
    'consultoria Moçambique',
    'formação profissional',
    'SherqAcademy',
    'estudos ambientais',
    'segurança ocupacional',
    'sistemas de gestão',
    'energias renováveis',
    'consultoria ambiental',
    'formação Moçambique',
    'cursos profissionais',
    'ISO 9001',
    'ISO 14001',
    'ISO 45001'
  ],
  
  authors: [
    { name: 'William Cossa' },
    { name: 'André Novela' }
  ],
  
  creator: 'MozShaq',
  publisher: 'MozShaq',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'pt_MZ',
    url: 'https://mozshaq.co.mz',
    siteName: 'MozShaq - Consultoria e Formação',
    title: 'MozShaq - Consultoria e Formação Profissional em Moçambique',
    description: 'Consultoria especializada em desenvolvimento sustentável e formação profissional acreditada pelo governo de Moçambique.',
    images: [
      {
        url: '/images/share.png',
        width: 1200,
        height: 630,
        alt: 'MozShaq - Consultoria e Formação Profissional',
        type: 'image/png',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'MozShaq - Consultoria e Formação Profissional',
    description: 'Consultoria especializada em desenvolvimento sustentável e formação profissional acreditada pelo governo de Moçambique.',
    images: ['/images/share.png'],
    creator: '@mozshaq',
    site: '@mozshaq',
  },
  
  alternates: {
    canonical: 'https://mozshaq.co.mz',
    languages: {
      'pt': 'https://mozshaq.co.mz',
      'en': 'https://mozshaq.co.mz/en',
    },
  },
  
  category: 'business',
  
  verification: {
    google: 'G-3YZK3D46ZS',
  },
  
  applicationName: 'MozShaq',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="h-full">
      <head>
        <meta name="author" content="William Cossa" />
        <meta name="author" content="Andre Novela" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A1628" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Rich Snippets - Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MozShaq",
              "alternateName": "MozShaq Consultoria & Serviços",
              "description": "Consultoria especializada em desenvolvimento sustentável e formação profissional acreditada pelo governo de Moçambique.",
              "url": "https://mozshaq.co.mz",
              "logo": "https://mozshaq.co.mz/images/logo-mozshaq.png",
              "image": "https://mozshaq.co.mz/images/share.png",
              "email": "info@mozshaq.co.mz",
              "telephone": "+258876634686",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MZ",
                "addressLocality": "Maputo",
                "addressRegion": "Maputo"
              },
              "sameAs": [
                "https://www.linkedin.com/company/mozshaq",
                "https://www.facebook.com/mozshaq",
                "https://www.instagram.com/mozshaq"
              ],
              "foundingDate": "2016",
              "founders": [
                {
                  "@type": "Person",
                  "name": "William Cossa"
                },
                {
                  "@type": "Person",
                  "name": "André Novela"
                }
              ]
            })
          }}
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3YZK3D46ZS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3YZK3D46ZS');
            `,
          }}
        />
      </head>
      <body className={`h-full ${outfit.className} ${outfit.variable} bg-white dark:bg-gray-900 antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
              <Navbar />
            </header>
            
            <main className="flex-1">
              {children}
            </main>
            <FloatingWhatsApp
              phone="+258876634686"
              message="Olá! Gostaria de mais informações."
              position="bottom-right"
            />
            <MinimalFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}