"""Rebuild Ainara's original free workbook. Requires reportlab and PyMuPDF."""
from pathlib import Path
from urllib.parse import quote
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
import fitz

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'private-resources/de-la-pausa-al-primer-paso.pdf'
OUT.parent.mkdir(exist_ok=True)
for name, file in [('Serif','DejaVuSerif.ttf'),('Sans','DejaVuSans.ttf'),('Bold','DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, '/usr/share/fonts/truetype/dejavu/' + file))
pdfmetrics.registerFontFamily('Serif', normal='Serif', bold='Serif', italic='Serif', boldItalic='Serif')
W,H = 419.53,595.28 # A5, comfortable to print or read on a tablet
M=36
CREAM,FOREST,SAGE,MIST,INK = map(HexColor, ['#F5F0E3','#3D4A35','#6B7755','#C4CDB3','#353b32'])
c=canvas.Canvas(str(OUT), pagesize=(W,H))
c.setTitle('De la pausa al primer paso | Ainara')
c.setAuthor('Ainara Unamunzaga')
c.setSubject('Cuaderno gratuito de reflexión: tres ejercicios y un plan de siete días')
def txt(text,x,y,size=10,font='Sans',color=INK):
    c.setFillColor(color);c.setFont(font,size);c.drawString(x,y,text)
def para(text,y,size=10.2,color=INK,width=W-2*M,font='Sans'):
    p=Paragraph(text,ParagraphStyle('p',fontName=font,fontSize=size,leading=size*1.5,textColor=color))
    _,h=p.wrap(width,H);p.drawOn(c,M,y-h);return y-h
def page(n,tag,dark=False):
    c.setFillColor(FOREST if dark else CREAM);c.rect(0,0,W,H,fill=1,stroke=0)
    col=CREAM if dark else FOREST
    txt('AINARA / CUADERNO GRATUITO',M,H-32,7.5,'Sans',col)
    c.setStrokeColor(MIST);c.setLineWidth(.5);c.line(M,42,W-M,42)
    txt(tag.upper(),M,26,6.6,'Sans',col);txt(f'{n:02d} / 10',W-M-35,26,7,'Sans',col)
def title(kicker,heading):
    txt(kicker.upper(),M,H-76,8,'Bold',SAGE)
    return para(heading,H-96,25,FOREST,font='Serif')-20
def lines(y,label,count=3):
    y=para(label,y,10.2,FOREST,font='Bold')-15
    c.setStrokeColor(MIST);c.setLineWidth(.5)
    for _ in range(count):c.line(M,y,W-M,y);y-=24
    return y-15
def note(text,y):
    c.setFillColor(MIST);c.roundRect(M,y-68,W-2*M,68,7,fill=1,stroke=0)
    p=Paragraph(text,ParagraphStyle('n',fontName='Sans',fontSize=9,leading=14,textColor=FOREST));_,h=p.wrap(W-2*M-28,60);p.drawOn(c,M+14,y-14-h)
def finish():c.showPage()

page(1,'Un espacio para ti',True)
txt('OBSERVAR · ELEGIR · EMPEZAR',M,495,8,'Sans',MIST)
para('De la pausa<br/>al primer<br/><i>paso.</i>',455,39,CREAM,font='Serif')
para('No necesitas resolverlo todo.<br/>Empieza por algo que sí puedas cuidar.',260,14,CREAM,font='Serif')
c.setStrokeColor(MIST);c.setLineWidth(1)
for i in range(3):c.circle(350,104,10+i*10,stroke=1,fill=0)
para('Tres ejercicios para ordenar una situación<br/>y un plan de siete días para probar un cambio.',168,10.5,CREAM,width=260)
txt('Ainara Unamunzaga',M,76,12,'Serif',CREAM);finish()

page(2,'Antes de empezar')
y=title('Una invitación','Un rato contigo.<br/>Sin hacerlo perfecto.')
y=para('Reserva unos 15 minutos para los ejercicios. Después, vuelve unos minutos al día durante una semana. Si necesitas más tiempo, también está bien.',y)-22
for n,h,b in [('01','Elige una sola situación','Algo cotidiano: una conversación pendiente, un compromiso que pesa o un hábito que quieres revisar.'),('02','Escribe para ti','No hay respuestas correctas. Puedes dejar espacios en blanco. No hace falta terminar hoy.'),('03','Cuida tus límites','Tus respuestas se quedan en este cuaderno. No necesitas enviarlas a Ainara ni compartir detalles íntimos para pedir información.')]:
    txt(n,M,y,20,'Serif',SAGE);txt(h,M+38,y+3,11,'Bold');y=para(b,y-15,10)-25
note('Este material es de reflexión personal. No es un diagnóstico ni sustituye la atención psicológica o médica. Si un ejercicio te incomoda, puedes parar y buscar apoyo.',133);finish()

page(3,'Ejercicio 1 / Observar')
y=title('01 / Lo que está pasando','Separa el hecho<br/>de lo que te cuentas.')
y=para('Ejemplo: «No respondí a un mensaje en dos días» es un hecho. «Siempre decepciono a los demás» es una interpretación. Separarlos puede abrir otras opciones.',y)-24
y=lines(y,'¿Qué ha ocurrido? Describe lo observable.',3)
y=lines(y,'¿Qué significado le estoy dando?',3)
note('Una pregunta de apoyo: ¿qué otra explicación es posible, aunque todavía no sepa si es cierta?',127);finish()

page(4,'Ejercicio 1 / Escuchar')
y=title('Continúa observando','¿Qué te está<br/>pidiendo atención?')
y=para('No busques la emoción «correcta». Puedes escribir con tus propias palabras o responder «todavía no lo sé».',y)-22
y=lines(y,'Cuando pienso en esta situación, noto…',3)
y=lines(y,'Lo que necesito cuidar ahora es…',3)
note('Algunas posibilidades: descanso, información, tiempo, un límite o una conversación. Elige lo que tenga sentido para ti.',127);finish()

page(5,'Ejercicio 2 / Elegir')
y=title('02 / Tu margen de acción','No todo depende de ti.<br/>Algo sí está a tu alcance.')
y=para('Distingue tu acción de la respuesta de otras personas. Puedes preparar una conversación; no controlar cómo reaccionará la otra persona.',y)-25
y=lines(y,'Ahora no puedo decidir ni controlar…',3)
y=lines(y,'Sí puedo elegir, pedir o probar…',3)
note('Pedir apoyo también es una acción. No tienes que resolver a solas lo que requiere ayuda o cambios compartidos.',127);finish()

page(6,'Ejercicio 3 / Empezar')
y=title('03 / Un paso pequeño','Hazlo suficientemente<br/>pequeño para empezar.')
y=para('Elige una acción de unos diez minutos. No «poner mi vida en orden», sino «anotar los dos compromisos que necesito revisar».',y)-23
y=lines(y,'Mi primer paso será…',2)
y=lines(y,'Lo haré el día… a las… en…',2)
y=lines(y,'Si aparece un obstáculo, lo haré más fácil así…',2)
note('Señal de que lo hice: algo observable. Por ejemplo, tener la lista escrita, no sentirme perfectamente bien.',127);finish()

page(7,'Tu semana / Probar')
y=title('Siete días, sin examen','Una semana para probar.<br/>No para demostrar.')
y=para('Anota la fecha al empezar. Si un día no haces nada, no necesitas compensarlo: observa qué pasó y retoma cuando puedas.',y)-25
rows=[('1','Haz tu primer paso.'),('2','Observa qué lo facilitó.'),('3','Reduce una dificultad.'),('4','Decide si necesitas apoyo.'),('5','Repite o adapta tu paso.'),('6','Reconoce algo que aprendiste.'),('7','Revisa la semana, sin juzgarte.')]
for d,prompt in rows:
    c.setFillColor(MIST if int(d)%2 else HexColor('#e8e6d8'));c.roundRect(M,y-35,W-2*M,35,4,fill=1,stroke=0)
    txt(d,M+10,y-18,16,'Serif',FOREST);txt(prompt,M+40,y-15,8.5)
    txt('Fecha: __________   Mi nota: ______________________',M+40,y-28,7.4)
    y-=40
finish()

page(8,'Después de siete días / Revisar')
y=title('Lo que has descubierto','No midas solo lo que hiciste.<br/>Mira lo que aprendiste.')
y=lines(y,'Algo que comprendí mejor esta semana…',2)
y=lines(y,'Algo que me ayudó o que necesito cambiar…',2)
y=lines(y,'La próxima semana quiero continuar con…',2)
note('Si no empezaste, puedes volver a la página 6 y hacer el paso más pequeño. Este cuaderno no es una prueba de fuerza de voluntad.',127);finish()

page(9,'Elegir cómo seguir')
y=title('Tu siguiente paso','Puedes seguir a tu ritmo.<br/>También con compañía.')
y=para('Este cuaderno abre una conversación contigo. Lo que has escrito puede ayudarte a elegir cómo continuar, sin necesidad de comprar nada hoy.',y)-27
for k,h,b in [('A','Quiero seguir por mi cuenta','Vuelve a los tres ejercicios con otra situación. Si buscas más propuestas de escritura, explora la Guía integral de transformación de Ainara.'),('B','Me ayuda tener una estructura','Re-Conéctate ofrece un recorrido de contenido y materiales. Consulta su programa para ver si encaja con lo que buscas.'),('C','Quiero hablar de mi situación','Puedes preguntar por las sesiones individuales y conocer cómo trabaja Ainara antes de decidir. Pedir información no te compromete a contratar.')]:
    txt(k,M,y,23,'Serif',SAGE);txt(h,M+35,y+4,10.5,'Bold');y=para(b,y-17,9.7)-28
finish()

page(10,'Continuar es una elección',True)
para('Ya tienes<br/>un punto<br/><i>de partida.</i>',480,36,CREAM,font='Serif')
para('Si quieres explorar cómo seguir con Ainara, puedes empezar con una pregunta sencilla:',295,12,CREAM)
para('«He hecho el cuaderno y me gustaría saber qué opción podría encajar conmigo».',238,14,CREAM,font='Serif')
message='Hola Ainara, he hecho el cuaderno De la pausa al primer paso y me gustaría saber cómo puedo continuar. ¿Podrías explicarme las opciones?'
url='https://wa.me/34692627353?text='+quote(message)
c.setFillColor(CREAM);c.roundRect(M,117,W-2*M,48,8,fill=1,stroke=0)
txt('HABLAR CON AINARA',M+62,137,11,'Bold',FOREST)
c.linkURL(url,(M,117,W-M,165),relative=0,thickness=0)
txt('O escribe a: ainaracoachpnl@gmail.com',M,92,9,'Sans',CREAM)
c.linkURL('mailto:ainaracoachpnl@gmail.com',(M,87,W-M,105),relative=0,thickness=0)
para('Tú decides si envías el mensaje. No hay reserva ni cobro. Puedes pedir información sin enviar las respuestas de tu cuaderno.',77,7.4,CREAM)
finish();c.save()

doc=fitz.open(OUT)
assets=ROOT/'public/images/free-workbook';assets.mkdir(parents=True,exist_ok=True)
for i,name in [(0,'cover'),(2,'sample'),(9,'back')]:
    pix=doc[i].get_pixmap(matrix=fitz.Matrix(2,2),alpha=False)
    from PIL import Image
    Image.frombytes('RGB',(pix.width,pix.height),pix.samples).save(assets/(name+'.webp'),quality=88)
print(f'Created {OUT} ({len(doc)} pages)')
