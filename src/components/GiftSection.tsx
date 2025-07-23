import { useState } from 'react';

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
            <div className="bg-card p-12 rounded-3xl shadow-elegant">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-heading font-bold text-card-foreground mb-4">
                ¡Gracias por tu interés!
              </h2>
              <p className="text-lg font-body text-muted-foreground mb-6">
                He recibido tu información y pronto recibirás tu <strong>Guía de Autoevaluación Emocional personalizada</strong> en tu correo electrónico.
              </p>
              <p className="text-muted-foreground font-body">
                Mientras tanto, te contactaré personalmente para conocer mejor tus objetivos y cómo puedo ayudarte en tu proceso de transformación.
              </p>
              <div className="mt-8">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-accent"
                >
                  Contacto Directo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gift" className="gift-gradient section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              🎁 Recibe GRATIS tu Guía de Autoevaluación Emocional
            </h2>
            <p className="text-xl font-body text-primary-foreground/90 max-w-3xl mx-auto">
              Descubre tu nivel actual de Inteligencia Emocional y crea tu plan personalizado de crecimiento
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-3xl shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-heading font-semibold text-card-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-heading font-semibold text-card-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-heading font-semibold text-card-foreground mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast"
                  placeholder="+34 123 456 789"
                />
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-heading font-semibold text-card-foreground mb-2">
                  ¿Qué te motiva a trabajar en tu crecimiento emocional?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={3}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast resize-none"
                  placeholder="Comparte tus motivaciones y objetivos..."
                />
              </div>

              {/* Challenges */}
              <div>
                <label htmlFor="challenges" className="block text-sm font-heading font-semibold text-card-foreground mb-2">
                  ¿Cuáles son tus principales desafíos de liderazgo?
                </label>
                <textarea
                  id="challenges"
                  name="challenges"
                  rows={3}
                  value={formData.challenges}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast resize-none"
                  placeholder="Describe los desafíos que enfrentas en tu liderazgo..."
                />
              </div>

              {/* Emotional Level */}
              <div>
                <label htmlFor="emotionalLevel" className="block text-sm font-heading font-semibold text-card-foreground mb-2">
                  ¿Cómo describirías tu nivel actual de inteligencia emocional?
                </label>
                <select
                  id="emotionalLevel"
                  name="emotionalLevel"
                  value={formData.emotionalLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground font-body focus:ring-2 focus:ring-accent focus:border-transparent transition-fast"
                >
                  <option value="Básico">Básico - Estoy empezando a explorar</option>
                  <option value="Intermedio">Intermedio - Tengo algunas herramientas</option>
                  <option value="Avanzado">Avanzado - Busco perfeccionar mi gestión</option>
                </select>
              </div>

              {/* Self-Assessment Scales */}
              <div className="space-y-6">
                <h3 className="text-lg font-heading font-semibold text-card-foreground">
                  Autovalora estos aspectos del 1 al 10:
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-3">
                      Gestión emocional personal: <span className="font-semibold text-accent">{formData.personalManagement}</span>
                    </label>
                    <input
                      type="range"
                      name="personalManagement"
                      min="1"
                      max="10"
                      value={formData.personalManagement}
                      onChange={handleInputChange}
                      className="w-full accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1</span>
                      <span>10</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-3">
                      Comunicación con equipos: <span className="font-semibold text-accent">{formData.teamCommunication}</span>
                    </label>
                    <input
                      type="range"
                      name="teamCommunication"
                      min="1"
                      max="10"
                      value={formData.teamCommunication}
                      onChange={handleInputChange}
                      className="w-full accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1</span>
                      <span>10</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-3">
                      Resolución de conflictos: <span className="font-semibold text-accent">{formData.conflictResolution}</span>
                    </label>
                    <input
                      type="range"
                      name="conflictResolution"
                      min="1"
                      max="10"
                      value={formData.conflictResolution}
                      onChange={handleInputChange}
                      className="w-full accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1</span>
                      <span>10</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-3">
                      Toma de decisiones bajo presión: <span className="font-semibold text-accent">{formData.pressureDecisions}</span>
                    </label>
                    <input
                      type="range"
                      name="pressureDecisions"
                      min="1"
                      max="10"
                      value={formData.pressureDecisions}
                      onChange={handleInputChange}
                      className="w-full accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-accent text-xl px-12 py-5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </span>
                  ) : (
                    '🎁 Enviar y Recibir mi Guía Gratuita'
                  )}
                </button>
                <p className="text-sm text-muted-foreground mt-4">
                  Al enviar este formulario aceptas recibir información sobre mis servicios de coaching. 
                  Puedes cancelar la suscripción en cualquier momento.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;