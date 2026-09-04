"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

/** Iniciales para el avatar, sin depender de una foto. */
const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      text: "Después de años sintiéndome insuficiente, finalmente encontré paz conmigo misma. El programa de Ainara cambió mi vida de una forma que nunca imaginé posible.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      text: "No puedo creer lo diferente que me siento. La voz crítica que me acompañó toda mi vida ahora es una voz de amor y compasión. Gracias, Ainara.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-surface to-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">Historias reales de transformación</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }} className="bg-white rounded-2xl p-8 shadow-xl shadow-primary/10 space-y-6 transition-transform duration-300 hover:scale-105 border border-border">
              <div className="flex gap-1" aria-label={`${testimonial.rating} de 5 estrellas`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic text-balance">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <span
                  className="w-12 h-12 rounded-full bg-mark-soft text-mark-on-soft font-serif text-lg flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  {initials(testimonial.name)}
                </span>
                <p className="font-medium text-text">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
