"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Check, Copy, Mail, MessageCircle, RotateCcw } from "lucide-react";
import AinaraPortrait from "@/components/AinaraPortrait";
import { FloatingInput } from "@/components/ui/FloatingInput";
import { CONTACT_LINKS } from "@/lib/assistant-knowledge";
import { CONTACT_QUESTIONS as questions, CONTACT_PRIORITIES, buildContactLinks, type ContactBrief } from "@/lib/first-contact";

const schema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre, con al menos dos letras.").max(80),
  email: z.union([z.string().trim().email("Comprueba tu correo electrónico."), z.literal("")]),
  phone: z.string().trim().max(30, "Comprueba tu teléfono.").refine(v => !v || /^[+\d\s().-]{6,30}$/.test(v), "Comprueba tu teléfono."),
  priority: z.enum(CONTACT_PRIORITIES), note: z.string().trim().max(600, "Puedes escribir hasta 600 caracteres."),
  channel: z.enum(["whatsapp", "email"]), consent: z.boolean().refine(v => v, "Confirma que quieres compartir el resumen con Ainara."),
}).superRefine((data, ctx) => { if (data.channel === "email" && !data.email) ctx.addIssue({ code: "custom", path: ["email"], message: "Indica el correo donde Ainara puede responderte." }); });
type ContactInput = z.infer<typeof schema>;
export default function EvaluacionPage() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [editing, setEditing] = useState(false);
  const [brief, setBrief] = useState<ContactBrief | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const { register, handleSubmit, watch, reset: resetForm, formState: { errors } } = useForm<ContactInput>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", phone: "", priority: "Todavía no lo sé", note: "", channel: "whatsapp", consent: false } });
  const channel = watch("channel");
  const links = brief ? buildContactLinks(brief, CONTACT_LINKS.whatsappNumber, CONTACT_LINKS.email) : null;
  useEffect(() => { if (firstRender.current) { firstRender.current = false; return; } heading.current?.focus(); }, [step]);
  const prepare = (data: ContactInput) => { setBrief({ ...data, answers: [...answers] }); setCopied(false); setCopyError(false); setStep(5); };
  const restart = () => { setAnswers([]); setBrief(null); setEditing(false); setCopied(false); setCopyError(false); resetForm(); setStep(0); };
  const copy = async () => { try { await navigator.clipboard.writeText(links!.message); setCopied(true); setCopyError(false); } catch { setCopyError(true); } };
  return <main className="first-contact-page">
    <div className="editorial-wrap first-contact-grid">
      <aside className="contact-aside">
        <div className="contact-intro"><p className="eyebrow">TU PRIMER CONTACTO</p><h1>Empecemos<br />por <em>cómo estás.</em></h1><p>Cuéntame tu momento actual. Será nuestro punto de partida para una primera conversación.</p></div>
        <AinaraPortrait variant="contact" priority />
        <div className="contact-author"><strong>Ainara Unamunzaga</strong><span>Coach IE + PNL</span></div>
        <p className="contact-aside-note">Cuatro preguntas, a tu ritmo. Puedes dejar sin responder lo que prefieras.</p>
      </aside>
      <section className="contact-workspace" aria-label="Preparar tu primer contacto con Ainara">
        <div className="contact-top"><Link href="/">Volver a inicio</Link><span>{step < 4 ? `Pregunta ${step + 1} de 4` : step === 4 ? "Tu resumen y contacto" : "Tu mensaje preparado"}</span></div>
        <ol className="contact-progress" aria-label="Progreso del primer contacto">{[...questions.map(q => q.topic), "Contacto"].map((topic, i) => <li key={topic} className={i < step ? "done" : i === step ? "current" : ""} aria-current={i === step ? "step" : undefined}><span aria-hidden="true">{i < step ? <Check size={12} /> : i + 1}</span><span>{topic}</span></li>)}</ol>
        {step < 4 ? <motion.div key={step} initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }} className="contact-question">
          <p className="eyebrow">{questions[step].topic}</p><h2 ref={heading} tabIndex={-1}>{questions[step].question}</h2><p className="question-note">{questions[step].note}</p>
          <fieldset className="answer-options"><legend className="sr-only">{questions[step].question}</legend>{questions[step].options.map(option => <label key={option} className={answers[step] === option ? "selected" : ""}><input type="radio" name={`contact-question-${step}`} value={option} checked={answers[step] === option} onChange={() => setAnswers(prev => { const next = [...prev]; next[step] = option; return next; })} /><span>{option}</span><span className="answer-radio" aria-hidden="true">{answers[step] === option && <Check size={14} />}</span></label>)}</fieldset>
          <div className="question-actions"><button type="button" className="text-button" onClick={() => { setEditing(false); setStep(step - 1); }} disabled={step === 0}>Anterior</button><button type="button" className="editorial-button" disabled={!answers[step]} onClick={() => { setStep(editing ? 4 : step + 1); setEditing(false); }}>{editing || step === 3 ? "Revisar mi resumen" : "Continuar"}</button></div><p className="contact-help">No hay respuestas correctas. Lo importante es tu experiencia.</p>
        </motion.div> : step === 4 ? <div className="contact-details">
          <p className="eyebrow">UN PUNTO DE PARTIDA</p><h2 ref={heading} tabIndex={-1}>Así estás.<br /><em>¿Por dónde empezamos?</em></h2>
          <ul className="contact-answer-summary">{questions.map((q, i) => <li key={q.topic}><div><span>{q.topic}</span><strong>{answers[i]}</strong></div><button type="button" onClick={() => { setEditing(true); setStep(i); }} aria-label={`Editar respuesta sobre ${q.topic}`}>Editar</button></li>)}</ul>
          <form onSubmit={handleSubmit(prepare)} noValidate>
            <div className="editorial-field"><label htmlFor="contact-priority">¿Qué te gustaría trabajar primero?</label><select id="contact-priority" {...register("priority")}>{CONTACT_PRIORITIES.map(p => <option key={p}>{p}</option>)}</select></div>
            <div className="editorial-field"><label htmlFor="contact-note">Algo más que quieras contarme <span>(opcional)</span></label><textarea id="contact-note" rows={3} maxLength={600} placeholder="Puedes contarme qué te gustaría cambiar o qué esperas de una primera conversación." {...register("note")} aria-invalid={!!errors.note} aria-describedby={errors.note ? "contact-note-error" : undefined} />{errors.note && <p className="field-error" id="contact-note-error" role="alert">{errors.note.message}</p>}</div>
            <fieldset className="contact-channels"><legend>¿Cómo prefieres contactar?</legend>{[{ value: "whatsapp", text: "WhatsApp", Icon: MessageCircle }, { value: "email", text: "Correo", Icon: Mail }].map(({ value, text, Icon }) => <label key={value} className={channel === value ? "selected" : ""}><input type="radio" value={value} {...register("channel")} /><Icon size={20} aria-hidden="true" /><span>{text}</span></label>)}</fieldset>
            <FloatingInput label="Tu nombre" autoComplete="given-name" required maxLength={80} {...register("name")} error={errors.name?.message} />
            <div className="contact-fields"><FloatingInput label={channel === "email" ? "Tu correo electrónico" : "Tu correo (opcional)"} type="email" autoComplete="email" required={channel === "email"} {...register("email")} error={errors.email?.message} /><FloatingInput label="Tu teléfono (opcional)" type="tel" autoComplete="tel" maxLength={30} {...register("phone")} error={errors.phone?.message} /></div>
            <label className="consent-label"><input type="checkbox" {...register("consent")} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "contact-consent-error" : undefined} /><span>Quiero compartir mis respuestas y los datos que he indicado con Ainara para iniciar una conversación.</span></label>{errors.consent && <p id="contact-consent-error" className="field-error" role="alert">{errors.consent.message}</p>}
            <button className="editorial-button" type="submit">Preparar mi mensaje</button><p className="contact-help">Revisarás el mensaje antes de abrir {channel === "email" ? "tu aplicación de correo" : "WhatsApp"}. Nada se envía desde este formulario.</p>
          </form>
        </div> : links && <div className="contact-ready">
          <p className="eyebrow">LISTO PARA CONVERSAR</p><h2 ref={heading} tabIndex={-1}>Tu historia.<br /><em>En tus palabras.</em></h2><p>Este es el resumen que compartiremos con Ainara. Puedes editarlo volviendo al paso anterior.</p>
          <label htmlFor="contact-message" className="contact-message-label">Mensaje para Ainara</label><textarea id="contact-message" className="contact-message" readOnly value={links.message} rows={14} />
          <div className="contact-delivery"><a className="editorial-button" href={channel === "email" ? links.email : links.whatsapp} target={channel === "whatsapp" ? "_blank" : undefined} rel={channel === "whatsapp" ? "noopener noreferrer" : undefined}>{channel === "email" ? <Mail size={18} aria-hidden="true" /> : <MessageCircle size={18} aria-hidden="true" />}Abrir {channel === "email" ? "mi correo" : "WhatsApp"} con mi resumen</a><button type="button" className="editorial-link" onClick={copy}><Copy size={16} aria-hidden="true" />{copied ? "Resumen copiado" : "Copiar el resumen"}</button></div>
          <p className="contact-help" role="status">{copyError ? "No se pudo copiar automáticamente. Puedes seleccionar y copiar el mensaje de arriba." : copied ? "Resumen copiado. Puedes pegarlo en tu conversación con Ainara." : `El mensaje todavía no se ha enviado. Pulsa Enviar en ${channel === "email" ? "tu correo" : "WhatsApp"} para que Ainara lo reciba.`}</p>
          <div className="contact-ready-footer"><button type="button" className="text-button" onClick={() => setStep(4)}>Editar mi resumen</button><button type="button" className="text-button restart-button" onClick={restart}><RotateCcw size={16} aria-hidden="true" />Volver a empezar</button></div>
        </div>}
        <noscript><p>Para preparar el resumen, activa JavaScript. También puedes <a href={CONTACT_LINKS.whatsappUrl}>contactar con Ainara por WhatsApp</a> o escribir a <a href={`mailto:${CONTACT_LINKS.email}`}>{CONTACT_LINKS.email}</a>.</p></noscript>
      </section>
    </div>
  </main>;
}
