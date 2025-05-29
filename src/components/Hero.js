import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Particles Background Effect */}
      <div className="particles-bg">
        {/* Implementado con CSS y posicionamiento absoluto */}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
              <span className="gradient-text">Orbiq:</span> <br />
              <span className="neon-text">El Orquestador IA</span> <br />
              que Revoluciona el Desarrollo de Productos
            </h1>
            
            <p className="text-text-secondary text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Transforma ideas en MVPs en tiempo récord con nuestro sistema multiagente de IA especializada. Reduce tiempos de entrega hasta un 70%.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg"
              >
                Únete a la Beta Cerrada
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:bg-opacity-10 font-orbitron font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Ver Demo
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Orbiq System Visualization - Representación orbital */}
                <div className="absolute inset-0 rounded-full border-4 border-accent-primary opacity-20 animate-pulse"></div>
                <div className="absolute inset-8 rounded-full border-4 border-accent-secondary opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-16 rounded-full border-4 border-accent-tertiary opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Central Orbiq Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-bg-secondary flex items-center justify-center neon-border">
                    <span className="text-3xl font-orbitron font-bold gradient-text">O</span>
                  </div>
                </div>
                
                {/* Agent Nodes */}
                <motion.div 
                  className="absolute top-1/4 right-0 w-12 h-12 rounded-full bg-accent-primary bg-opacity-20 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center">
                    <span className="text-xs font-bold">PM</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-full bg-accent-secondary bg-opacity-20 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent-secondary flex items-center justify-center">
                    <span className="text-xs font-bold">UX</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/3 left-0 w-14 h-14 rounded-full bg-accent-tertiary bg-opacity-20 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-10 h-10 rounded-full bg-accent-tertiary flex items-center justify-center">
                    <span className="text-xs font-bold">DEV</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <p className="text-text-secondary mb-2 text-sm">Descubre más</p>
          <div className="w-6 h-10 rounded-full border-2 border-text-secondary flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accent-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
