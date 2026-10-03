// Configuración del sitio. Este archivo es público: no ponga aquí contraseñas.
// Los datos de «firebase» se copian desde la consola de Firebase:
// Configuración del proyecto > General > Tus apps > App web > Configuración del SDK.
export const CONFIG = {
  firebase: {
    apiKey: 'AIzaSyCpHqcrjbzgotEn_GfMFHgq6lxEoVZkUk0',
    authDomain: 'eventos-gastronomia.firebaseapp.com',
    projectId: 'eventos-gastronomia',
    appId: '1:408708693247:web:e74b12b6c0bdb6505aa0ca'
  },
  region: 'southamerica-west1',

  nombreSistema: 'Eventos de Gastronomía',
  sede: 'INACAP Sede Maipú',
  area: 'Área de Gastronomía',
  correoSistema: 'eventos.gastronomia.maipu@gmail.com',   // solo se muestra en la página
  dominios: ['gmail.com', 'hotmail.com', 'outlook.com', 'inacap.cl'],   // los correos @inacapmail.cl retienen los mensajes del sistema

  carreras: ['Gastronomía Internacional', 'Administración Gastronómica Internacional', 'Turismo', 'Hotelería'],
  // Opciones de área para el perfil Docente
  areasDocentes: [
    'Área Administración', 'Área Automatización, Electrónica y Robótica', 'Área Construcción', 'Área Diseño e Industria Digital',
    'Área Energía', 'Área Gastronomía y Turismo', 'Área Informática, Ciberseguridad y Telecomunicaciones', 'Área Logística',
    'Área Mecánica', 'Área Minería', 'Área Salud'
  ],
  // Opciones de área para el perfil Administrativo
  areas: [
    'Área de Operaciones', 'Área Soporte', 'Biblioteca', 'DAC', 'DAE', 'DAF', 'Gestión Docente', 'Registro Curricular'
  ],
  lugares: ['Taller de cocina 1', 'Taller de cocina 2', 'Taller de pastelería', 'Comedor del área', 'Sala de demostraciones'],

  // Las cinco preguntas de la encuesta, con nota de 1 a 7. Si cambia el texto, mantenga cinco.
  // Además hay una pregunta abierta: «¿Qué destacaría del evento y qué mejoraría?».
  preguntas: [
    'Satisfacción general con el evento',
    'Calidad de las preparaciones, productos o técnicas presentadas',
    'Dominio del tema de quienes dirigieron el evento',
    'Aporte del evento a sus conocimientos gastronómicos',
    'Ambiente y atención durante el evento'
  ],

  usarEmuladores: false   // solo para pruebas locales
};
