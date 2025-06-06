import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Orbiq redujo nuestro tiempo de desarrollo de MVP en un 65%. Lo que antes nos tomaba meses, ahora lo logramos en semanas.",
      author: "Sebastian Redondo",
      position: "Fundador de Orbiq",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "Como project manager, Orbiq me ha permitido validar ideas y crear prototipos funcionales sin depender de equipos técnicos completos.",
      author: "Federico Villegas",
      position: "Fundador de Orbiq",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "La capacidad de Orbiq para integrar investigación de mercado con prototipado rápido ha transformado nuestra forma de innovar.",
      author: "Ana Gómez",
      position: "CEO de FutureTech",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section id="testimonials" className="relative py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Quienes Ya Confían en Orbiq
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Startups y product managers ya están transformando su forma de crear productos digitales con nuestra plataforma.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-secondary p-6 rounded-lg border border-accent-primary border-opacity-10"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent-primary">
                  <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold">{testimonial.author}</h4>
                  <p className="text-text-secondary text-sm">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-text-secondary italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-bg-secondary p-8 rounded-lg border border-accent-tertiary border-opacity-20">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-orbitron font-bold mb-2">Métricas de Impacto</h3>
                <p className="text-text-secondary">Resultados reales de nuestros casos piloto</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
                <div className="text-center">
                  <div className="text-4xl font-orbitron font-bold gradient-text mb-1">70%</div>
                  <p className="text-text-secondary text-sm">Reducción en tiempos de entrega</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-orbitron font-bold gradient-text mb-1">85%</div>
                  <p className="text-text-secondary text-sm">Satisfacción de usuarios</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-orbitron font-bold gradient-text mb-1">50%</div>
                  <p className="text-text-secondary text-sm">Reducción de costos</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
