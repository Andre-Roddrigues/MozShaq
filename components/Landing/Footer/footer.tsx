'use client';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, BookOpen, GraduationCap, Users, Shield, Zap, Award, Leaf } from 'lucide-react';

export default function MinimalFooter() {
  return (
    <footer id="contacto" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* SHERQ ACADEMY */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-100">SHERQ ACADEMY</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Formação profissional acreditada pelo governo de Moçambique.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">sherqacademy@mozshaq.co.mz</span>
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
                    <h3 className="text-lg font-bold text-gray-100">MOZSHAQ</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Consultoria especializada em desenvolvimento sustentável.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">info@mozshaq.co.mz</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">+258 82 559 8146</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">+258 21 320873</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Áreas de Atuação */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">Áreas de Atuação</h4>
            <div className="space-y-3">
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Leaf className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">Estudos Ambientais</span>
              </Link>
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Shield className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">Segurança Ocupacional</span>
              </Link>
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Award className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">Sistemas de Gestão</span>
              </Link>
              <Link href="/#areas" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Zap className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">Energias Renováveis</span>
              </Link>
            </div>
          </div>

          {/* Áreas de Formação */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">Áreas de Formação</h4>
            <div className="space-y-3">
              <Link href="/cursos#sso" className="flex items-center gap-3 hover:text-white transition-colors group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">Saúde e Segurança</span>
              </Link>
              <Link href="/cursos#gestao" className="flex items-center gap-3 hover:text-white transition-colors group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">Sistemas de Gestão</span>
              </Link>
              <Link href="/cursos#operacao" className="flex items-center gap-3 hover:text-white transition-colors group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">Operação de Equipamentos</span>
              </Link>
              <Link href="/cursos#softskills" className="flex items-center gap-3 hover:text-white transition-colors group">
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span className="text-sm text-gray-400 group-hover:text-white">Soft Skills</span>
              </Link>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-100 text-lg">Localização</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Maputo - Moçambique</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Tete - Moçambique</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Pemba - Moçambique</span>
              </div>
            </div>
            
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <span className="text-xs bg-gray-700 px-3 py-1.5 rounded-full text-gray-300">
                  Lic. 1091/051/CFP/2019
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
                © 2024 SHERQ ACADEMY - MOZSHAQ Consultoria & Serviços. Todos os direitos reservados.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">+500 Profissionais Formados</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}