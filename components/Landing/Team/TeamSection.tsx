"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: "Carla Silva",
    role: "CEO & Fundador",
    description: "Mais de 15 anos de experiência em consultoria ambiental e gestão sustentável.",
    image: "/images/empresa.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "carla@empresa.com"
    }
  },
  {
    id: 2,
    name: "Andre Rodrigues",
    role: "Director de Sustentabilidade",
    description: "Especialista em certificações ambientais e gestão de recursos naturais.",
    image: "/images/mentorhero.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "andre@empresa.com"
    }
  },
  {
    id: 3,
    name: "William Cossa",
    role: "Gestor de Segurança",
    description: "Responsável pela implementação de sistemas de segurança e prevenção de riscos.",
    image: "/images/herosherq4.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "william@empresa.com"
    }
  },
  {
    id: 4,
    name: "Sofia Costa",
    role: "Consultora Ambiental",
    description: "Focada em estudos de impacto ambiental e desenvolvimento sustentável.",
    image: "/images/empresas.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sofia@empresa.com"
    }
  }
];

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="team" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-main/5 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Conheça a Nossa <span className="text-brand-main">Equipa</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Profissionais qualificados e experientes comprometidos com a excelência 
            em sustentabilidade, segurança e gestão ambiental.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden group hover:shadow-xl dark:hover:shadow-gray-900/40 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Member Image */}
              {/* <div className="relative h-80 overflow-hidden"> */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={member.social.linkedin}
                    className="bg-white p-3 rounded-full hover:bg-brand-main hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    className="bg-white p-3 rounded-full hover:bg-brand-main hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Twitter size={20} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    className="bg-white p-3 rounded-full hover:bg-brand-main hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <motion.h3
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  whileHover={{ color: "#3B82F6" }}
                  transition={{ duration: 0.3 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-brand-main dark:text-brand-lime font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Quer fazer parte da nossa equipa?
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-brand-main text-white rounded-lg hover:bg-brand-main/90 transition-colors duration-300 font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Oportunidades
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TeamSection;