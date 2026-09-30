"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import { Check, RotateCcw } from "lucide-react";
import { FloatingInput } from "@/components/ui/FloatingInput";
import { submitEvaluacion } from "@/app/actions/evaluacion";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";

const questions = [
  {
    topic: "Tus pensamientos",
    text: "¿Sientes que tus pensamientos van más rápido de lo que puedes procesar?",
    note: "Piensa en cómo te has sentido últimamente, sin buscar una respuesta perfecta.",
  },
  {
    topic: "Tu descanso",
    text: "¿Te cuesta desconectar del trabajo o las preocupaciones al final del día?",
    note: "Observa si las preocupaciones siguen presentes cuando llega el momento de parar.",
  },
  {
    topic: "Tus relaciones",
    text: "¿Sientes que las emociones de los demás te sobrepasan o te agotan?",
    note: "Puedes tomar como referencia tus conversaciones y relaciones del día a día.",
  },
  {
    topic: "Tu cuerpo",
    text: "¿Sientes tensión física recurrente en el cuello, los hombros o la mandíbula?",
    note: "Esta pregunta invita a observarte. La tensión física puede tener distintas causas.",
  },
  {
    topic: "Tus decisiones",
    text: "¿Te resulta difícil tomar decisiones sencillas porque sobreanalizas cada detalle?",
    note: "Piensa en esas pequeñas decisiones que acaban ocupando mucho espacio.",
  },
];
const options = ["Sí", "A veces", "No"];
const LeadSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre, con al menos dos letras."),
  email: z.string().trim().email("Comprueba tu correo electrónico."),
  consent: z
    .boolean()
    .refine(
      (value) => value,
      "Confirma que quieres compartir tus respuestas con Ainara.",
    ),
});
type LeadInput = z.infer<typeof LeadSchema>;

export default function EvaluacionPage() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [shared, setShared] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(LeadSchema),
    defaultValues: { consent: false },
  });
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    heading.current?.focus();
  }, [step]);
  const onSubmit = async (data: LeadInput) => {
    setError(null);
    try {
      const result = await submitEvaluacion({
        name: data.name,
        email: data.email,
        answers,
      });
      if (!result.success || ("_warning" in result && result._warning)) {
        setError(
          "No hemos podido guardar tus respuestas. Puedes intentarlo de nuevo o ver tu resumen sin compartirlo.",
        );
        return;
      }
      setDuplicate("_note" in result && !!result._note);
      setShared(true);
      setStep(6);
    } catch {
      setError(
        "No hemos podido conectar. Tus respuestas siguen aquí: puedes reintentar o ver tu resumen.",
      );
    }
  };
  const reset = () => {
    setAnswers([]);
    setStep(0);
    setShared(false);
    setDuplicate(false);
    setError(null);
  };
  return (
    <main className="evaluation-page">
      <div className="editorial-wrap evaluation-grid">
        <aside className="evaluation-aside">
          <p className="eyebrow">TU PRIMER MOMENTO CONTIGO</p>
          <h1>
            Una pausa.
            <br />
            <em>Para escucharte.</em>
          </h1>
          <p>
            Cinco preguntas para observar cómo estás y encontrar un punto de
            partida.
          </p>
          <div className="evaluation-portrait">
            <Image
              src="/images/ainara-portrait.webp"
              alt="Ainara"
              fill
              sizes="(max-width: 760px) 0px, 340px"
            />
          </div>
          <p className="evaluation-aside-note">
            No es una prueba clínica ni un diagnóstico. Tus respuestas son una
            invitación a reflexionar.
          </p>
        </aside>
        <section className="evaluation-workspace" aria-label="Autoevaluación">
          <div className="evaluation-top">
            <Link href="/">Volver a inicio</Link>
            <span>
              {step < 5
                ? `${String(step + 1).padStart(2, "0")} / 05`
                : step === 5
                  ? "TU RESUMEN"
                  : "TU SIGUIENTE PASO"}
            </span>
          </div>
          <div
            className="evaluation-progress"
            role="progressbar"
            aria-label="Preguntas completadas"
            aria-valuemin={0}
            aria-valuemax={5}
            aria-valuenow={Math.min(step, 5)}
          >
            {questions.map((q, i) => (
              <span
                key={q.topic}
                className={i < step ? "completed" : i === step ? "current" : ""}
              />
            ))}
          </div>
          {step < 5 ? (
            <motion.div key={step} className="question-content" initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="eyebrow">{questions[step].topic}</p>
              <h2 ref={heading} tabIndex={-1}>
                {questions[step].text}
              </h2>
              <p className="question-note">{questions[step].note}</p>
              <fieldset className="answer-options">
                <legend className="sr-only">Elige una respuesta</legend>
                {options.map((option, i) => (
                  <label
                    className={answers[step] === option ? "selected" : ""}
                    key={option}
                  >
                    <input
                      type="radio"
                      name={`question-${step}`}
                      value={option}
                      checked={answers[step] === option}
                      onChange={() => {
                        setAnswers((prev) => {
                          const next = [...prev];
                          next[step] = option;
                          return next;
                        });
                      }}
                    />
                    <span className="answer-number">0{i + 1}</span>
                    <span>{option}</span>
                    <span className="answer-radio" aria-hidden="true">
                      {answers[step] === option && <Check size={14} />}
                    </span>
                  </label>
                ))}
              </fieldset>
              <div className="question-actions">
                <button
                  className="text-button"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 0}
                >
                  Anterior
                </button>
                <button
                  className="editorial-button"
                  disabled={!answers[step]}
                  onClick={() => setStep(step + 1)}
                >
                  {step === 4 ? "Ver mi resumen" : "Continuar"}
                </button>
              </div>
              <p className="question-footnote">
                Sin respuestas correctas. Sin prisa.
              </p>
            </motion.div>
          ) : step === 5 ? (
            <div className="evaluation-summary">
              <p className="eyebrow">HAS HECHO ESPACIO PARA TI</p>
              <h2 ref={heading} tabIndex={-1}>
                Esto es lo que
                <br />
                <em>has observado.</em>
              </h2>
              <p>
                Tus respuestas pueden ayudarte a decidir de qué te gustaría
                hablar.
              </p>
              <ul className="answer-summary">
                {questions.map((q, i) => (
                  <li key={q.topic}>
                    <span>{q.topic}</span>
                    <button
                      onClick={() => setStep(i)}
                      aria-label={`Cambiar respuesta sobre ${q.topic}: ${answers[i]}`}
                    >
                      {answers[i]} <span aria-hidden="true">· Editar</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="summary-form-heading">
                <h3>¿Lo compartimos con Ainara?</h3>
                <p>
                  Deja tus datos si quieres compartir tus respuestas para hablar
                  sobre el acompañamiento. También puedes continuar sin
                  compartirlas.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FloatingInput
                  label="Tu nombre"
                  autoComplete="given-name"
                  {...register("name")}
                  error={errors.name?.message}
                />
                <FloatingInput
                  label="Tu correo electrónico"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  error={errors.email?.message}
                />
                <label className="consent-label">
                  <input
                    type="checkbox"
                    {...register("consent")}
                    aria-describedby={
                      errors.consent ? "consent-error" : undefined
                    }
                    aria-invalid={!!errors.consent}
                  />
                  <span>
                    Quiero compartir mi nombre, correo y respuestas con Ainara
                    para hablar sobre el acompañamiento.
                  </span>
                </label>
                {errors.consent && (
                  <p className="field-error" id="consent-error" role="alert">
                    {errors.consent.message}
                  </p>
                )}
                {error && (
                  <p className="submission-error" role="alert">
                    {error}
                  </p>
                )}
                <button
                  className="editorial-button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Compartiendo…" : "Compartir con Ainara"}
                </button>
              </form>
              <button
                className="text-button summary-skip"
                disabled={isSubmitting}
                onClick={() => {
                  setShared(false);
                  setStep(6);
                }}
              >
                Continuar sin compartir mis datos
              </button>
            </div>
          ) : (
            <div className="evaluation-complete">
              <span className="complete-mark">
                <Check size={28} />
              </span>
              <p className="eyebrow">UN PASO QUE EMPIEZA EN TI</p>
              <h2 ref={heading} tabIndex={-1}>
                Ahora, a<br />
                <em>tu ritmo.</em>
              </h2>
              <p role="status">
                {shared
                  ? duplicate
                    ? "Tu correo ya estaba registrado. Puedes contactar con Ainara para compartir el resumen de esta reflexión."
                    : "Tus respuestas se han guardado. Puedes escribir a Ainara o reservar una conversación cuando lo decidas."
                  : "Has completado tu reflexión sin compartir tus datos. Puedes dar el siguiente paso cuando lo decidas."}
              </p>
              <ul className="answer-summary">
                {questions.map((q, i) => (
                  <li key={q.topic}>
                    <span>{q.topic}</span>
                    <strong>{answers[i]}</strong>
                  </li>
                ))}
              </ul>
              <div className="completion-actions">
                <Link className="editorial-button" href="/sesiones">
                  Conocer las sesiones
                </Link>
                <a
                  className="editorial-link"
                  href={CONTACT_LINKS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hablar con Ainara por WhatsApp
                </a>
              </div>
              <button className="text-button restart-button" onClick={reset}>
                <RotateCcw size={16} /> Volver a empezar
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
