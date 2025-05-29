import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="relative py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-bg-primary rounded-lg p-8 md:p-12 border border-accent-primary border-opacity-30 relative overflow-hidden"
          >
            {/* Efecto de partículas de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-tertiary/10 to-accent-primary/10"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                  Comienza a Crear el Futuro Hoy
                </h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                  Únete a nuestra beta cerrada y sé de los primeros en transformar tu forma de crear productos digitales con Orbiq.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nombre completo" 
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-accent-primary border-opacity-30 text-text-primary focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-accent-primary border-opacity-30 text-text-primary focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      placeholder="Empresa / Proyecto" 
                      className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-accent-primary border-opacity-30 text-text-primary focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full btn-primary text-lg py-4"
                      type="submit"
                    >
                      Únete a la Beta Cerrada
                    </motion.button>
                  </div>
                </form>
                <p className="text-text-secondary text-sm mt-4 text-center">
                  Plazas limitadas. Prioridad para creadores y startuperos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
