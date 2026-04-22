"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    { name: "María González", text: "Después de años sintiéndome insuficiente, finalmente encontré paz conmigo misma. El programa de Ainara cambió mi vida de una forma que nunca imaginé posible.", rating: 5, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
    { name: "Laura Martínez", text: "No puedo creer lo diferente que me siento. La voz crítica que me acompañó toda mi vida ahora es una voz de amor y compasión. Gracias, Ainara.", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-brand-beige/30 to-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">Historias reales de transformación</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }} className="bg-white rounded-2xl p-8 shadow-xl shadow-brand-mid-green/10 space-y-6 transition-transform duration-300 hover:scale-105 border border-brand-beige">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed italic text-balance">"{testimonial.text}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <p className="font-medium text-brand-dark-green">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;