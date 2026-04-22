"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { CheckCircle2, ArrowRight, ArrowLeft, Brain, Battery, Users, Grip, Search } from "lucide-react";
import { FloatingInput } from "@/components/ui/FloatingInput";
import Link from "next/link";
import { submitEvaluacion } from "@/app/actions/evaluacion";

/* ============================================================
   Autoevaluación — Embudo de captación paso a paso
   Silencio Arquitectónico: una pregunta a la vez,
   transiciones fluidas, captura final de lead.
   ============================================================ */

const CALENDLY_URL = "/sesiones";
const WHATSAPP_URL =
  "https://wa.me/34692627353?text=Hola%20Ainara%2C%20acabo%20de%20hacer%20la%20autoevaluaci%C3%B3n%20y%20me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n...";

const OPTIONS = ["Sí", "A veces", "No"] as const;

interface Question {
  id: number;
  text: string;
  subtext: string;
  icon: React.ReactNode;
}

const questions: Question[] = [
  {
    id: 1,
    text: "¿Sientes que tus pensamientos van más rápido de lo que puedes procesar?",
    subtext: "El ruido mental constante es una de las primeras señales de saturación.",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    id: 2,
    text: "¿Te cuesta desconectar del trabajo o las preocupaciones al final del día?",
    subtext: "La incapacidad de soltar indica un sistema nervioso en alerta permanente.",
    icon: <Battery className="w-8 h-8" />,
  },
  {
    id: 3,
    text: "¿Sientes que las emociones de los demás te sobrepasan o te agotan?",
    subtext: "La porosidad emocional es más común de lo que crees — y tiene solución.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 4,
    text: "¿Sientes tensión física recurrente (cuello, hombros, mandíbula) sin razón aparente?",
    subtext: "El cuerpo acumula lo que la mente no procesa. La tensión crónica es un mensaje.",
    icon: <Grip className="w-8 h-8" />,
  },
  {
    id: 5,
    text: "¿Te resulta difícil tomar decisiones sencillas porque sobreanalizas cada detalle?",
    subtext: "La parálisis por análisis es señal de un sistema mental sobrecargado.",
    icon: <Search className="w-8 h-8" />,
  },
];

const LeadSchema = z.object({
  name: z.string().min(2, "Me encantaría saber tu nombre."),
  email: z.string().email("Necesito un email válido para enviarte el diagnóstico."),
});

type LeadInput = z.infer<typeof LeadSchema>;

// Animation variants
const fadeSlide = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.97 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
};

export default function EvaluacionPage() {
  const [currentStep, setCurrentStep] = useState(0); // 0-4 = questions, 5 = lead capture, 6 = success
  const [answers, setAnswers] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(LeadSchema),
  });

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Move to lead capture
      setCurrentStep(questions.length);
    }
  };

  const onSubmit = async (data: LeadInput) => {
    try {
      const result = await submitEvaluacion({
        name: data.name,
        email: data.email,
        answers,
      });

      if (!result.success) {
        console.error("Error capturando lead de evaluación:", result.error);
        // Soft Fallback: Si falla la BD, de todas formas mostramos la pantalla de éxito
        // No bloqueamos al usuario
      }
    } catch (err) {
      console.error("Error inesperado en submitEvaluacion:", err);
    }

    setCurrentStep(questions.length + 1); // success
  };

  // Determine "score" for result messaging
  const yesCount = answers.filter((a) => a === "Sí").length;
  const sometimesCount = answers.filter((a) => a === "A veces").length;
  const saturationLevel =
    yesCount >= 3
      ? "alto"
      : yesCount + sometimesCount >= 3
        ? "moderado"
        : "leve";

  const saturationMessages = {
    alto: "Tus respuestas indican un nivel alto de saturación mental. Es un patrón que reconozco, y tiene solución.",
    moderado:
      "Tus respuestas muestran señales de saturación moderada. Es el momento ideal para intervenir antes de que escale.",
    leve: "Aunque tus niveles son leves, el hecho de que estés aquí dice mucho sobre tu autoconciencia. Ese es el primer paso.",
  };

  // Progress
  const totalSteps = questions.length + 1; // questions + lead form
  const progressPercent =
    currentStep <= questions.length
      ? ((currentStep) / totalSteps) * 100
      : 100;

  return (
    <div className="min-h-screen bg-[var(--color-base)] flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Funnel escape — Ratio 1:1: sutil, no compite con el CTA */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-20 inline-flex items-center gap-1.5 text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-text)] transition-colors duration-200 font-medium tracking-wide"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Volver a inicio
      </Link>
      {/* Background ambient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-[0.03] blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-3xl" />
      </div>

      {/* Progress bar */}
      {currentStep <= questions.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-50 h-1"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}

      <div className="w-full max-w-xl relative z-10">
        {/* Step counter */}
        {currentStep < questions.length && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.25em] font-medium mb-8 md:mb-12"
          >
            Pregunta {currentStep + 1} de {questions.length}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {/* === QUESTION STEPS === */}
          {currentStep < questions.length && (
            <motion.div
              key={`question-${currentStep}`}
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              {/* Question */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-tight mb-4 max-w-lg mx-auto">
                {questions[currentStep].text}
              </h2>

              <p className="text-[var(--color-text-muted)] text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed">
                {questions[currentStep].subtext}
              </p>

              {/* Answer buttons */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="flex flex-col sm:flex-row gap-3 justify-center"
              >
                {OPTIONS.map((option) => (
                  <motion.button
                    key={option}
                    variants={staggerItem}
                    onClick={() => handleAnswer(option)}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-4 border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors duration-300 font-medium tracking-wide text-sm uppercase cursor-pointer"
                  >
                    {option}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* === LEAD CAPTURE STEP === */}
          {currentStep === questions.length && (
            <motion.div
              key="lead-capture"
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Result card */}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)]/50 p-8 md:p-10 mb-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-base)] via-[var(--color-primary)] to-[var(--color-base)] opacity-40" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.15,
                  }}
                  className="w-14 h-14 mx-auto mb-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center"
                >
                  <Brain className="w-7 h-7 text-[var(--color-primary)]" />
                </motion.div>

                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-subtle)] font-medium mb-3">
                  Nivel de saturación: {saturationLevel}
                </p>

                <h2 className="text-2xl md:text-3xl font-serif mb-4 max-w-md mx-auto leading-snug">
                  {saturationMessages[saturationLevel]}
                </h2>

                <p className="text-[var(--color-text-muted)] text-sm max-w-sm mx-auto leading-relaxed">
                  Déjame tu nombre y correo para enviarte tu diagnóstico detallado y los primeros pasos para recuperar tu centro.
                </p>
              </div>

              {/* Lead form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FloatingInput
                  label="Tu nombre"
                  type="text"
                  {...register("name")}
                  error={errors.name?.message}
                />

                <FloatingInput
                  label="Tu correo electrónico"
                  type="email"
                  {...register("email")}
                  error={errors.email?.message}
                />

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 font-medium tracking-wide cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 1,
                          }}
                        />
                        Procesando...
                      </>
                    ) : (
                      <>
                        Recibir mi diagnóstico
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* === SUCCESS STEP === */}
          {currentStep === questions.length + 1 && (
            <motion.div
              key="success"
              variants={fadeSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1,
                }}
                className="w-16 h-16 bg-[var(--color-surface)] rounded-full flex items-center justify-center mx-auto mb-6 border border-[var(--color-border)]/50"
              >
                <CheckCircle2 className="w-8 h-8 text-[var(--color-primary)]" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-serif mb-3">
                Todo listo.
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg mb-4 max-w-md mx-auto leading-relaxed">
                Tu diagnóstico está en camino. Mientras tanto, te recomiendo dar el siguiente paso.
              </p>

              <hr className="divider-breath mx-auto" />

              <p className="text-[var(--color-text-subtle)] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
                Siguiente paso recomendado
              </p>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-4 max-w-sm mx-auto"
              >
                {/* Calendly CTA */}
                <motion.div
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={CALENDLY_URL}
                    className="w-full py-5 px-8 bg-[var(--color-primary)] text-white hover:opacity-90 transition-all duration-500 flex justify-center items-center gap-4 font-medium tracking-wide uppercase text-sm shadow-lg shadow-[var(--color-primary)]/20"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    Reservar Sesión
                  </Link>
                </motion.div>

                {/* WhatsApp CTA */}
                <motion.a
                  variants={staggerItem}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 px-8 border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-500 flex justify-center items-center gap-4 font-medium tracking-wide uppercase text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                  Hablar por WhatsApp
                </motion.a>
              </motion.div>

              <p className="text-center text-xs text-[var(--color-text-subtle)] mt-8">
                Tus respuestas son confidenciales. Solo Ainara verá tu diagnóstico.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
