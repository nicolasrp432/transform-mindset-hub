import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Interfaces
interface Testimonial {
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
}

interface Stat {
  value: string;
  label: string;
  color: string;
  bgColor: string;
  delay: number;
}

// Reusable Components
interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex justify-center mb-4 animate-bounce-in animate-delay-500">
      {Array.from({ length: rating }, (_, i) => (
        <span key={i} className="text-accent text-xl">★</span>
      ))}
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <Card 
      className="p-8 relative"
    >
      {/* Quote Mark */}
      <div className="absolute -top-4 -left-4 text-6xl text-accent opacity-20 font-accent">
        "
      </div>

      <div className="relative z-10">
        {/* Rating */}
        <StarRating rating={testimonial.rating} />

        {/* Quote */}
        <blockquote className="text-muted-foreground font-body leading-relaxed mb-6 font-accent italic animate-fade-in-up animate-delay-600">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center space-x-4 pt-6 border-t border-border animate-slide-in-up animate-delay-700">
          <img 
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover hover-scale transition-transform duration-300"
          />
          <div>
            <h4 className="font-heading font-semibold text-card-foreground">
              {testimonial.name}
            </h4>
            <p className="text-sm text-muted-foreground">
              {testimonial.position}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <Card 
      className={`text-center p-6 ${stat.bgColor} animate-slide-in-left animate-delay-${stat.delay}`}
    >
      <div className={`text-4xl font-heading font-bold ${stat.color} mb-2 animate-zoom-in animate-delay-${stat.delay + 100}`}>
        {stat.value}
      </div>
      <div className="text-muted-foreground font-body">{stat.label}</div>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Mendoza",
      position: "Director General, Empresa Tecnológica",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: "Trabajar con Ainara ha sido transformador para mi liderazgo. En 6 meses logré mejorar significativamente la comunicación con mi equipo y reducir los conflictos internos en un 80%. Su enfoque con PNL me ayudó a identificar y cambiar patrones que llevaba años arrastrando.",
      rating: 5
    },
    {
      name: "María José Fernández",
      position: "Gerente de Recursos Humanos, Multinacional",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: "La metodología de Ainara es única. Su combinación de inteligencia emocional y coaching ejecutivo me permitió gestionar mejor el estrés y liderar con mayor autenticidad. Mi equipo nota la diferencia y los resultados hablan por sí solos: 40% de mejora en satisfacción laboral.",
      rating: 5
    },
    {
      name: "Javier Ruiz",
      position: "Emprendedor y CEO, Startup Fintech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: "Ainara me ayudó a superar mis bloqueos como líder novel. Sus técnicas de PNL fueron clave para desarrollar confianza en mí mismo y mejorar mi capacidad de toma de decisiones bajo presión. Hoy lidero mi empresa con una claridad que antes no tenía.",
      rating: 5
    }
  ];

  const stats: Stat[] = [
    {
      value: "95%",
      label: "Mejora en Liderazgo",
      color: "text-primary",
      bgColor: "bg-primary/5",
      delay: 900
    },
    {
      value: "90%",
      label: "Reducción de Conflictos",
      color: "text-secondary",
      bgColor: "bg-secondary/5",
      delay: 1000
    },
    {
      value: "88%",
      label: "Satisfacción del Cliente",
      color: "text-accent",
      bgColor: "bg-accent/5",
      delay: 1100
    }
  ];

  return (
    <section id="testimonials" className="bg-background section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center space-x-4 mb-6 animate-slide-in-down animate-delay-200">
            <div className="h-1 w-16 bg-accent rounded-full animate-slide-in-left"></div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground animate-zoom-in">
              Historias de Transformación
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full animate-slide-in-right"></div>
          </div>
          <p className="text-xl font-body text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
            Descubre cómo profesionales como tú han transformado su liderazgo y alcanzado resultados extraordinarios.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animate-delay-800">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animate-delay-1300">
          <Button 
            variant="default"
            size="lg"
            onClick={() => document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover-glow"
          >
            Únete a estas Historias de Éxito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;