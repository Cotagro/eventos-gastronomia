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
  dominios: ['inacapmail.cl', 'inacap.cl'],

  carreras: ['Gastronomía Internacional', 'Administración Gastronómica Internacional', 'Turismo', 'Hotelería'],
  areas: ['Docencia Gastronomía', 'Docencia Turismo y Hospitalidad', 'Dirección de Carrera', 'Asuntos Estudiantiles', 'Administración', 'Biblioteca'],
  lugares: ['Taller de cocina 1', 'Taller de cocina 2', 'Taller de pastelería', 'Comedor del área', 'Sala de demostraciones'],

  // Las cinco preguntas de la encuesta (escala de 1 a 5). Si cambia el texto, mantenga cinco.
  preguntas: [
    'Satisfacción general con la actividad',
    'Claridad y utilidad de los contenidos',
    'Dominio del tema de quienes dirigieron la actividad',
    'Organización: información previa, puntualidad y duración',
    'Instalaciones y recursos: espacio, equipamiento e insumos'
  ],

  usarEmuladores: false   // solo para pruebas locales
};
