import React, { useState } from 'react';
import Button from '../ui-elements/Button';
import Card from '../ui-elements/Card';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  motivation: string;
  challenges: string;
  emotionalLevel: string;
  personalManagement: string;
  teamCommunication: string;
  conflictResolution: string;
  pressureDecisions: string;
}

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  delay: number;
  animationClass?: string;
}

const FormField: React.FC<FormFieldProps> = ({ 
  id, name, label, type = 'text', required = false, placeholder, value, onChange, delay, animationClass = 'animate-zoom-in' 
}) => (
  <div className={`${animationClass}`} style={{ animationDelay: `${delay}ms` }}>
    <label htmlFor={id} className="block text-sm font-heading font-semibold text-card-foreground mb-2">
      {label} {required && '*'}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast hover-scale"
      placeholder={placeholder}
    />
  </div>
);

interface TextAreaFieldProps {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  delay: number;
  rows?: number;
  animationClass?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ 
  id, name, label, placeholder, value, onChange, delay, rows = 3, animationClass = 'animate-fade-in-up' 
}) => (
  <div className={animationClass} style={{ animationDelay: `${delay}ms` }}>
    <label htmlFor={id} className="block text-sm font-heading font-semibold text-card-foreground mb-2">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast resize-none hover-scale"
      placeholder={placeholder}
    />
  </div>
);

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  delay: number;
  animationClass?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ 
  id, name, label, value, onChange, options, delay, animationClass = 'animate-slide-in-right' 
}) => (
  <div className={animationClass} style={{ animationDelay: `${delay}ms` }}>
    <label htmlFor={id} className="block text-sm font-heading font-semibold text-card-foreground mb-2">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast hover-scale"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

interface RangeFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  delay: number;
  animationClass?: string;
}

const RangeField: React.FC<RangeFieldProps> = ({ 
  name, label, value, onChange, delay, animationClass = 'animate-slide-in-left' 
}) => (
  <div className={`${animationClass} hover-scale`} style={{ animationDelay: `${delay}ms` }}>
    <label className="block text-sm font-body text-muted-foreground mb-3">
      {label}: <span className="font-semibold text-accent">{value}</span>
    </label>
    <input
      type="range"
      name={name}
      min="1"
      max="10"
      value={value}
      onChange={onChange}
      className="w-full accent-accent"
    />
    <div className="flex justify-between text-xs text-muted-foreground mt-1">
      <span>1</span>
      <span>10</span>
    </div>
  </div>
);

const GiftSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    motivation: '',
    challenges: '',
    emotionalLevel: 'Básico',
    personalManagement: '1',
    teamCommunication: '1',
    conflictResolution: '1',
    pressureDecisions: '1'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const emotionalLevelOptions = [
    { value: 'Básico', label: 'Básico - Estoy empezando a explorar' },
    { value: 'Intermedio', label: 'Intermedio - Tengo algunas herramientas' },
    { value: 'Avanzado', label: 'Avanzado - Busco perfeccionar mi gestión' }
  ];

  const rangeFields = [
    { name: 'personalManagement', label: 'Gestión emocional personal', delay: 1400, animationClass: 'animate-slide-in-left' },
    { name: 'teamCommunication', label: 'Comunicación con equipos', delay: 1500, animationClass: 'animate-slide-in-right' },
    { name: 'conflictResolution', label: 'Resolución de conflictos', delay: 1600, animationClass: 'animate-slide-in-left' },
    { name: 'pressureDecisions', label: 'Toma de decisiones bajo presión', delay: 1700, animationClass: 'animate-slide-in-right' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Store form data (in a real app, this would be sent to a server)
    console.log('Form Data Submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section id="gift" className="gift-gradient section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <Card variant="default" className="p-12 animate-zoom-in">
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
                  variant="accent"
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

          <Card variant="default" className="p-8 md:p-12 animate-zoom-in animate-delay-400">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6 animate-slide-in-left animate-delay-500">
                <FormField
                  id="fullName"
                  name="fullName"
                  label="Nombre Completo"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  delay={600}
                />
                <FormField
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  delay={700}
                />
              </div>

              <FormField
                id="phone"
                name="phone"
                label="Teléfono"
                type="tel"
                required
                placeholder="+34 123 456 789"
                value={formData.phone}
                onChange={handleInputChange}
                delay={800}
                animationClass="animate-slide-in-right"
              />

              {/* Motivation */}
              <TextAreaField
                id="motivation"
                name="motivation"
                label="¿Qué te motiva a trabajar en tu crecimiento emocional?"
                placeholder="Comparte tus motivaciones y objetivos..."
                value={formData.motivation}
                onChange={handleInputChange}
                delay={900}
              />

              {/* Challenges */}
              <TextAreaField
                id="challenges"
                name="challenges"
                label="¿Cuáles son tus principales desafíos de liderazgo?"
                placeholder="Describe los desafíos que enfrentas en tu liderazgo..."
                value={formData.challenges}
                onChange={handleInputChange}
                delay={1000}
                animationClass="animate-slide-in-left"
              />

              {/* Emotional Level */}
              <SelectField
                id="emotionalLevel"
                name="emotionalLevel"
                label="¿Cómo describirías tu nivel actual de inteligencia emocional?"
                value={formData.emotionalLevel}
                onChange={handleInputChange}
                options={emotionalLevelOptions}
                delay={1100}
              />

              {/* Self-Assessment Scales */}
              <div className="space-y-6 animate-fade-in-up animate-delay-1200">
                <h3 className="text-lg font-heading font-semibold text-card-foreground animate-zoom-in animate-delay-1300">
                  Autovalora estos aspectos del 1 al 10:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {rangeFields.map((field) => (
                    <RangeField
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      value={formData[field.name as keyof FormData] as string}
                      onChange={handleInputChange}
                      delay={field.delay}
                      animationClass={field.animationClass}
                    />
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6 animate-zoom-in animate-delay-1800">
                <Button
                  variant="accent"
                  size="xl"
                  type="submit"
                  disabled={isSubmitting}
                  className={`text-xl px-12 py-5 hover-glow ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </span>
                  ) : (
                    '🎁 Enviar y Recibir mi Guía Gratuita'
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-4 animate-fade-in-up animate-delay-1900">
                  Al enviar este formulario aceptas recibir información sobre mis servicios de coaching. 
                  Puedes cancelar la suscripción en cualquier momento.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;