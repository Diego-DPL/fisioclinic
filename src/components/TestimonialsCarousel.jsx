import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "./ui/card";
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    quote: "El trato fue inmejorable y la recuperación de mi lesión de rodilla fue más rápida de lo que esperaba. ¡Grandes profesionales!",
    name: "María García",
    city: "Murcia",
  },
  {
    quote: "Gracias a las clases de pilates con reformer he mejorado muchísimo mi postura y han desaparecido mis dolores de espalda. Totalmente recomendado.",
    name: "Juan Pérez",
    city: "Alcantarilla",
  },
  {
    quote: "Utilizan tecnología muy avanzada que me ayudó a entender perfectamente mi lesión. El plan de tratamiento personalizado fue clave.",
    name: "Laura Martínez",
    city: "Molina de Segura",
  },
  {
    quote: "Un equipo muy cercano y profesional. Me sentí en las mejores manos desde el primer día. ¡Mi centro de fisioterapia de confianza!",
    name: "Carlos Sánchez",
    city: "Murcia",
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFading(false);
      }, 500); // Coincide con la duración de la transición de opacidad
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  const { quote, name, city } = testimonials[currentIndex];

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-green-100 shadow-lg overflow-hidden">
        <CardContent className={`p-8 md:p-12 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xl md:text-2xl italic text-green-principal mb-6">"{quote}"</p>
            <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-green-secundario/20 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-green-principal" />
                </div>
                <div>
                    <p className="font-bold text-lg text-gray-900">{name}</p>
                    <p className="text-gray-500">{city}</p>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestimonialsCarousel;
