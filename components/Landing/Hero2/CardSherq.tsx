"use client";
import { motion } from "framer-motion";
import { BookOpen, Users, Award } from "lucide-react";

export default function CardSherq() {
    return (
        <motion.div 
          className="py-4 flex justify-center items-center z-50 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.2, 
            duration: 0.6,
          }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6">
            {/* Card 1 */}
            <motion.div 
              className="bg-white dark:border-brand-blue dark:bg-gray-800 p-4 md:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 md:mb-3 flex items-center justify-center rounded"
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <BookOpen className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs md:text-sm font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                Conteúdo Atualizado
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Materiais pedagógicos sempre atualizados com as últimas normas.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="bg-white dark:border-brand-blue dark:bg-gray-800 p-4 md:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 md:mb-3 flex items-center justify-center rounded"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <Users className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs md:text-sm font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                Formadores Certificados
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Equipa de formadores com vasta experiência profissional.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="bg-white dark:border-brand-blue dark:bg-gray-800 p-4 md:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <motion.div 
                className="w-10 h-10 md:w-12 md:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 md:mb-3 flex items-center justify-center rounded"
                whileHover={{ 
                  rotate: -15,
                  transition: { duration: 0.3 }
                }}
              >
                <Award className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs md:text-sm font-bold text-slate-800 dark:text-white mb-1 md:mb-2">
                Certificação Reconhecida
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Certificados válidos e reconhecidos pelo mercado de trabalho.
              </p>
            </motion.div>
          </div>
        </motion.div>
    );
}
