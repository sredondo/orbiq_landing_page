import React from 'react';
import { motion } from 'framer-motion';

const Solution = () => {
  return (
    <section id="solution" className="relative py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Del Caos a la Claridad en el Desarrollo de Productos
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            El desarrollo de MVPs tradicional es lento, costoso y arriesgado. Orbiq transforma este proceso con inteligencia artificial especializada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-bg-primary p-6 rounded-lg border border-accent-tertiary border-opacity-30">
              <h3 className="text-xl font-orbitron font-bold text-accent-secondary mb-3">El Problema</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-accent-secondary mr-2">✗</span>
                  <span>Equipos fragmentados con herramientas desconectadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-secondary mr-2">✗</span>
                  <span>Ciclos de desarrollo largos y costosos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-secondary mr-2">✗</span>
                  <span>Pérdida de conocimiento entre etapas del producto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-secondary mr-2">✗</span>
                  <span>Herramientas no-code limitadas en personalización</span>
                </li>
              </ul>
            </div>

            <div className="bg-bg-primary p-6 rounded-lg border border-accent-primary border-opacity-30">
              <h3 className="text-xl font-orbitron font-bold text-accent-primary mb-3">La Solución Orbiq</h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">✓</span>
                  <span>Sistema multiagente de IA que orquesta todo el proceso</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">✓</span>
                  <span>Reducción de tiempos de entrega hasta un 70%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">✓</span>
                  <span>Integración con herramientas existentes (Jira, Figma, GitHub)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-primary mr-2">✓</span>
                  <span>Toma de decisiones estratégicas basadas en datos</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-accent-primary border-opacity-20">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-tertiary/10 to-accent-primary/10"></div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-orbitron font-bold mb-6 gradient-text">¿Cómo funciona?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-primary bg-opacity-20 flex items-center justify-center mr-4">
                      <span className="text-accent-primary font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-orbitron font-bold mb-1">Análisis y Discovery</h4>
                      <p className="text-text-secondary">Orbiq analiza el mercado, la competencia y las tendencias para validar tu idea.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-secondary bg-opacity-20 flex items-center justify-center mr-4">
                      <span className="text-accent-secondary font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-orbitron font-bold mb-1">Definición Estratégica</h4>
                      <p className="text-text-secondary">Creación de OKRs, buyer personas y propuestas de valor basadas en datos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-tertiary bg-opacity-20 flex items-center justify-center mr-4">
                      <span className="text-accent-tertiary font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-orbitron font-bold mb-1">Prototipado Rápido</h4>
                      <p className="text-text-secondary">Generación de wireframes, mockups y prototipos interactivos listos para exportar.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
