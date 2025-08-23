import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AssessmentForm, { FormData } from '@/components/forms/AssessmentForm';
import { CheckCircle, Mail, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GiftSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

  // Automatically download the guide from /public once the form is successfully submitted
  const triggerGuideDownload = async () => {
    const pdfPath = '/GUIAINTELIGENCIAEMOCIONALAINARA.pdf';
    const url = `${window.location.origin}${pdfPath}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch PDF');
      const blob = await res.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.setAttribute('download', 'Guia_Inteligencia_Emocional_Ainara.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
    } catch (err) {
      // Fallback: open in a new tab if download attribute is ignored or fetch fails
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

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

      // Trigger the guide download for the user
      await triggerGuideDownload();
      
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
      <section id="gift" className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-12 border border-border bg-card shadow-lg">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                ¡Gracias por tu interés!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                He recibido tu información y pronto recibirás tu <strong className="text-accent">Guía de Autoevaluación Emocional personalizada</strong> en tu correo electrónico.
              </p>
              <p className="text-muted-foreground mb-8">
                Mientras tanto, te contactaré personalmente para conocer mejor tus objetivos y cómo puedo ayudarte en tu proceso de transformación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contacto Directo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  <Link to="/">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Volver al Inicio
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gift" className="py-20 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Download className="w-4 h-4" />
              <span>Descarga Gratuita</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Recibe <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">GRATIS</span> tu Guía de Autoevaluación Emocional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
