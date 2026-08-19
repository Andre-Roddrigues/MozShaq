// components/Landing/Footer/footer.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, BookOpen, GraduationCap, Users, Shield, Zap, Award, Leaf } from 'lucide-react';
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
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* SHERQ ACADEMY */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-100">{t('sherqAcademy.title')}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t('sherqAcademy.description')}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{t('sherqAcademy.email')}</span>
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
              </div>

              {/* MOZSHAQ */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-100">{t('mozshaq.title')}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t('mozshaq.description')}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{t('mozshaq.email')}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">+258 876 634 686</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Áreas de Atuação */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">{t('areasAtuacao.title')}</h4>
            <div className="space-y-3">
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Leaf className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">
                  {t('areasAtuacao.items.environmental')}
                </span>
              </Link>
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Shield className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">
                  {t('areasAtuacao.items.occupational')}
                </span>
              </Link>
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Award className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">
                  {t('areasAtuacao.items.management')}
                </span>
              </Link>
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Zap className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">
                  {t('areasAtuacao.items.renewable')}
                </span>
              </Link>
            </div>
          </div>

          {/* Áreas de Formação */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">{t('areasFormacao.title')}</h4>
            <div className="space-y-3">
              <Link href="/cursos#sso" className="flex items-center gap-3 hover:text-white transition-colors group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">
                  {t('areasFormacao.items.healthSafety')}
                </span>
              </Link>
              <Link href="/cursos#gestao" className="flex items-center gap-3 hover:text-white transition-colors group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">
                  {t('areasFormacao.items.management')}
                </span>
              </Link>
              <Link href="/cursos#operacao" className="flex items-center gap-3 hover:text-white transition-colors group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">
                  {t('areasFormacao.items.equipment')}
                </span>
              </Link>
              <Link href="/cursos#softskills" className="flex items-center gap-3 hover:text-white transition-colors group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">
                  {t('areasFormacao.items.softSkills')}
                </span>
              </Link>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">{t('localizacao.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{t('localizacao.locations.maputo')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{t('localizacao.locations.tete')}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{t('localizacao.locations.pemba')}</span>
              </div>
            </div>
            
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <span className="text-xs bg-gray-700 px-3 py-1.5 rounded-full text-gray-300">
                  {t('localizacao.license')}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <span className="text-sm text-gray-400">
                {t('footer.copyright')}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">{t('footer.trained')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}