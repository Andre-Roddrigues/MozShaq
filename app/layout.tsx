import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Landing/Navbar/navbar';
import MinimalFooter from '../components/Landing/Footer/footer';
import { Metadata } from 'next';
import { GoogleOAuthProvider } from '@react-oauth/google';
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
    <html lang="en" className="h-full">
      <head>
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
            {/* Container principal com flex column */}
            <div className="min-h-screen flex flex-col">
              {/* Navbar fixo no topo */}
              <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
                <Navbar />
              </header>
              
              {/* Conteúdo principal que vai fazer scroll */}
              <main className="flex-1">
                {children}
              </main>
              
              {/* Footer fixo na parte inferior */}
              <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <MinimalFooter />
              </footer>
            </div>
          </LanguageProvider>
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}