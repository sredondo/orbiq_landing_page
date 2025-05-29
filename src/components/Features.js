import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiBriefcase, FiTarget, FiLayers, FiCode } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Investigación de Mercado IA",
      description: "Análisis automático de nichos, tendencias y oportunidades de mercado para validar tu idea de producto.",
      color: "accent-primary"
    },
    {
      icon: <FiBriefcase className="w-8 h-8" />,
      title: "Generación de Ideas",
      description: "Propuestas innovadoras basadas en datos reales y análisis competitivo para diferenciarte.",
      color: "accent-secondary"
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Definición de OKRs/KPIs",
      description: "Objetivos medibles automatizados alineados con tu visión de producto y mercado objetivo.",
      color: "accent-tertiary"
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: "Wireframes y Prototipos",
      description: "Visualización rápida de conceptos con mockups interactivos listos para validar con usuarios.",
      color: "accent-primary"
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Exportación a Herramientas",
      description: "Integración perfecta con Lovable y otras plataformas para continuar el desarrollo de tu MVP.",
      color: "accent-secondary"
    }
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Acelera tu MVP con Inteligencia Artificial
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Orbiq potencia cada etapa del desarrollo de tu producto con agentes de IA especializados, 
            permitiéndote validar ideas y crear MVPs en tiempo récord.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-secondary rounded-lg p-6 border border-opacity-20"
              style={{ borderColor: `var(--color-${feature.color})` }}
            >
              <div 
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-${feature.color}`}
                style={{ backgroundColor: `var(--color-${feature.color})`, opacity: 0.2 }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-orbitron font-bold mb-6">
            <span className="gradient-text">¿Por qué Orbiq es Diferente?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-bg-secondary p-6 rounded-lg">
              <h4 className="font-orbitron font-bold text-accent-primary mb-3">No es una herramienta no-code</h4>
              <p className="text-text-secondary">Es un orquestador inteligente que toma decisiones estratégicas y operativas basadas en contexto.</p>
            </div>
            
            <div className="bg-bg-secondary p-6 rounded-lg">
              <h4 className="font-orbitron font-bold text-accent-secondary mb-3">Adaptación contextual</h4>
              <p className="text-text-secondary">Se adapta a tu rol, proyecto y etapa, ofreciendo asistencia personalizada en cada momento.</p>
            </div>
            
            <div className="bg-bg-secondary p-6 rounded-lg">
              <h4 className="font-orbitron font-bold text-accent-tertiary mb-3">Integración con herramientas</h4>
              <p className="text-text-secondary">Se integra con las plataformas que ya usas, aumentándolas con inteligencia contextual.</p>
            </div>
            
            <div className="bg-bg-secondary p-6 rounded-lg">
              <h4 className="font-orbitron font-bold text-accent-primary mb-3">Co-equipero AI-first</h4>
              <p className="text-text-secondary">Colabora contigo en tiempo real como un verdadero miembro del equipo, no solo como una herramienta.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
