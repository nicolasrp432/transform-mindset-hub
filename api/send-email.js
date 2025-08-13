import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS - Configuración más robusta
  const origin = req.headers.origin;
  const allowedOrigins = [
    'https://ainaracoaching.com',
    'https://www.ainaracoaching.com',
    'https://api.ainaracoaching.com',
    'https://transform-mindset-cgz2u0ypf-nicolasrp432s-projects.vercel.app',
    'http://localhost:3000',
    'http://localhost:4173',
    'http://localhost:4174'
  ];

  if (allowedOrigins.includes(origin) || !origin) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '86400'); // 24 horas

  // Manejar preflight OPTIONS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { formType, ...formData } = req.body;

    // Validate required fields based on form type
    if (formType === 'contact') {
      if (!formData.email || !formData.name) {
        return res.status(400).json({ error: 'Email and name are required' });
      }
    } else if (formType === 'assessment') {
      if (!formData.email || !formData.fullName) {
        return res.status(400).json({ error: 'Email and fullName are required' });
      }
    }

    let emailContent = '';
    let subject = '';

    if (formType === 'contact') {
      subject = `Nuevo mensaje de contacto de ${formData.name}`;
      emailContent = `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #1B365D 0%, #7A9B7F 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #FAFAFA; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: 1px;">Ainara Coach</h1>
            <p style="color: #D4AF37; margin: 8px 0 0 0; font-size: 14px; font-weight: 500;">Coaching en Inteligencia Emocional • PNL • Reiki</p>
          </div>
          
          <div style="background: #FAFAFA; padding: 30px 20px; border-left: 4px solid #D4AF37;">
            <h2 style="color: #1B365D; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">📩 Nuevo Mensaje de Contacto</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1B365D; width: 30%;">Nombre:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1B365D;">Email:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${formData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1B365D;">Teléfono:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${formData.phone || 'No proporcionado'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #1B365D;">Asunto:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.subject || 'Sin asunto'}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h3 style="color: #1B365D; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">💬 Mensaje:</h3>
              <div style="color: #333; background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 3px solid #7A9B7F;">
                ${formData.message?.replace(/\n/g, '<br>') || 'Sin mensaje'}
              </div>
            </div>
          </div>
          
          <div style="background: #1B365D; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="color: #FAFAFA; margin: 0; font-size: 14px;">
              <strong>Ainara Coach</strong> - Transformando vidas a través de la Inteligencia Emocional
            </p>
            <p style="color: #D4AF37; margin: 5px 0 0 0; font-size: 12px;">
              Este mensaje fue enviado desde ainaracoaching.com
            </p>
          </div>
        </div>
      `;
    } else if (formType === 'assessment') {
      subject = `Nueva evaluación emocional de ${formData.fullName}`;
      emailContent = `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #1B365D 0%, #7A9B7F 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: #FAFAFA; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: 1px;">Ainara Coach</h1>
            <p style="color: #D4AF37; margin: 8px 0 0 0; font-size: 14px; font-weight: 500;">Coaching en Inteligencia Emocional • PNL • Reiki</p>
          </div>
          
          <div style="background: #FAFAFA; padding: 30px 20px; border-left: 4px solid #D4AF37;">
            <h2 style="color: #1B365D; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">🧠 Nueva Evaluación de Inteligencia Emocional</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
              <h3 style="color: #1B365D; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4AF37; padding-bottom: 8px;">👤 Información Personal</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1B365D; width: 30%;">Nombre:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${formData.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #1B365D;">Email:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${formData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #1B365D;">Teléfono:</td>
                  <td style="padding: 8px 0; color: #333;">${formData.phone}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
              <h3 style="color: #1B365D; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4AF37; padding-bottom: 8px;">🎯 Motivación y Desafíos</h3>
              <div style="margin-bottom: 15px;">
                <strong style="color: #1B365D;">Motivación:</strong>
                <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-top: 5px; border-left: 3px solid #7A9B7F;">
                  ${formData.motivation}
                </div>
              </div>
              <div>
                <strong style="color: #1B365D;">Desafíos:</strong>
                <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-top: 5px; border-left: 3px solid #7A9B7F;">
                  ${formData.challenges}
                </div>
              </div>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
              <h3 style="color: #1B365D; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4AF37; padding-bottom: 8px;">📊 Nivel de Desarrollo</h3>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 3px solid #D4AF37;">
                <strong style="color: #1B365D;">Nivel emocional actual:</strong> ${formData.emotionalLevel}
              </div>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h3 style="color: #1B365D; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D4AF37; padding-bottom: 8px;">📈 Autoevaluación (1-10)</h3>
              <div style="display: grid; gap: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #f8f9fa; border-radius: 6px;">
                  <span style="color: #1B365D; font-weight: 500;">🧘 Gestión emocional personal:</span>
                  <span style="background: #D4AF37; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;">${formData.personalManagement}/10</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #f8f9fa; border-radius: 6px;">
                  <span style="color: #1B365D; font-weight: 500;">👥 Comunicación con equipos:</span>
                  <span style="background: #D4AF37; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;">${formData.teamCommunication}/10</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #f8f9fa; border-radius: 6px;">
                  <span style="color: #1B365D; font-weight: 500;">🤝 Resolución de conflictos:</span>
                  <span style="background: #D4AF37; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;">${formData.conflictResolution}/10</span>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #f8f9fa; border-radius: 6px;">
                  <span style="color: #1B365D; font-weight: 500;">⚡ Toma de decisiones bajo presión:</span>
                  <span style="background: #D4AF37; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;">${formData.pressureDecisions}/10</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style="background: #1B365D; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="color: #FAFAFA; margin: 0; font-size: 14px;">
              <strong>Ainara Coach</strong> - Transformando vidas a través de la Inteligencia Emocional
            </p>
            <p style="color: #D4AF37; margin: 5px 0 0 0; font-size: 12px;">
              Esta evaluación fue enviada desde ainaracoaching.com
            </p>
          </div>
        </div>
      `;
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Ainara Coach <info@ainaracoaching.com>',
      to: ['ainaracoachpnl@gmail.com'],
      subject: subject,
      html: emailContent,
      reply_to: formData.email,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
}