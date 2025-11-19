import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Problem = () => {
  const questions = [
    "¿Te pasa que sientes que nunca es suficiente?",
    "¿Que aunque avances, una voz dentro de ti te dice que podrías hacerlo mejor?",
    "¿Que te cuesta disfrutar o sentirte en paz contigo misma?",
  ];

  return (
    <section className="py-16 px-4 bg-brand-beige">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">Tu mente crítica no te odia… solo aprendió a protegerte de la forma equivocada.</h2>
        </motion.div>
        <div className="space-y-6 max-w-2xl mx-auto">
          {questions.map((question, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} className="flex items-start gap-4 text-left">
              <CheckCircle2 className="w-8 h-8 text-brand-mid-green mt-1 flex-shrink-0" />
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance">{question}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.8, delay: 0.6, type: "spring" }} className="pt-6">
          <p className="text-xl md:text-2xl text-brand-dark-green font-medium bg-white/60 px-6 py-4 rounded-xl inline-block shadow-sm">No estás sola. La mayoría hemos crecido con exigencias imposibles.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;