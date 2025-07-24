import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AssessmentSection = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: string]: string}>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 'stress',
      question: '¿Cómo manejas el estrés en situaciones de alta presión?',
      options: [
        { value: 'overwhelmed', text: 'Me siento abrumado/a frecuentemente' },
        { value: 'manage', text: 'Lo manejo pero me cuesta trabajo' },
        { value: 'control', text: 'Tengo control pero podría mejorar' },
        { value: 'excellent', text: 'Lo manejo excelentemente' }
      ]
    },
    {
      id: 'communication',
      question: '¿Qué tan efectiva es tu comunicación en el trabajo?',
      options: [
        { value: 'difficult', text: 'Me cuesta expresar mis ideas claramente' },
        { value: 'sometimes', text: 'A veces no me entienden como quisiera' },
        { value: 'good', text: 'Comunico bien pero puedo mejorar' },
        { value: 'excellent', text: 'Soy un comunicador excelente' }
      ]
    },
    {
      id: 'leadership',
      question: '¿Cómo te sientes liderando equipos?',
      options: [
        { value: 'insecure', text: 'Me siento inseguro/a al liderar' },
        { value: 'learning', text: 'Estoy aprendiendo pero es desafiante' },
        { value: 'confident', text: 'Me siento confiado/a la mayoría del tiempo' },
        { value: 'natural', text: 'Liderar me sale naturalmente' }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateResults = () => {
    const answers = Object.values(selectedAnswers);
    const needsWork = answers.filter(answer => 
      answer === 'overwhelmed' || answer === 'difficult' || answer === 'insecure'
    ).length;
    
    const developing = answers.filter(answer => 
      answer === 'manage' || answer === 'sometimes' || answer === 'learning'
    ).length;

    if (needsWork >= 2) {
      return 'high';
    } else if (developing >= 2) {
      return 'medium';
    } else {
      return 'low';
    }
  };

  const getResultMessage = (level: string) => {
    switch (level) {
      case 'high':
        return {
          title: 'Oportunidad de Transformación Alta',
          message: 'Tienes un gran potencial de crecimiento. Un proceso de coaching estructurado puede generar cambios significativos en tu liderazgo y bienestar.',
          action: 'Te recomiendo comenzar con una consulta personalizada para diseñar tu plan de transformación.'
        };
      case 'medium':
        return {
          title: 'Potencial de Mejora Identificado',
          message: 'Ya tienes buenas bases, pero hay áreas específicas donde puedes alcanzar tu máximo potencial como líder.',
          action: 'Un programa enfocado te ayudará a pulir esas habilidades y alcanzar el siguiente nivel.'
        };
      default:
        return {
          title: 'Fortalezas Sólidas Detectadas',
          message: 'Tienes habilidades desarrolladas. El coaching te ayudará a mantener la excelencia y seguir creciendo.',
          action: 'Te beneficiarías de un programa de mantenimiento y crecimiento continuo.'
        };
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length === questions.length) {
      setShowResults(true);
    }
  };

  const isComplete = Object.keys(selectedAnswers).length === questions.length;

  return (
    <section className="py-20 bg-card">
      <div className="container-custom mx-auto px-4">
        <div className="content-center mb-16">
          <h2 className="title-section font-heading font-bold text-card-foreground mb-8">
            Evaluación de Liderazgo Emocional
          </h2>
          <p className="text-body-large text-muted-foreground content-balanced">
            Descubre tu nivel actual de inteligencia emocional y liderazgo con esta evaluación rápida
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {questions.map((question, index) => (
                <div key={question.id} className="card-elegant p-8">
                  <h3 className="title-card font-semibold text-foreground mb-6">
                    {index + 1}. {question.question}
                  </h3>
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <label 
                        key={option.value}
                        className="flex items-center p-4 rounded-xl border border-border hover:border-accent cursor-pointer transition-colors group"
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${
                          selectedAnswers[question.id] === option.value
                            ? 'border-accent bg-accent'
                            : 'border-muted-foreground group-hover:border-accent'
                        }`}>
                          {selectedAnswers[question.id] === option.value && (
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          )}
                        </div>
                        <span className="text-foreground group-hover:text-accent transition-colors">
                          {option.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={handleSubmit}
                disabled={!isComplete}
                className={`btn-primary inline-flex items-center gap-2 ${
                  !isComplete ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Ver Mis Resultados
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="card-elegant p-10 text-center">
              <div className="text-6xl mb-6">🎯</div>
              {(() => {
                const level = calculateResults();
                const result = getResultMessage(level);
                return (
                  <>
                    <h3 className="title-section font-bold text-foreground mb-6">
                      {result.title}
                    </h3>
                    <p className="text-body-large text-muted-foreground mb-6">
                      {result.message}
                    </p>
                    <p className="text-body text-foreground mb-10">
                      {result.action}
                    </p>
                  </>
                );
              })()}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Agendar Consulta Gratuita
                </Link>
                <Link
                  to="/regalo"
                  className="btn-secondary"
                >
                  Descargar Guía Gratuita
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AssessmentSection;