"use client";
import React from "react";
import { motion } from "framer-motion";
import { Gift, BookOpen, Users } from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import { formatAmount, PRODUCTS } from "@/lib/products";

// Los tres bonos son las entradas 2-4 del desglose de valor del programa, así
// que sus importes salen de products.ts y no pueden desalinearse del anclaje.
const BONUS_VALUES = PRODUCTS.RE_CONECTATE.valueStack.slice(1);

const Bonuses = () => {
  const icons = [
    <Gift key="gift" className="w-8 h-8 text-text" />,
    <BookOpen key="book" className="w-8 h-8 text-text" />,
    <Users key="users" className="w-8 h-8 text-text" />,
  ];

  const bonusesData = BONUS_VALUES.map((bonus, index) => ({
    icon: icons[index],
    title: bonus.label,
    value: formatAmount(bonus.amount, PRODUCTS.RE_CONECTATE.currency),
  }));

  const bonusesTotal = formatAmount(
    BONUS_VALUES.reduce((sum, bonus) => sum + bonus.amount, 0),
    PRODUCTS.RE_CONECTATE.currency
  );

  return (
    <section className="py-16 px-4 bg-base">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-balance">¡Y eso no es todo! Recibe estos bonos exclusivos</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">Para potenciar tu transformación, he preparado estos regalos que complementarán tu camino.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusesData.map((bonus, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }} className="bg-white rounded-3xl p-6 space-y-4 shadow-xl shadow-primary/10 border border-white hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-base mx-auto">{bonus.icon}</div>
              <h3 className="text-xl font-semibold text-text">{bonus.title}</h3>
              <p className="text-lg font-bold text-primary">Valor: {bonus.value}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} className="space-y-6 pt-6">
          <p className="text-2xl md:text-3xl font-bold text-text">Valor total en bonos: <span className="text-primary">{bonusesTotal}</span></p>
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <CheckoutButton productKey={PRODUCTS.RE_CONECTATE.key} className="px-8 py-6 text-base sm:text-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">🌸 Sí, quiero mis bonos</CheckoutButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bonuses;