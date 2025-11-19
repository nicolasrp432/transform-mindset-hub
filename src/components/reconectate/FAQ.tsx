import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    { question: "¿Para quién es este producto?", answer: "Este programa está diseñado para mujeres que se sienten atrapadas en la autocrítica, el perfeccionismo y la duda constante. Si buscas transformar tu diálogo interno, construir una confianza genuina que no dependa de factores externos y sanar tu relación contigo misma, 'Re-Conéctate' es para ti." },
    { question: "¿Cómo funciona el 'Plazo de Garantía'?", answer: "Tienes una garantía de satisfacción total de 7 días a partir de la fecha de compra. Si durante esa primera semana sientes que el programa no es lo que esperabas, puedes solicitar la devolución completa de tu inversión. Lo procesaremos de forma rápida, sin preguntas ni complicaciones." },
    { question: "¿Cómo acceder al producto?", answer: "Inmediatamente después de confirmar tu compra, recibirás un correo electrónico con los datos de acceso a la plataforma del curso. Podrás acceder al contenido desde cualquier dispositivo (ordenador, tablet o móvil) las 24 horas del día, para que avances a tu propio ritmo." },
    { question: "¿Cómo hago para comprar?", answer: "Es muy sencillo. Haz clic en cualquiera de los botones de compra de esta página. Serás redirigida a la pasarela de pago segura de Hotmart, donde podrás completar tu inscripción con tarjeta de crédito, débito o PayPal. El proceso es 100% seguro y rápido." },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">Preguntas Frecuentes</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Aquí resolvemos las dudas más comunes para que tomes tu decisión con total confianza.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-brand-beige/30 border-brand-beige/50 rounded-2xl px-6 shadow-sm hover:shadow-md hover:shadow-brand-mid-green/10 transition-all duration-300">
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-semibold text-brand-dark-green">{item.question}</AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;