"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export default function TextReveal({
  text,
  className = "",
  as: Component = "h1",
  id,
}: TextRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // The "guante blanco" ease requested
      },
    },
  };

  // @ts-ignore (motion component typing workaround)
  const MotionComponent: any = motion[Component as keyof typeof motion] || motion.h1;

  return (
    <MotionComponent
      id={id}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            overflow: "hidden",
            marginRight: "0.25em",
          }}
        >
          <motion.span style={{ display: "inline-block" }} variants={child}>
             {/* Note: handling newlines \n specifically if passed, otherwise just simple text. 
             If user passes children we normally would map children, but we enforce text prop */}
            {word === "<br/>" ? <br /> : word}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
}
