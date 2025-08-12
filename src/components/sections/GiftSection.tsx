import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AssessmentForm, { FormData } from '@/components/forms/AssessmentForm';

const GiftSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${API_BASE}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'assessment',
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message to user
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="gift" className="gift-gradient section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12 animate-zoom-in">
              <div className="text-6xl mb-6 animate-bounce-in animate-delay-200">🎉</div>
              <h2 className="text-3xl font-heading font-bold text-card-foreground mb-4 animate-slide-in-down animate-delay-300">
                ¡Gracias por tu interés!
              </h2>
              <p className="text-lg font-body text-muted-foreground mb-6 animate-fade-in-up animate-delay-400">
                He recibido tu información y pronto recibirás tu <strong>Guía de Autoevaluación Emocional personalizada</strong> en tu correo electrónico.
              </p>
              <p className="text-muted-foreground font-body animate-slide-in-up animate-delay-500">
                Mientras tanto, te contactaré personalmente para conocer mejor tus objetivos y cómo puedo ayudarte en tu proceso de transformación.
              </p>
              <div className="mt-8 animate-zoom-in animate-delay-600">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover-glow"
                >
                  Contacto Directo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gift" className="gift-gradient section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 animate-slide-in-down animate-delay-200">
              🎁 Recibe GRATIS tu Guía de Autoevaluación Emocional
            </h2>
            <p className="text-xl font-body text-primary-foreground/90 max-w-3xl mx-auto animate-slide-in-up animate-delay-300">
              Descubre tu nivel actual de Inteligencia Emocional y crea tu plan personalizado de crecimiento
            </p>
          </div>

          <AssessmentForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
