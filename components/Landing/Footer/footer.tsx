'use client';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, BookOpen, GraduationCap, Users, Shield, Zap, Award, Leaf } from 'lucide-react';

export default function MinimalFooter() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* SHERQ ACADEMY */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-100">SHERQ ACADEMY</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Formação profissional acreditada pelo governo de Moçambique.
                  </p>
                </div>
              </div>

              {/* MOZSHAQ */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-gray-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-100">MOZSHAQ</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Consultoria especializada em desenvolvimento sustentável.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Áreas de Atuação</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="/#areas" className="flex items-center gap-2 hover:text-white transition-colors">
                <Leaf className="w-4 h-4" />
                Estudos Ambientais
              </Link>
              <Link href="/#areas" className="flex items-center gap-2 hover:text-white transition-colors">
                <Shield className="w-4 h-4" />
                Segurança Ocupacional
              </Link>
              <Link href="/#areas" className="flex items-center gap-2 hover:text-white transition-colors">
                <Award className="w-4 h-4" />
                Sistemas de Gestão
              </Link>
              <Link href="/#areas" className="flex items-center gap-2 hover:text-white transition-colors">
                <Zap className="w-4 h-4" />
                Energias Renováveis
              </Link>
            </div>
          </div>

          {/* Áreas de Formação */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Áreas de Formação</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <Link href="/#areasdeformacao" className="flex items-center gap-2 hover:text-white transition-colors">
                <BookOpen className="w-4 h-4" />
                Saúde e Segurança
              </Link>
              <Link href="/#areasdeformacao" className="flex items-center gap-2 hover:text-white transition-colors">
                <BookOpen className="w-4 h-4" />
                Sistemas de Gestão
              </Link>
              <Link href="/#areasdeformacao" className="flex items-center gap-2 hover:text-white transition-colors">
                <BookOpen className="w-4 h-4" />
                Operação de Equipamentos
              </Link>
              <Link href="/#areasdeformacao" className="flex items-center gap-2 hover:text-white transition-colors">
                <BookOpen className="w-4 h-4" />
                Soft Skills
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Contacte-nos</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sherqacademy@mozshaq.co.mz</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+258 82 559 8146</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+258 87 559 8145</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+258 21 320873</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Maputo - Tete - Pemba</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              © 2024 SHERQ ACADEMY - MOZSHAQ Consultoria & Serviços. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>+500 Profissionais Formados</span>
              </div>
              <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}