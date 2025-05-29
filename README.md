# Documentación de la Landing Page de Orbiq

## Descripción General

Esta landing page ha sido diseñada y desarrollada para Orbiq, una plataforma SaaS de Product Management impulsada por IA. El diseño sigue un estilo neo futurista con un enfoque en usuarios que buscan crear productos nuevos rápidamente, especialmente startuperos, creadores independientes y product managers en etapas iniciales de desarrollo de MVPs.

## Características Principales

- **Diseño Neo Futurista**: Modo oscuro con acentos neón, gradientes dinámicos y efectos visuales modernos
- **Experiencia Responsiva**: Adaptada para dispositivos móviles, tablets y escritorio
- **Animaciones Sutiles**: Implementadas con Framer Motion para mejorar la experiencia de usuario
- **Estructura Optimizada**: Organizada para maximizar conversiones y comunicar claramente el valor de Orbiq

## Tecnologías Utilizadas

- React.js
- Tailwind CSS
- Framer Motion (animaciones)
- React Scroll (navegación suave)
- React Icons (iconografía)

## Estructura de la Landing Page

1. **Navbar**: Navegación principal con enlaces a las diferentes secciones
2. **Hero**: Presentación principal con propuesta de valor y visualización orbital del sistema multiagente
3. **Solution**: Comparativa del problema y la solución que ofrece Orbiq
4. **Features**: Características principales para desarrollo rápido de MVPs
5. **Roadmap**: Visualización del futuro desarrollo de Orbiq
6. **Testimonials**: Prueba social con testimonios y métricas de impacto
7. **CTA**: Llamada a la acción para unirse a la beta cerrada
8. **Footer**: Información adicional y enlaces

## Personalización

La landing page puede ser personalizada fácilmente a través de:

- **Variables CSS**: Colores principales definidos en el archivo `index.css`
- **Componentes Modulares**: Cada sección está en un archivo separado para facilitar modificaciones
- **Tailwind Config**: Extensiones y personalizaciones en `tailwind.config.js`

## Instrucciones de Despliegue

### Desarrollo Local

1. Navegar al directorio del proyecto:
   ```
   cd orbiq-landing
   ```

2. Instalar dependencias (si no se ha hecho ya):
   ```
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```
   npm start
   ```

4. Abrir el navegador en `http://localhost:3000`

### Producción

1. Generar build de producción:
   ```
   npm run build
   ```

2. El resultado se encontrará en la carpeta `build/`

3. Desplegar los archivos de la carpeta `build/` en cualquier servicio de hosting estático (Netlify, Vercel, GitHub Pages, etc.)

## Recomendaciones Adicionales

- Conectar el formulario de CTA a un servicio de gestión de leads (Mailchimp, HubSpot, etc.)
- Implementar Google Analytics para seguimiento de conversiones
- Considerar A/B testing para optimizar la tasa de conversión
- Actualizar regularmente el roadmap y testimonios conforme evolucione el producto
