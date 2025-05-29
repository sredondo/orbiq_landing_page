import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const roadmapSteps = [
    {
      phase: "MVP Discovery",
      status: "Actual",
      description: "Investigación de mercado, análisis competitivo y definición estratégica para validar ideas de producto.",
      features: ["Análisis de mercado IA", "Generación de ideas", "Definición de OKRs", "Wireframes básicos"],
      color: "accent-primary"
    },
    {
      phase: "Desarrollo Completo",
      status: "Próximo",
      description: "Implementación técnica del producto con asistencia de IA para código, documentación y coordinación.",
      features: ["Generación de código", "Revisiones automáticas", "Documentación técnica", "Integración continua"],
      color: "accent-secondary"
    },
    {
      phase: "QA & Testing",
      status: "Futuro",
      description: "Validación exhaustiva con generación y ejecución de pruebas automatizadas y detección de anomalías.",
      features: ["Tests automatizados", "Detección de errores", "Validación de UX", "Optimización de rendimiento"],
      color: "accent-tertiary"
    },
    {
      phase: "Lanzamiento & Medición",
      status: "Futuro",
      description: "Preparación para el lanzamiento con materiales de marketing, analíticas y monitoreo post-release.",
      features: ["Copywriting IA", "Configuración de analíticas", "Estrategia de lanzamiento", "Monitoreo en tiempo real"],
      color: "accent-primary"
    },
    {
      phase: "Soporte & Iteración",
      status: "Futuro",
      description: "Mejora continua basada en feedback de usuarios, detección de oportunidades y roadmap evolutivo.",
      features: ["Centralización de feedback", "Análisis de sentimiento", "Priorización de mejoras", "A/B testing"],
      color: "accent-secondary"
    }
  ];

  return (
    <section id="roadmap" className="relative py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            El Futuro de Orbiq
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Nuestra visión es crear un ecosistema completo de agentes IA especializados que acompañen todo el ciclo de vida del producto.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-bg-primary transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 p-4">
                  <div className={`relative p-6 rounded-lg border border-${step.color} border-opacity-30 bg-bg-primary`}>
                    <div className={`absolute top-0 left-0 w-full h-1 bg-${step.color} opacity-70 rounded-t-lg`}></div>
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-orbitron font-bold mr-3">{step.phase}</h3>
                      <span 
                        className={`text-xs font-medium py-1 px-2 rounded-full ${
                          step.status === 'Actual' 
                            ? 'bg-accent-primary bg-opacity-20 text-accent-primary' 
                            : 'bg-text-secondary bg-opacity-20 text-text-secondary'
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>
                    <p className="text-text-secondary mb-4">{step.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full bg-${step.color} mr-2`}></div>
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:flex w-1/2 items-center justify-center relative">
                  <div 
                    className={`w-8 h-8 rounded-full bg-${step.color} z-10 flex items-center justify-center`}
                  >
                    <div className="w-4 h-4 rounded-full bg-bg-primary"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button className="btn-primary">
            Sé parte de nuestra evolución
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;
