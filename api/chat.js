// Serverless function: /api/chat
// Uses Groq (OpenAI-compatible) to answer in Spanish with a professional and approachable tone
// Knowledge base grounded on site FAQs. No secrets are logged.

const allowedOrigins = [
  'https://ainaracoaching.com',
  'https://www.ainaracoaching.com',
  'https://api.ainaracoaching.com',
  'https://transform-mindset-cgz2u0ypf-nicolasrp432s-projects.vercel.app',
  'http://localhost:3000',
  'http://localhost:4173',
  'http://localhost:4174'
];

const DEFAULT_MODEL = process.env.GROQ_MODEL || 'llama-3.1-8b-instant';

// Minimal in-file knowledge base built from FAQSection.tsx
// Keep this in sync with the site FAQ content
const KB = [
  {
    category: 'general',
    question: '¿Qué es exactamente el coaching de transformación personal?',
    answer:
      'Es un proceso de acompañamiento personalizado que combina técnicas de coaching tradicional con PNL, inteligencia emocional y neuroplasticidad. Te ayudo a identificar y superar patrones limitantes, desarrollar nuevas habilidades de liderazgo y crear la versión más auténtica y poderosa de ti mismo. No es terapia, sino un enfoque orientado a la acción y los resultados futuros.'
  },
  {
    category: 'general',
    question: '¿Cómo sé si el coaching es adecuado para mí?',
    answer:
      'El coaching es ideal si sientes que tienes potencial sin explotar, quieres mejorar tu liderazgo, buscas mayor claridad en tus objetivos, o simplemente sabes que puedes ser una mejor versión de ti mismo. Si estás dispuesto/a a comprometerte con el proceso y tomar acción, el coaching puede transformar tu vida. En nuestra consulta gratuita evaluaremos si es el momento adecuado para ti.'
  },
  {
    category: 'general',
    question: '¿Cuál es la diferencia entre coaching y terapia?',
    answer:
      'La terapia se enfoca en sanar heridas del pasado, mientras que el coaching se centra en crear tu futuro deseado. Como coach, trabajo contigo para establecer objetivos claros, desarrollar estrategias de acción y mantenerte accountable. No diagnostico ni trato problemas de salud mental. Si detectara que necesitas apoyo terapéutico, te referiría a un profesional adecuado.'
  },
  {
    category: 'general',
    question: '¿Qué resultados puedo esperar y en cuánto tiempo?',
    answer:
      'Los primeros cambios suelen notarse en las primeras 2-3 sesiones: mayor claridad, confianza y motivación. Cambios más profundos en patrones de pensamiento y comportamiento se consolidan entre los 3-6 meses. Sin embargo, cada persona es única. Algunos clientes experimentan transformaciones dramáticas en pocas semanas, otros prefieren un proceso más gradual. Lo importante es que cada sesión te acerque a tus objetivos.'
  },
  {
    category: 'proceso',
    question: '¿Cómo es una sesión típica de coaching?',
    answer:
      'Cada sesión dura entre 60-90 minutos y sigue una estructura flexible: revisamos el progreso desde la última sesión, exploramos desafíos actuales, trabajamos con herramientas específicas (PNL, visualizaciones, etc.), establecemos objetivos claros para la siguiente semana y definimos acciones concretas. Siempre adaptamos el enfoque a tus necesidades del momento.'
  },
  {
    category: 'proceso',
    question: '¿Qué pasa entre sesiones?',
    answer:
      'El trabajo real sucede entre sesiones. Te proporciono ejercicios específicos, reflexiones y pequeñas acciones para implementar. Tienes acceso directo a mí vía WhatsApp para dudas o apoyo. También envío recordatorios y recursos adicionales. El objetivo es que mantengas el momentum y integres los aprendizajes en tu día a día.'
  },
  {
    category: 'proceso',
    question: '¿Cómo mides el progreso?',
    answer:
      'Utilizamos múltiples métodos: evaluaciones iniciales y de seguimiento, escalas de satisfacción en diferentes áreas de tu vida, objetivos SMART con métricas específicas, y tu propia percepción del cambio. Cada 4 sesiones hacemos una revisión completa del progreso y ajustamos el plan si es necesario. Tu feedback es fundamental para adaptar el proceso.'
  },
  {
    category: 'proceso',
    question: '¿Qué pasa si no puedo asistir a una sesión?',
    answer:
      'Entiendo que la vida es impredecible. Puedes reprogramar cualquier sesión con 24 horas de antelación sin coste adicional. Si es una emergencia, siempre encontramos una solución. La flexibilidad es clave para que el coaching se adapte a tu vida, no al revés. También ofrezco sesiones de recuperación más cortas si es necesario.'
  },
  {
    category: 'modalidades',
    question: '¿Cuál es la diferencia entre coaching online y presencial?',
    answer:
      'La efectividad es la misma en ambas modalidades. Online ofrece mayor flexibilidad y comodidad, mientras que presencial permite una conexión más directa y técnicas adicionales como Reiki. La elección depende de tus preferencias personales, ubicación y disponibilidad. Muchos clientes combinan ambas modalidades según sus necesidades.'
  },
  {
    category: 'modalidades',
    question: '¿Ofrecés coaching grupal?',
    answer:
      'Actualmente me enfoco en coaching individual para garantizar la máxima personalización. Sin embargo, organizo talleres grupales mensuales para mis clientes y eventos especiales. Si tienes un equipo empresarial interesado, puedo diseñar un programa específico. La comunidad exclusiva de clientes también ofrece apoyo grupal complementario.'
  },
  {
    category: 'modalidades',
    question: '¿Qué incluye el programa intensivo de 30 días?',
    answer:
      'Es un programa acelerado con 8 sesiones distribuidas estratégicamente, evaluación 360° inicial, plan de acción ultra-personalizado, seguimiento diario vía WhatsApp, herramientas de autoevaluación y acceso prioritario a mí. Está diseñado para líderes que necesitan resultados rápidos y pueden comprometerse intensivamente durante un mes.'
  },
  {
    category: 'inversion',
    question: '¿Cuánto cuesta el proceso de coaching?',
    answer:
      'La inversión varía según la modalidad: individual presencial desde €140/sesión, online desde €100/sesión, programas intensivos desde €1,200. Incluye todas las bonificaciones (valor €185) sin coste adicional. Ofrezco planes de pago flexibles y la primera consulta es siempre gratuita. Considera que es una inversión en tu futuro que te acompañará toda la vida.'
  },
  {
    category: 'inversion',
    question: '¿Ofrecés planes de pago?',
    answer:
      'Sí, entiendo que es una inversión importante. Ofrezco planes de pago personalizados: pago por sesión, paquetes con descuento, o financiación hasta en 6 cuotas sin intereses. En la consulta gratuita evaluamos la opción que mejor se adapte a tu situación. Mi objetivo es que el aspecto económico no sea una barrera para tu transformación.'
  },
  {
    category: 'inversion',
    question: '¿Hay garantía de satisfacción?',
    answer:
      'Absolutamente. Si después de las primeras 3 sesiones sientes que no estamos avanzando hacia tus objetivos, te devuelvo el 100% de tu inversión. Además, me comprometo a trabajar contigo hasta que alcances los objetivos que definamos juntos. Tu éxito es mi éxito, y estoy completamente comprometida con tu transformación.'
  },
  {
    category: 'inversion',
    question: '¿Por qué debería invertir en coaching contigo específicamente?',
    answer:
      'Combino 15+ años de experiencia empresarial con formación especializada en coaching, PNL e inteligencia emocional. Mi enfoque integra neuroplasticidad y técnicas energéticas como Reiki. Tengo un historial comprobado de resultados (95% de satisfacción) y ofrezco un acompañamiento personalizado que va más allá de las sesiones. Además, garantizo tu satisfacción y resultados.'
  }
];

function setCors(req, res) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin) || !origin) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '86400');
}

function tokenize(text = '') {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9áéíóúñü\s]/gi, ' ')
    .split(/\s+/)
    .filter((t) => t && t.length > 2);
}

function scoreItem(queryTokens, item) {
  const text = `${item.question} ${item.answer}`;
  const tokens = tokenize(text);
  const tokenSet = new Set(tokens);
  let score = 0;
  for (const qt of queryTokens) {
    if (tokenSet.has(qt)) score += 1;
  }
  // Boost exact question match
  const q = item.question.toLowerCase();
  if (q.includes(queryTokens.join(' '))) score += 3;
  return score;
}

function retrieveRelevant(query, topK = 4) {
  const qTokens = tokenize(query);
  const scored = KB.map((item) => ({ item, score: scoreItem(qTokens, item) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((x) => x.item);
  // Fallback: if nothing matched, include 2 general items to anchor tone
  if (scored.length === 0) {
    return KB.filter((x) => x.category === 'general').slice(0, 2);
  }
  return scored;
}

function buildContextBlock(items) {
  const parts = items.map((i) => `Q: ${i.question}\nA: ${i.answer}`);
  return parts.join('\n\n');
}

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Missing GROQ_API_KEY' });
    }

    const { message, history } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'message is required' });
    }

    const relevant = retrieveRelevant(message);
    const context = buildContextBlock(relevant);

    const systemPrompt = `Eres el asistente del sitio web de Ainara Coach (Transform Mindset Hub). Respondes SIEMPRE en español, con tono profesional, cercano y claro.\n\nInstrucciones:\n- Basa tus respuestas únicamente en el contexto proporcionado y la información general del sitio (coaching, PNL, inteligencia emocional y Reiki, consulta gratuita de 30 minutos, modalidades online y presencial, garantía de satisfacción).\n- Si una pregunta no está cubierta por el contexto, responde brevemente que confirmarás por contacto y sugiere agendar una consulta gratuita de 30 minutos.\n- No inventes precios, diagnósticos médicos ni información no presente.\n- Sé conciso: 1–4 párrafos máximo. Ofrece un CTA al final (por ejemplo: /contacto o /regalo).`;

    const messages = [];
    messages.push({ role: 'system', content: systemPrompt + `\n\nContexto:\n${context}` });

    // Append up to last 4 user/assistant turns (if provided)
    if (Array.isArray(history)) {
      const trimmed = history.filter((m) => m && (m.role === 'user' || m.role === 'assistant')).slice(-8);
      for (const m of trimmed) {
        messages.push({ role: m.role, content: String(m.content || '') });
      }
    }

    messages.push({ role: 'user', content: message });

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        temperature: 0.3,
        max_tokens: 600,
        stream: false,
        messages
      })
    });

    if (!response.ok) {
      const txt = await response.text();
      return res.status(response.status).json({ error: 'Groq API error', details: txt });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return res.status(502).json({ error: 'Invalid response from LLM' });
    }

    res.status(200).json({ reply, sources: relevant.map((r) => ({ q: r.question, c: r.category })) });
  } catch (err) {
    console.error('Chat API error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}