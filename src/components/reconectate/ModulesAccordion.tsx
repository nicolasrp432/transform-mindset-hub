"use client";
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ModulesAccordion = () => {
  const modules = [
    { week: "Semana 1", title: "Reconoce tu voz crítica", description: "Aprende a identificar los patrones de autocrítica y entiende de dónde vienen. Descubre cómo tu mente ha estado intentando protegerte." },
    { week: "Semana 2", title: "Desactiva la autocrítica automática", description: "Técnicas de neurociencia emocional para interrumpir los pensamientos críticos antes de que te afecten. Crea nuevos circuitos neuronales de compasión." },
    { week: "Semana 3", title: "Reconecta con tu esencia", description: "Prácticas de presencia consciente para volver a tu centro. Aprende a escuchar tu verdad interior sin juicio." },
    { week: "Semana 4", title: "Reprograma tu diálogo interno", description: "Transforma la autocrítica en autocompasión. Desarrolla un nuevo lenguaje interno que te apoye y te impulse." },
    { week: "Semana 5", title: "Construye tu autoestima inquebrantable", description: "Crea una base sólida de confianza que no dependa de la validación externa. Aprende a valorarte desde tu interior." },
    { week: "Semana 6", title: "Integra y expande tu nueva realidad", description: "Consolida tu transformación y crea un plan para mantener tu seguridad interior a largo plazo. Celebra tu nueva relación contigo misma." },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }} className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Lo que aprenderás en 6 semanas</h3>
      <Accordion type="single" collapsible className="space-y-4">
        {modules.map((module, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="bg-white border-brand-beige/50 rounded-2xl px-6 shadow-sm hover:shadow-lg hover:shadow-brand-mid-green/10 transition-all duration-300">
            <AccordionTrigger className="text-left hover:no-underline py-6">
              <div className="space-y-1">
                <p className="text-lg text-brand-mid-green font-medium">{module.week}</p>
                <p className="text-lg font-semibold text-brand-dark-green">{module.title}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <p className="text-foreground/70 leading-relaxed">{module.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

export default ModulesAccordion;