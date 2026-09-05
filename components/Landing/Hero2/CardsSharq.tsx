"use client"
import { motion } from "framer-motion";
import { Wrench, Users, ThumbsUp } from "lucide-react";
import React from "react";

export function CardsSharq(){
    return(
        <>
        <motion.div
          className=" py-4 flex justify-center items-center z-50 w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.0,
            duration: 0.6,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {/* Card 1 */}
            <motion.div
              className="bg-white  dark:bg-gray-800 p-4 lg:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg border border-gray-100 "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <motion.div
                className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 lg:mb-3 flex items-center justify-center rounded"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
              >
                <Wrench className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs lg:text-sm font-bold text-slate-800 dark:text-white mb-1 lg:mb-2">
                Consultoria Especializada
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Estudos ambientais e sociais com rigor técnico e conformidade legal.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white  dark:bg-gray-800 p-4 lg:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.div
                className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 lg:mb-3 flex items-center justify-center rounded"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <Users className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs lg:text-sm font-bold text-slate-800 dark:text-white mb-1 lg:mb-2">
                Equipa Experiente
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Profissionais com vasta experiência em certificação e segurança.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white  dark:bg-gray-800 p-4 lg:p-5 text-center shadow-md dark:shadow-gray-700/20 rounded-lg border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <motion.div
                className="w-10 h-10 lg:w-12 lg:h-12 bg-brand-main dark:bg-brand-main mx-auto mb-2 lg:mb-3 flex items-center justify-center rounded"
                whileHover={{
                  rotate: -15,
                  transition: { duration: 0.3 }
                }}
              >
                <ThumbsUp className="text-white dark:text-white" size={18} />
              </motion.div>
              <h3 className="text-xs lg:text-sm font-bold text-slate-800 dark:text-white mb-1 lg:mb-2">
                Clientes Satisfeitos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs leading-tight">
                Atuação reconhecida com resultados consistentes em todo o país.
              </p>
            </motion.div>
          </div>
        </motion.div>
        </>
    )
}