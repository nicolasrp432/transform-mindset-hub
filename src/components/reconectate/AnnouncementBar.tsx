"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const AnnouncementBar = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCTA = () => {
    const ctaSection = document.getElementById("cta");
    if (ctaSection) ctaSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-primary text-primary-foreground py-2.5 px-4 shadow-lg"
    >
      <div className="container-custom flex items-center justify-center gap-2 sm:gap-4 text-center text-xs sm:text-sm">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
        <p className="font-semibold">
          <span className="hidden md:inline">¡Oferta de lanzamiento termina en!</span>
          <span className="md:hidden">¡Oferta termina en!</span>
        </p>
        <div className="flex items-center gap-1.5 font-mono font-bold text-sm sm:text-base">
          <span>{String(timeLeft.hours).padStart(2, "0")}</span>:
          <span>{String(timeLeft.minutes).padStart(2, "0")}</span>:
          <span className="w-8">{String(timeLeft.seconds).padStart(2, "0")}</span>
        </div>
        <button onClick={handleCTA} className="hidden lg:block ml-4 text-brand-gold font-bold underline underline-offset-4 hover:text-white transition-colors">
          ¡Lo quiero ahora!
        </button>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;