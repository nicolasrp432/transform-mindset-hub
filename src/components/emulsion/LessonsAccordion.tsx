"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LESSONS } from "./data";

export default function LessonsAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {LESSONS.map((lesson, index) => (
        <AccordionItem
          key={lesson.title}
          value={`lesson-${index}`}
          className="bg-white border border-border rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <AccordionTrigger className="text-left hover:no-underline py-6">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-mark-on-soft">
                {`Lección ${index + 1}`}
              </p>
              <p className="text-lg font-medium text-text">{lesson.title}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-6 pt-2 space-y-3">
            <p className="text-text-muted leading-relaxed">{lesson.focus}</p>
            <p className="text-text-muted leading-relaxed">
              <strong className="text-text">Clave emocional:</strong> {lesson.key}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
