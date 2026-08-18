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
});

export const metadata: Metadata = {
  title: "MozShaq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="h-full">
      <head>
        <meta name="author" content="William Cossa"/>
        <meta name="author" content="Andre Novela"/>
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
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        <body className={`h-full ${outfit.className} bg-white dark:bg-gray-900`}>
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
            </div>
            <MinimalFooter />
          </LanguageProvider>
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}