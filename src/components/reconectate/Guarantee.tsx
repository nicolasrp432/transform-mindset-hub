import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="bg-brand-beige/40 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-sm border border-brand-beige">
          <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center shadow-md">
            <ShieldCheck className="w-8 h-8 text-brand-gold" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Garantía de satisfacción</h2>
            <p className="text-lg text-foreground/80 leading-relaxed text-balance">Este programa tiene una garantía de satisfacción de 7 días. Si sientes que no es para ti, te devolvemos tu inversión. Sin preguntas, sin juicios, con amor.</p>
          </div>
          <div className="pt-6 border-t border-brand-beige">
            <p className="text-foreground/70 mb-2">Con cariño,</p>
            <p className="text-2xl font-bold text-brand-dark-green" style={{ fontFamily: "'Playfair Display', serif" }}>Ainara 💖</p>
            <p className="text-sm text-foreground/60 mt-2">Mentora en autoconfianza y seguridad interior</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;