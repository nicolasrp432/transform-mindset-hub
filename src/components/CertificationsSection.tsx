import { Award, BookOpen, Users, Brain, Heart, Zap, CheckCircle, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const mainCertifications = [
    {
      icon: Award,
      title: 'Certified Professional Coach (CPC)',
      institution: 'International Coach Federation (ICF)',
      year: '2015',
      description: 'Certificación internacional que garantiza los más altos estándares en coaching profesional.',
      skills: ['Escucha activa', 'Preguntas poderosas', 'Feedback constructivo', 'Establecimiento de objetivos'],
      color: 'primary',
      featured: true
    },
    {
      icon: Brain,
      title: 'Master Practitioner en PNL',
      institution: 'Society of NLP - Richard Bandler',
      year: '2016',
      description: 'Máximo nivel de certificación en Programación Neurolingüística, directamente de su creador.',
      skills: ['Modelado de excelencia', 'Cambio de creencias', 'Anclajes', 'Línea del tiempo'],
      color: 'accent',
      featured: true
    },
    {
      icon: Heart,
      title: 'Especialista en Inteligencia Emocional',
      institution: 'Emotional Intelligence Institute',
      year: '2018',
      description: 'Formación avanzada en neurociencia emocional y técnicas de regulación emocional.',
      skills: ['Autoconciencia emocional', 'Autorregulación', 'Empatía', 'Habilidades sociales'],
      color: 'secondary',
      featured: true
    },
    {
      icon: Zap,
      title: 'Master en Reiki Usui',
      institution: 'Reiki Alliance International',
      year: '2020',
      description: 'Técnicas energéticas para el equilibrio y sanación complementaria en procesos de transformación.',
      skills: ['Equilibrio energético', 'Relajación profunda', 'Reducción de estrés', 'Bienestar integral'],
      color: 'accent',
      featured: false
    }
  ];

  const continuousEducation = [
    {
      title: 'Neuroplasticidad y Cambio de Hábitos',
      institution: 'Stanford University (Online)',
      year: '2023',
      hours: '40 horas'
    },
    {
      title: 'Coaching Ejecutivo Avanzado',
      institution: 'Center for Executive Coaching',
      year: '2022',
      hours: '60 horas'
    },
    {
      title: 'Mindfulness y Reducción de Estrés',
      institution: 'University of Massachusetts',
      year: '2021',
      hours: '32 horas'
    },
    {
      title: 'Liderazgo Consciente y Transformacional',
      institution: 'Institute for Transformational Leadership',
      year: '2023',
      hours: '50 horas'
    }
  ];

  const memberships = [
    {
      name: 'International Coach Federation (ICF)',
      role: 'Miembro Activo',
      description: 'Compromiso con los estándares éticos y de calidad más altos del coaching mundial.'
    },
    {
      name: 'Asociación Española de Coaching (ASESCO)',
      role: 'Coach Certificado',
      description: 'Reconocimiento oficial en España y cumplimiento de normativas locales.'
    },
    {
      name: 'Society of NLP',
      role: 'Master Practitioner',
      description: 'Acceso a las últimas investigaciones y técnicas en Programación Neurolingüística.'
    }
  ];

  const skills = [
    'Coaching Ontológico',
    'PNL Aplicada',
    'Inteligencia Emocional',
    'Neuroplasticidad',
    'Mindfulness',
    'Reiki Energético',
    'Liderazgo Consciente',
    'Gestión del Cambio',
    'Comunicación Efectiva',
    'Resolución de Conflictos',
    'Desarrollo de Equipos',
    'Coaching Ejecutivo'
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container-custom mx-auto px-4">
        {/* Header */}
        <div className="content-center mb-20">
          <h2 className="title-section font-heading font-bold text-card-foreground mb-8">
            Certificaciones y Formación Continua
          </h2>
          <p className="text-body-large text-muted-foreground content-balanced">
            Mi compromiso con la excelencia se refleja en una formación constante y certificaciones de las instituciones más prestigiosas
          </p>
        </div>

        {/* Main Certifications */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainCertifications.filter(cert => cert.featured).map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="relative">
                {cert.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-full z-10">
                    Certificación Principal
                  </div>
                )}
                
                <div className="card-elegant p-8 hover-lift h-full">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-${cert.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className={`w-8 h-8 text-${cert.color}`} />
                    </div>
                    
                    <h3 className="title-card font-semibold text-card-foreground mb-2">
                      {cert.title}
                    </h3>
                    
                    <div className="text-muted-foreground text-sm mb-2">
                      {cert.institution}
                    </div>
                    
                    <div className={`text-${cert.color} font-medium text-sm mb-4`}>
                      {cert.year}
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-6">
                      {cert.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-card-foreground text-sm mb-3">Competencias clave:</h4>
                    {cert.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Certifications */}
        <div className="bg-background rounded-3xl p-10 mb-20">
          <h3 className="title-card font-semibold text-foreground mb-8 text-center">
            Certificaciones Complementarias
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mainCertifications.filter(cert => !cert.featured).map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="card-elegant p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${cert.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 text-${cert.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                      <div className="text-muted-foreground text-sm mb-2">{cert.institution}</div>
                      <div className={`text-${cert.color} font-medium text-sm mb-3`}>{cert.year}</div>
                      <p className="text-muted-foreground text-sm">{cert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continuous Education */}
        <div className="mb-20">
          <div className="content-center mb-12">
            <h3 className="title-card font-semibold text-foreground mb-4">
              Formación Continua Reciente
            </h3>
            <p className="text-muted-foreground">
              Manteniéndome actualizada con las últimas investigaciones y técnicas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {continuousEducation.map((course, index) => (
              <div key={index} className="card-elegant p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-foreground flex-1">{course.title}</h4>
                  <span className="text-accent font-medium text-sm">{course.hours}</span>
                </div>
                <div className="text-muted-foreground text-sm mb-2">{course.institution}</div>
                <div className="text-primary font-medium text-sm">{course.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-10 mb-20">
          <div className="content-center mb-12">
            <h3 className="title-card font-semibold text-foreground mb-4">
              Áreas de Especialización
            </h3>
            <p className="text-muted-foreground">
              Técnicas y metodologías que domino para tu transformación
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center">
                <span className="text-sm font-medium text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="mb-20">
          <div className="content-center mb-12">
            <h3 className="title-card font-semibold text-foreground mb-4">
              Membresías Profesionales
            </h3>
            <p className="text-muted-foreground">
              Compromiso con los estándares éticos y de calidad más altos
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {memberships.map((membership, index) => (
              <div key={index} className="card-elegant p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{membership.name}</h4>
                <div className="text-accent font-medium text-sm mb-3">{membership.role}</div>
                <p className="text-muted-foreground text-sm">{membership.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment to Excellence */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-10 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <BookOpen className="w-16 h-16 mx-auto mb-6 opacity-90" />
            
            <h3 className="title-card font-semibold mb-6">
              Compromiso con la Excelencia
            </h3>
            
            <p className="text-white/90 mb-8 text-lg">
              Cada año invierto más de 100 horas en formación continua porque creo que para ayudarte 
              a crecer, yo también debo estar en constante evolución. Tu transformación merece lo mejor de mí.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-white/80">Horas de Formación</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-white/80">Certificaciones</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-white/80">Años Actualizándome</div>
              </div>
            </div>
            
            <p className="text-white/80 text-sm">
              "La competencia es el resultado de la preparación constante. 
              Cada certificación es una promesa de calidad para mis clientes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;