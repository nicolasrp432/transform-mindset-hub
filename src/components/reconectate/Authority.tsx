import React from "react";
import { motion } from "framer-motion";

const Authority = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-brand-beige to-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Yo también viví atrapada en la autocrítica constante…</h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>Durante años, sentí que nada de lo que hacía era suficiente. Por fuera parecía que todo estaba bien, pero por dentro había una voz constante que me decía que podía hacerlo mejor, que no era suficiente.</p>
              <p>Hasta que descubrí que esa voz no era mi enemiga. Era solo una parte de mí que necesitaba ser escuchada con amor, no con juicio.</p>
              <p>Hoy ayudo a mujeres como tú a transformar esa relación con su mente crítica, para que puedan vivir desde la confianza, la paz y el amor propio.</p>
            </div>
            <div className="pt-4">
              <p className="text-lg font-medium text-brand-dark-green">— Ainara</p>
              <p className="text-sm text-foreground/70">Mentora en autoconfianza y seguridad interior</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-brand-mid-green/20">
              <img alt="Ainara - Mentora en autoconfianza" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/9db00194-eaa0-43d2-a54c-b874713e848e/generated-image-october-29-2025---6_29pm-Cwss0.png" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Authority;