import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bg-primary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-orbitron font-bold gradient-text mb-2">
              Orbiq
            </div>
            <p className="text-text-secondary max-w-xs">
              Plataforma SaaS de Product Management impulsada por IA para transformar ideas en MVPs en tiempo récord.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-orbitron font-bold mb-4 text-text-primary">Producto</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-text-secondary hover:text-accent-primary transition-colors">Características</a></li>
                <li><a href="#roadmap" className="text-text-secondary hover:text-accent-primary transition-colors">Roadmap</a></li>
                <li><a href="/precios" className="text-text-secondary hover:text-accent-primary transition-colors">Precios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold mb-4 text-text-primary">Recursos</h4>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-text-secondary hover:text-accent-primary transition-colors">Blog</a></li>
                <li><a href="/documentacion" className="text-text-secondary hover:text-accent-primary transition-colors">Documentación</a></li>
                <li><a href="/tutoriales" className="text-text-secondary hover:text-accent-primary transition-colors">Tutoriales</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold mb-4 text-text-primary">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="/sobre-nosotros" className="text-text-secondary hover:text-accent-primary transition-colors">Sobre nosotros</a></li>
                <li><a href="/contacto" className="text-text-secondary hover:text-accent-primary transition-colors">Contacto</a></li>
                <li><a href="/terminos" className="text-text-secondary hover:text-accent-primary transition-colors">Términos</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-text-secondary border-opacity-10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Orbiq. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-4">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
