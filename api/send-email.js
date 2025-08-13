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
          <div style="background: linear-gradient(135deg, #4A5D4A 0%, #878778 100%); padding: 32px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <img src="https://ainaracoaching.com/logoainaratr.png" alt="Ainara Coaching" style="height: 36px; display: inline-block;"/>
            <p style="color: #E0C4B0; margin: 6px 0 0 0; font-size: 13px;">Coaching en Inteligencia Emocional • PNL • Reiki</p>
          </div>
          
          <div style="background: #E0C4B0; padding: 30px 20px; border-left: 4px solid #878778;">
            <h2 style="color: #4A5D4A; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex-shrink: 0;">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#4A5D4A" stroke-width="2" fill="none"/>
                <polyline points="22,6 12,13 2,6" stroke="#4A5D4A" stroke-width="2"/>
              </svg>
              Nuevo Mensaje de Contacto
            </h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #4A5D4A; width: 30%;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#4A5D4A" stroke-width="2"/>
                        <circle cx="12" cy="7" r="4" stroke="#4A5D4A" stroke-width="2"/>
                      </svg>
                      Nombre:
                    </div>
                  </td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #4A5D4A;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#4A5D4A" stroke-width="2"/>
                        <polyline points="22,6 12,13 2,6" stroke="#4A5D4A" stroke-width="2"/>
                      </svg>
                      Email:
                    </div>
                  </td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${formData.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #4A5D4A;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#4A5D4A" stroke-width="2"/>
                      </svg>
                      Teléfono:
                    </div>
                  </td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;">${formData.phone || 'No proporcionado'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4A5D4A;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#4A5D4A" stroke-width="2"/>
                        <polyline points="14,2 14,8 20,8" stroke="#4A5D4A" stroke-width="2"/>
                        <line x1="16" y1="13" x2="8" y2="13" stroke="#4A5D4A" stroke-width="2"/>
                        <line x1="16" y1="17" x2="8" y2="17" stroke="#4A5D4A" stroke-width="2"/>
                        <polyline points="10,9 9,9 8,9" stroke="#4A5D4A" stroke-width="2"/>
                      </svg>
                      Asunto:
                    </div>
                  </td>
                  <td style="padding: 8px 0; color: #333;">${formData.subject || 'Sin asunto'}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h3 style="color: #4A5D4A; margin: 0 0 15px 0; font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#4A5D4A" stroke-width="2"/>
                </svg>
                Mensaje:
              </h3>
              <div style="color: #333; background: #E0C4B0; padding: 15px; border-radius: 6px; border-left: 3px solid #878778;">
                ${formData.message?.replace(/\n/g, '<br>') || 'Sin mensaje'}
              </div>
            </div>
          </div>
          
          <div style="background: #4A5D4A; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="color: #E0C4B0; margin: 0; font-size: 14px;">
              <strong>Ainara Coach</strong> - Transformando vidas a través de la Inteligencia Emocional
            </p>
            <p style="color: #878778; margin: 5px 0 0 0; font-size: 12px;">
              Este mensaje fue enviado desde ainaracoaching.com
            </p>
          </div>
        </div>
      `;
    } else if (formType === 'assessment') {
      subject = `Nueva evaluación emocional de ${formData.fullName}`;
      emailContent = `
        <div style=\"max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;\">
          <div style=\"background: linear-gradient(135deg, #4A5D4A 0%, #878778 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;\">
            <img src=\"https://ainaracoaching.com/logoainaratr.png\" alt=\"Ainara Coaching\" style=\"height: 40px; display: inline-block;\"/>
            <p style=\"color: #E0C4B0; margin: 8px 0 0 0; font-size: 14px; font-weight: 500;\">Coaching en Inteligencia Emocional • PNL • Reiki</p>
          </div>
          
          <div style=\"background: #EDEAE6; padding: 30px 20px; border-left: 4px solid #878778;\">
            <h2 style=\"color: #4A5D4A; margin: 0 0 20px 0; font-size: 22px; font-weight: 600; display: flex; align-items: center; gap: 10px;\">
              <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink: 0;\">
                <circle cx=\"12\" cy=\"8\" r=\"4\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                <path d=\"M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
              </svg>
              Nueva Evaluación de Inteligencia Emocional
            </h2>
            
            <div style=\"background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;\">
              <h3 style=\"color: #4A5D4A; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D0C4B0; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;\">
                <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\">
                  <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                  <circle cx=\"12\" cy=\"7\" r=\"4\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                </svg>
                Información Personal
              </h3>
              <table style=\"width: 100%; border-collapse: collapse;\">
                <tr>
                  <td style=\"padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #4A5D4A; width: 30%;\">Nombre:</td>
                  <td style=\"padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;\">${formData.fullName}</td>
                </tr>
                <tr>
                  <td style=\"padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #4A5D4A;\">Email:</td>
                  <td style=\"padding: 8px 0; border-bottom: 1px solid #f0f0f0; color: #333;\">${formData.email}</td>
                </tr>
                <tr>
                  <td style=\"padding: 8px 0; font-weight: 600; color: #4A5D4A;\">Teléfono:</td>
                  <td style=\"padding: 8px 0; color: #333;\">${formData.phone}</td>
                </tr>
              </table>
            </div>
            
            <div style=\"background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;\">
              <h3 style=\"color: #4A5D4A; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D0C4B0; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;\">
                <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\">
                  <circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                  <path d=\"M12 6v6l4 2\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                </svg>
                Motivación y Desafíos
              </h3>
              <div style=\"margin-bottom: 15px;\">
                <strong style=\"color: #4A5D4A;\">Motivación:</strong>
                <div style=\"background: #EDEAE6; padding: 12px; border-radius: 6px; margin-top: 5px; border-left: 3px solid #878778;\">
                  ${formData.motivation}
                </div>
              </div>
              <div>
                <strong style=\"color: #4A5D4A;\">Desafíos:</strong>
                <div style=\"background: #EDEAE6; padding: 12px; border-radius: 6px; margin-top: 5px; border-left: 3px solid #878778;\">
                  ${formData.challenges}
                </div>
              </div>
            </div>
            
            <div style=\"background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 20px;\">
              <h3 style=\"color: #4A5D4A; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D0C4B0; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;\">
                <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\">
                  <rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                  <path d=\"M3 10h18\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                </svg>
                Nivel de Desarrollo
              </h3>
              <div style=\"background: #EDEAE6; padding: 15px; border-radius: 6px; border-left: 3px solid #878778;\">
                <strong style=\"color: #4A5D4A;\">Nivel emocional actual:</strong> ${formData.emotionalLevel}
              </div>
            </div>
            
            <div style=\"background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);\">
              <h3 style=\"color: #4A5D4A; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #D0C4B0; padding-bottom: 8px; display: flex; align-items: center; gap: 8px;\">
                <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\">
                  <path d=\"M3 12h18\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                  <path d=\"M6 12c0 0 2-3 6-3s6 3 6 3\" stroke=\"#4A5D4A\" stroke-width=\"2\"/>
                </svg>
                Autoevaluación (1-10)
              </h3>
              <div style=\"display: grid; gap: 10px;\">
                <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #EDEAE6; border-radius: 6px;\">
                  <span style=\"color: #4A5D4A; font-weight: 500;\">Gestión emocional personal:</span>
                  <span style=\"background: #A47C64; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;\">${formData.personalManagement}/10</span>
                </div>
                <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #EDEAE6; border-radius: 6px;\">
                  <span style=\"color: #4A5D4A; font-weight: 500;\">Comunicación con equipos:</span>
                  <span style=\"background: #A47C64; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;\">${formData.teamCommunication}/10</span>
                </div>
                <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #EDEAE6; border-radius: 6px;\">
                  <span style=\"color: #4A5D4A; font-weight: 500;\">Resolución de conflictos:</span>
                  <span style=\"background: #A47C64; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;\">${formData.conflictResolution}/10</span>
                </div>
                <div style=\"display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #EDEAE6; border-radius: 6px;\">
                  <span style=\"color: #4A5D4A; font-weight: 500;\">Toma de decisiones bajo presión:</span>
                  <span style=\"background: #A47C64; color: white; padding: 4px 12px; border-radius: 20px; font-weight: 600;\">${formData.pressureDecisions}/10</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style=\"background: #4A5D4A; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;\">
            <p style=\"color: #E0C4B0; margin: 0; font-size: 14px;\">
              <strong>Ainara Coach</strong> - Transformando vidas a través de la Inteligencia Emocional
            </p>
            <p style=\"color: #878778; margin: 5px 0 0 0; font-size: 12px;\">
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

    // Enviar confirmación al usuario (autorespuesta con plantilla)
    try {
      const userSubject =
        formType === 'contact'
          ? `Hemos recibido tu mensaje, ${formData.name || 'gracias'}`
          : `Gracias por tu evaluación, ${formData.fullName || 'gracias'}`;

      const greetingName = formType === 'contact' ? (formData.name || 'Hola') : (formData.fullName || 'Hola');

      const userHtml = `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #4A5D4A 0%, #878778 100%); padding: 32px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <img src="https://ainaracoaching.com/logoainaratr.png" alt="Ainara Coaching" style="height: 36px; display: inline-block;"/>
            <p style="color: #E0C4B0; margin: 6px 0 0 0; font-size: 13px;">Coaching en Inteligencia Emocional • PNL • Reiki</p>
          </div>

          <div style="background: #EDEAE6; padding: 24px 20px; border-left: 4px solid #878778;">
            <h2 style="color: #4A5D4A; margin: 0 0 12px 0; font-size: 20px; font-weight: 600;">¡Gracias por escribirnos!</h2>
            <p style="margin: 0; color: #333;">${greetingName}, hemos recibido ${formType === 'contact' ? 'tu mensaje' : 'tu evaluación'} y te responderé a la brevedad.</p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); margin: 16px 0;">
            <h3 style="color: #4A5D4A; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">Resumen</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              ${formType === 'contact'
                ? `
                  <tr>
                    <td style="padding: 6px 0; color: #4A5D4A; width: 30%; font-weight: 600;">Nombre</td>
                    <td style="padding: 6px 0; color: #333;">${formData.name || '-'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #4A5D4A; font-weight: 600;">Email</td>
                    <td style="padding: 6px 0; color: #333;">${formData.email}</td>
                  </tr>
                  ${formData.phone ? `<tr><td style=\"padding: 6px 0; color: #4A5D4A; font-weight: 600;\">Teléfono</td><td style=\"padding: 6px 0; color: #333;\">${formData.phone}</td></tr>` : ''}
                  ${formData.subject ? `<tr><td style=\"padding: 6px 0; color: #4A5D4A; font-weight: 600;\">Asunto</td><td style=\"padding: 6px 0; color: #333;\">${formData.subject}</td></tr>` : ''}
                `
                : `
                  <tr>
                    <td style="padding: 6px 0; color: #4A5D4A; width: 30%; font-weight: 600;">Nombre</td>
                    <td style="padding: 6px 0; color: #333;">${formData.fullName || '-'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px 0; color: #4A5D4A; font-weight: 600;">Email</td>
                    <td style="padding: 6px 0; color: #333;">${formData.email}</td>
                  </tr>
                  ${formData.emotionalLevel ? `<tr><td style=\"padding: 6px 0; color: #4A5D4A; font-weight: 600;\">Nivel emocional</td><td style=\"padding: 6px 0; color: #333;\">${formData.emotionalLevel}</td></tr>` : ''}
                `}
            </table>
          </div>

          <div style="background: #fff; border: 1px solid #EDEAE6; padding: 18px; border-radius: 8px;">
            <p style="margin: 0 0 12px 0; color: #333;">Mientras tanto, puedes conocer más sobre el proceso o agendar una primera conversación.</p>
            <div style="text-align:center; margin-top: 10px;">
              <a href="https://ainaracoaching.com/contacto" style="display:inline-block; background:#4A5D4A; color:#fff; padding:10px 16px; border-radius:8px; text-decoration:none; font-weight:600;">Ver opciones de contacto</a>
            </div>
          </div>

          <div style="background: #4A5D4A; padding: 18px; text-align: center; border-radius: 0 0 10px 10px; margin-top: 16px;">
            <p style="color: #E0C4B0; margin: 0; font-size: 13px;">
              Si deseas, responde a este correo. Estoy para ayudarte.
            </p>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: 'Ainara Coach <info@ainaracoaching.com>',
        to: [formData.email],
        subject: userSubject,
        html: userHtml,
        reply_to: 'info@ainaracoaching.com',
      });
    } catch (autoReplyError) {
      console.error('Error enviando la autorespuesta:', autoReplyError);
      // No interrumpir la respuesta principal si falla la autorespuesta
    }

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