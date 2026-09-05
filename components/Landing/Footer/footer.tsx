// components/Landing/Footer/footer.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Users } from 'lucide-react';
import { useTranslation } from '../../../hooks/useTranslation';

export default function MinimalFooter() {
  const { t } = useTranslation('footer');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Se não estiver montado ou não estiver pronto, mostrar placeholder
  if (!mounted) {
    return (
      <footer className="bg-gray-800 text-white relative z-50">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-brand-main border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Carregando...</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="contacto" className="bg-gray-800 text-white relative z-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand Section - MOZSHAQ com Logo */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/logom_branco.png" 
                  alt="MozShaq" 
                  width={180}
                  height={60}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Descrição */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                {t('mozshaq.description')}
              </p>

              {/* Contatos */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{t('mozshaq.email')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">+258 876 634 686</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">+258 82 559 8146</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">+258 87 559 8145</span>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">{t('social.title')}</h4>
            <div className="space-y-4">
              <Link 
                href="https://www.linkedin.com/company/mozshaq" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-[#0A66C2] transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white">LinkedIn</span>
              </Link>
              
              <Link 
                href="https://www.facebook.com/mozshaq" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-[#1877F2] transition-colors">
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white">Facebook</span>
              </Link>
              
              <Link 
                href="https://www.instagram.com/mozshaq" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br from-[#E4405F] to-[#F58529] transition-colors">
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">{t('localizacao.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{t('localizacao.locations.maputo')}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{t('localizacao.locations.tete')}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">{t('localizacao.locations.pemba')}</span>
              </div>
            </div>
            
            <div className="pt-4">
              <span className="text-xs bg-gray-700 px-3 py-1.5 rounded-full text-gray-300 inline-block">
                {t('localizacao.license')}
              </span>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">{t('links.title')}</h4>
            <div className="space-y-3">
              <Link href="/#sobre" className="flex items-center gap-3 hover:text-white transition-colors group">
                <span className="text-sm text-gray-400 group-hover:text-white">{t('links.about')}</span>
              </Link>
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <span className="text-sm text-gray-400 group-hover:text-white">{t('links.consulting')}</span>
              </Link>
              <Link href="/sherq-academy/inicio" className="flex items-center gap-3 hover:text-white transition-colors group">
                <span className="text-sm text-gray-400 group-hover:text-white">{t('links.academy')}</span>
              </Link>
              <Link href="/contacte-nos" className="flex items-center gap-3 hover:text-white transition-colors group">
                <span className="text-sm text-gray-400 group-hover:text-white">{t('links.contact')}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      
    </footer>
  );
}