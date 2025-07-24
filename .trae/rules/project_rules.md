# 📋 REGLAS Y BUENAS PRÁCTICAS - PROYECTO AINARA COACH

## 🎯 Filosofía del Proyecto

> **"Código simple, mantenible y orientado a resultados comerciales"**

Este documento establece las reglas específicas, buenas prácticas y estándares de desarrollo para el proyecto del sitio web de Ainara Coach. Cada decisión técnica debe estar alineada con los objetivos comerciales y la experiencia del usuario final.

---

## 🏗️ ARQUITECTURA Y ESTRUCTURA

### 📁 Organización de Archivos

```
ainara-coach-website/
├── 📄 index.html                 # Página principal (SPA)
├── 📋 README.md                  # Documentación principal
├── 📋 PROJECT_RULES.md           # Este documento
├── 🔧 package.json               # Dependencias y scripts
├── 📂 src/
│   ├── 📂 styles/
│   │   ├── 🎨 variables.css      # Variables CSS globales
│   │   ├── 🎨 base.css           # Reset y estilos base
│   │   ├── 🎨 components.css     # Componentes reutilizables
│   │   ├── 🎨 layout.css         # Grid y layout principal
│   │   └── 🎨 responsive.css     # Media queries
│   ├── 📂 scripts/
│   │   ├── 🚀 main.js            # Script principal
│   │   ├── 📋 form-handler.js    # Gestión de formularios
│   │   └── 🎪 animations.js      # Animaciones y efectos
│   ├── 📂 components/
│   │   ├── 🧩 header.html        # Componente header
│   │   ├── 🧩 hero.html          # Componente hero
│   │   ├── 🧩 services.html      # Componente servicios
│   │   ├── 🧩 testimonials.html  # Componente testimonios
│   │   └── 🧩 footer.html        # Componente footer
│   └── 📂 assets/
│       ├── 🖼️ images/            # Imágenes optimizadas
│       ├── 🔤 fonts/             # Fuentes locales (fallback)
│       └── 📄 icons/             # Iconografía SVG
├── 📂 dist/                      # Build de producción
├── 📂 docs/                      # Documentación adicional
└── 📂 tests/                     # Tests y validaciones
```

---

## 🎨 ESTÁNDARES DE CSS

### ✅ **REGLA 1: Metodología BEM + Utility Classes**

```css
/* ❌ MAL - Selectores anidados complejos */
.header .navigation ul li a:hover {
    color: #D4AF37;
}

/* ✅ BIEN - BEM + Utility */
.nav__link {
    color: var(--color-white);
    transition: color 0.3s ease;
}
.nav__link:hover {
    color: var(--color-gold);
}
.nav__link--active {
    color: var(--color-gold);
}
```

### ✅ **REGLA 2: Variables CSS Obligatorias**

```css
/* Variables principales - NUNCA hardcodear colores */
:root {
    /* Colores de marca */
    --color-primary: #1B365D;        /* Azul profundo */
    --color-secondary: #7A9B7F;      /* Verde sage */
    --color-accent: #D4AF37;         /* Dorado cálido */
    --color-neutral-light: #F5F5F5;  /* Gris perla */
    --color-white: #FAFAFA;          /* Blanco nieve */
    --color-dark: #0F1F35;           /* Footer dark */
    
    /* Tipografías */
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;
    --font-accent: 'Playfair Display', serif;
    
    /* Espaciado (sistema de 8px) */
    --space-xs: 0.5rem;   /* 8px */
    --space-sm: 1rem;     /* 16px */
    --space-md: 1.5rem;   /* 24px */
    --space-lg: 2rem;     /* 32px */
    --space-xl: 3rem;     /* 48px */
    --space-xxl: 5rem;    /* 80px */
    
    /* Breakpoints */
    --bp-mobile: 320px;
    --bp-tablet: 768px;
    --bp-desktop: 1024px;
    --bp-wide: 1200px;
    
    /* Sombras */
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 8px rgba(0,0,0,0.12);
    --shadow-lg: 0 8px 16px rgba(0,0,0,0.15);
    --shadow-xl: 0 20px 40px rgba(0,0,0,0.2);
    
    /* Transiciones */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

### ✅ **REGLA 3: Componentes Reutilizables**

```css
/* Componente Button - Reutilizable */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-sm) var(--space-md);
    border: none;
    border-radius: 25px;
    font-family: var(--font-primary);
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all var(--transition-normal);
    min-height: 44px; /* Accesibilidad touch */
}

.btn--primary {
    background-color: var(--color-accent);
    color: var(--color-primary);
}

.btn--primary:hover {
    background-color: #B8941F;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.btn--secondary {
    background-color: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn--large {
    padding: var(--space-md) var(--space-xl);
    font-size: 1.125rem;
}
```

### ✅ **REGLA 4: Grid System Responsivo**

```css
/* Sistema de Grid Responsivo */
.container {
    width: 100%;
    max-width: var(--bp-wide);
    margin: 0 auto;
    padding: 0 var(--space-md);
}

.grid {
    display: grid;
    gap: var(--space-lg);
}

.grid--2-cols {
    grid-template-columns: 1fr;
}

.grid--3-cols {
    grid-template-columns: 1fr;
}

/* Media queries progresivas */
@media (min-width: 768px) {
    .grid--2-cols {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .grid--3-cols {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .grid--3-cols {
        grid-template-columns: repeat(3, 1fr);
    }
}
```

---

## 🚀 ESTÁNDARES DE JAVASCRIPT

### ✅ **REGLA 5: Código Modular y Funcional**

```javascript
// ❌ MAL - Código monolítico
function handleEverything() {
    // 200 líneas de código mezclado
}

// ✅ BIEN - Funciones específicas y modulares
const FormHandler = {
    // Configuración
    config: {
        emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phoneRegex: /^[+]?[\d\s()-]{9,}$/,
        requiredFields: ['name', 'email', 'phone']
    },
    
    // Inicialización
    init() {
        this.bindEvents();
        this.setupValidation();
    },
    
    // Eventos
    bindEvents() {
        const form = document.querySelector('#regalo-form');
        if (form) {
            form.addEventListener('submit', this.handleSubmit.bind(this));
        }
    },
    
    // Validación
    validateField(field, value) {
        const { name } = field;
        
        switch (name) {
            case 'email':
                return this.config.emailRegex.test(value);
            case 'phone':
                return this.config.phoneRegex.test(value);
            case 'name':
                return value.trim().length >= 2;
            default:
                return true;
        }
    },
    
    // Manejo de envío
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = this.serializeForm(formData);
        
        if (this.validateForm(data)) {
            this.submitForm(data);
        }
    }
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    FormHandler.init();
});
```

### ✅ **REGLA 6: Gestión de Estado Simple**

```javascript
// Estado global de la aplicación
const AppState = {
    // Datos del formulario
    formData: {
        name: '',
        email: '',
        phone: '',
        motivation: '',
        challenges: '',
        experience_level: '',
        ratings: {
            emotional_management: 5,
            team_communication: 5,
            conflict_resolution: 5,
            decision_making: 5
        }
    },
    
    // Estado de UI
    ui: {
        isFormValid: false,
        isSubmitting: false,
        currentStep: 1,
        showThankYou: false
    },
    
    // Métodos para actualizar estado
    updateFormData(field, value) {
        this.formData[field] = value;
        this.saveToSession();
        this.validateForm();
    },
    
    updateRating(category, value) {
        this.formData.ratings[category] = parseInt(value);
        this.saveToSession();
    },
    
    // Persistencia en sesión (no localStorage)
    saveToSession() {
        // Guardar en variable de sesión para recuperar si refresca
        window.sessionFormData = { ...this.formData };
    },
    
    loadFromSession() {
        if (window.sessionFormData) {
            this.formData = { ...window.sessionFormData };
        }
    }
};
```

### ✅ **REGLA 7: Manejo de Errores Consistente**

```javascript
// Sistema de notificaciones
const NotificationSystem = {
    show(message, type = 'info', duration = 5000) {
        const notification = this.create(message, type);
        document.body.appendChild(notification);
        
        // Auto-remove
        setTimeout(() => {
            this.remove(notification);
        }, duration);
        
        return notification;
    },
    
    create(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        return notification;
    },
    
    remove(notification) {
        if (notification && notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }
};

// Uso consistente en toda la aplicación
try {
    // Operación que puede fallar
    await submitForm(data);
    NotificationSystem.show('¡Formulario enviado exitosamente!', 'success');
} catch (error) {
    console.error('Error al enviar formulario:', error);
    NotificationSystem.show('Error al enviar el formulario. Por favor, inténtalo de nuevo.', 'error');
}
```

---

## 📱 REGLAS DE RESPONSIVE DESIGN

### ✅ **REGLA 8: Mobile-First Obligatorio**

```css
/* Base: Mobile (320px+) */
.hero__title {
    font-size: 1.75rem;
    line-height: 1.2;
    text-align: center;
}

.hero__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

/* Tablet (768px+) */
@media (min-width: 768px) {
    .hero__title {
        font-size: 2.25rem;
    }
    
    .hero__content {
        flex-direction: row;
        align-items: center;
    }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
    .hero__title {
        font-size: 3rem;
        text-align: left;
    }
}
```

### ✅ **REGLA 9: Imágenes Responsivas Obligatorias**

```html
<!-- Imágenes con múltiples resoluciones -->
<picture class="hero__image">
    <source 
        media="(min-width: 1024px)" 
        srcset="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=face 1x,
                https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&h=1200&fit=crop&crop=face 2x">
    <source 
        media="(min-width: 768px)" 
        srcset="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face 1x,
                https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop&crop=face 2x">
    <img 
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
        alt="Ainara Unamunzaga - Coach en Inteligencia Emocional"
        class="profile-image"
        loading="lazy">
</picture>
```

---

## 🔍 REGLAS DE SEO Y PERFORMANCE

### ✅ **REGLA 10: Semántica HTML5 Obligatoria**

```html
<!-- Estructura semántica correcta -->
<main role="main">
    <section class="hero" id="inicio" aria-labelledby="hero-title">
        <div class="container">
            <header class="hero__header">
                <h1 id="hero-title" class="hero__title">
                    Transforma tu Liderazgo desde la Inteligencia Emocional
                </h1>
                <p class="hero__subtitle">Coaching Especializado • PNL • Reiki</p>
            </header>
            <!-- contenido hero -->
        </div>
    </section>
    
    <section class="services" id="servicios" aria-labelledby="services-title">
        <div class="container">
            <header class="section__header">
                <h2 id="services-title" class="section__title">Mis Servicios</h2>
            </header>
            <!-- contenido servicios -->
        </div>
    </section>
</main>
```

### ✅ **REGLA 11: Performance Budget**

```javascript
// Reglas de performance obligatorias
const PERFORMANCE_BUDGET = {
    // Tiempos máximos
    FIRST_CONTENTFUL_PAINT: 1500, // 1.5s
    LARGEST_CONTENTFUL_PAINT: 2500, // 2.5s
    FIRST_INPUT_DELAY: 100, // 100ms
    CUMULATIVE_LAYOUT_SHIFT: 0.1,
    
    // Tamaños máximos
    TOTAL_BUNDLE_SIZE: 500, // 500KB
    CRITICAL_CSS_SIZE: 50, // 50KB
    HERO_IMAGE_SIZE: 150, // 150KB
    
    // Recursos máximos
    HTTP_REQUESTS: 50,
    THIRD_PARTY_SCRIPTS: 3
};

// Lazy loading obligatorio
const ImageLazyLoader = {
    init() {
        if ('IntersectionObserver' in window) {
            this.setupIntersectionObserver();
        } else {
            this.loadAllImages(); // Fallback
        }
    },
    
    setupIntersectionObserver() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
};
```

---

## 📋 REGLAS DE FORMULARIOS

### ✅ **REGLA 12: Validación Progresiva**

```javascript
const FormValidation = {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
            message: 'Nombre debe tener entre 2-50 caracteres, solo letras'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Email debe tener formato válido'
        },
        phone: {
            required: true,
            pattern: /^[+]?[\d\s()-]{9,15}$/,
            message: 'Teléfono debe tener formato válido'
        }
    },
    
    validateField(fieldName, value, showError = true) {
        const rule = this.rules[fieldName];
        if (!rule) return true;
        
        // Required check
        if (rule.required && !value.trim()) {
            if (showError) this.showFieldError(fieldName, 'Este campo es obligatorio');
            return false;
        }
        
        // Pattern check
        if (value && rule.pattern && !rule.pattern.test(value)) {
            if (showError) this.showFieldError(fieldName, rule.message);
            return false;
        }
        
        // Length checks
        if (value && rule.minLength && value.length < rule.minLength) {
            if (showError) this.showFieldError(fieldName, rule.message);
            return false;
        }
        
        this.clearFieldError(fieldName);
        return true;
    },
    
    showFieldError(fieldName, message) {
        const field = document.querySelector(`[name="${fieldName}"]`);
        const errorElement = field.parentNode.querySelector('.field-error');
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
        
        field.classList.add('field--error');
    }
};
```

---

## 🧪 REGLAS DE TESTING

### ✅ **REGLA 13: Tests Manuales Obligatorios**

```javascript
// Checklist de testing manual
const MANUAL_TESTS = {
    // Funcionalidad básica
    navigation: [
        'Navegación funciona en todas las secciones',
        'Links internos con smooth scroll',
        'Navegación móvil responsive',
        'CTAs visibles y funcionales'
    ],
    
    forms: [
        'Validación en tiempo real funciona',
        'Mensajes de error claros',
        'Envío de formulario exitoso',
        'Estados de loading visibles'
    ],
    
    responsive: [
        'Mobile (320px-767px) funcional',
        'Tablet (768px-1023px) funcional',
        'Desktop (1024px+) funcional',
        'Imágenes se adaptan correctamente'
    ],
    
    performance: [
        'Página carga en menos de 3 segundos',
        'Imágenes lazy load funcionan',
        'No hay layout shifts visibles',
        'Animaciones suaves'
    ],
    
    accessibility: [
        'Navegación por teclado funciona',
        'Alt texts en imágenes',
        'Contraste adecuado',
        'Focus indicators visibles'
    ]
};

// Función de auto-test
const AutoTester = {
    runBasicTests() {
        const results = [];
        
        // Test de elementos críticos
        const criticalElements = [
            '#inicio',
            '#servicios', 
            '#regalo-form',
            '.cta-button'
        ];
        
        criticalElements.forEach(selector => {
            const element = document.querySelector(selector);
            results.push({
                test: `Element ${selector}`,
                passed: !!element,
                element: element
            });
        });
        
        // Test de formulario
        const form = document.querySelector('#regalo-form');
        if (form) {
            const requiredFields = form.querySelectorAll('[required]');
            results.push({
                test: 'Required fields present',
                passed: requiredFields.length >= 3,
                count: requiredFields.length
            });
        }
        
        console.table(results);
        return results;
    }
};
```

---

## 🚀 REGLAS DE DEPLOYMENT

### ✅ **REGLA 14: Pre-deployment Checklist**

```bash
#!/bin/bash
# Script de pre-deployment

echo "🔍 Ejecutando validaciones pre-deployment..."

# 1. Validación HTML
echo "Validando HTML..."
if ! npx html-validate src/index.html; then
    echo "❌ HTML validation failed"
    exit 1
fi

# 2. Validación CSS
echo "Validando CSS..."
if ! npx stylelint "src/styles/**/*.css"; then
    echo "❌ CSS validation failed"
    exit 1
fi

# 3. Test de performance
echo "Testing performance..."
npm run lighthouse-ci

# 4. Test de accesibilidad
echo "Testing accessibility..."
npm run axe-test

# 5. Optimización de imágenes
echo "Optimizando imágenes..."
npm run optimize-images

# 6. Minificación
echo "Minificando archivos..."
npm run build

echo "✅ Todas las validaciones pasaron. Listo para deployment."
```

### ✅ **REGLA 15: Environment Configuration**

```javascript
// Configuración por ambiente
const CONFIG = {
    development: {
        API_BASE_URL: 'http://localhost:3000',
        FORM_ENDPOINT: '/api/forms/lead-magnet',
        ANALYTICS_ID: null,
        DEBUG: true,
        CACHE_BUST: Date.now()
    },
    
    staging: {
        API_BASE_URL: 'https://staging-api.ainaracoaching.com',
        FORM_ENDPOINT: '/api/forms/lead-magnet',
        ANALYTICS_ID: 'G-STAGING123',
        DEBUG: true,
        CACHE_BUST: Date.now()
    },
    
    production: {
        API_BASE_URL: 'https://api.ainaracoaching.com',
        FORM_ENDPOINT: '/api/forms/lead-magnet',
        ANALYTICS_ID: 'G-PROD456789',
        DEBUG: false,
        CACHE_BUST: '{{BUILD_NUMBER}}'
    }
};

const ENV = process.env.NODE_ENV || 'development';
const config = CONFIG[ENV];
```

---

## 📚 DOCUMENTACIÓN OBLIGATORIA

### ✅ **REGLA 16: Comentarios y Documentación**

```css
/* 
 * COMPONENTE: Hero Section
 * PROPÓSITO: Sección principal con CTA y imagen de Ainara
 * DEPENDENCIAS: variables.css, animations.css
 * RESPONSIVE: Mobile-first, 3 breakpoints
 * ÚLTIMA ACTUALIZACIÓN: 2024-01-15
 */
.hero {
    /* Layout y posicionamiento */
    position: relative;
    padding: var(--space-xxl) 0 var(--space-xl);
    overflow: hidden;
    
    /* Fondo con gradiente de marca */
    background: linear-gradient(
        135deg, 
        var(--color-primary) 0%, 
        var(--color-secondary) 100%
    );
    
    /* Elementos decorativos */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: var(--hero-pattern);
        opacity: 0.1;
        z-index: 1;
    }
}
```

```javascript
/**
 * FormHandler - Gestión del formulario de lead magnet
 * 
 * @description Maneja validación, envío y estados del formulario principal
 * @author Desarrollo Web Team
 * @version 1.2.0
 * @since 2024-01-10
 * 
 * @dependencies
 * - NotificationSystem (notifications.js)
 * - AppState (state.js)
 * 
 * @methods
 * - init() - Inicializa el componente
 * - validateForm() - Valida todos los campos
 * - submitForm() - Envía el formulario
 * 
 * @events
 * - 'form:submit' - Disparado al enviar formulario
 * - 'form:validation' - Disparado al cambiar validación
 */
const FormHandler = {
    // Implementación...
};
```

### ✅ **REGLA 17: README Técnico**

```markdown
## 🔧 Instalación y Configuración

### Prerrequisitos
- Node.js 16.0+
- NPM 8.0+
- Git

### Instalación Local
```bash
git clone [repo-url]
cd ainara-coach-website
npm install
npm run dev
```

### Scripts Disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run test` - Ejecutar tests
- `npm run lint` - Linting de código
- `npm run lighthouse` - Audit de performance

### Variables de Entorno
```env
NODE_ENV=development
API_ENDPOINT=https://api.ainaracoaching.com
FORM_WEBHOOK=webhook-url
ANALYTICS_ID=G-XXXXXXXXXX
```
```

---

## ⚡ REGLAS DE OPTIMIZACIÓN

### ✅ **REGLA 18: Critical CSS Inline**

```html
<head>
    <!-- Critical CSS inline para above-the-fold -->
    <style>
        /* Variables críticas */
        :root{--color-primary:#1B365D;--color-accent:#D4AF37;--font-primary:'Poppins',sans-serif}
        
        /* Header crítico */
        header{background-color:var(--color-primary);position:fixed;width:100%;top:0;z-index:1000}
        
        /* Hero crítico */
        .hero{background:linear-gradient(135deg,var(--color-primary) 0%,#7A9B7F 100%);padding:120px 0 80px;color:white}
        .hero__title{font-family:var(--font-primary);font-size:3rem;font-weight:700;margin-bottom:1rem}
        
        /* CTA crítico */
        .cta-button{background-color:var(--color-accent);color:var(--color-primary);padding:0.8rem 1.5rem;border-radius:25px;text-decoration:none;font-weight:600}
    </style>
    
    <!-- CSS no crítico con preload -->
    <link rel="preload" href="styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="styles/main.css"></noscript>
</head>
```

### ✅ **REGLA 19: Lazy Loading Strategy**

```javascript
// Estrategia de lazy loading por prioridad
const LazyLoadManager = {
    priorities: {
        critical: [], // Hero image, logo
        high: [],     // Above-the-fold content
        medium: [],   // Visible on scroll
        low: []       // Footer, testimonials
    },
    
    init() {
        // Cargar críticos inmediatamente
        this.loadCritical();
        
        // Cargar high priority después de critical
        setTimeout(() => this.loadHigh(), 100);
        
        // Setup intersection observer para el resto
        this.setupIntersectionObserver();
    },
    
    loadCritical() {
        // Hero image, logo, navigation
        const criticalImages = document.querySelectorAll('[data-priority="critical"]');
        criticalImages.forEach(img => this.loadImage(img));
    }
};
```

---

## 🛡️ REGLAS DE SEGURIDAD

### ✅ **REGLA 20: Sanitización y Validación**

```javascript
// Sanitización de inputs obligatoria
const InputSanitizer = {
    sanitizeText(input) {
        return input
            .trim()
            .replace(/[<>]/g, '') // Remove basic HTML
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .substring(0, 500); // Limit length
    },
    
    sanitizeEmail(email) {
        return email
            .toLowerCase()
            .trim()
            .replace(/[^\w@.-]/g, ''); // Only allow valid email chars
    },
    
    sanitizePhone(phone) {
        return phone
            .replace(/[^\d+\s()-]/g, '') // Only numbers and valid chars
            .substring(