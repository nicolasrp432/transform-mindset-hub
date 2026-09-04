"use client";
import React from "react";
import { motion } from "framer-motion";
import CountdownToMonthEnd from "@/components/landing/CountdownToMonthEnd";

const AnnouncementBar = () => {
  const handleCTA = () => {
    const ctaSection = document.getElementById("cta");
    if (ctaSection) ctaSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="offer-banner w-full bg-primary text-white py-2.5 px-4"
    >
      <div className="container-editorial flex items-center justify-center gap-2 sm:gap-4 text-center text-xs sm:text-sm">
        <CountdownToMonthEnd />
        <button
          onClick={handleCTA}
          className="hidden lg:block ml-4 font-bold underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          ¡Lo quiero ahora!
        </button>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
