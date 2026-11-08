/**
 * Textos fijos de la interfaz en cada idioma.
 *
 * El español es la fuente: define qué claves existen. El tipo `Textos`
 * obliga a que gallego e inglés tengan EXACTAMENTE las mismas claves, así
 * que si añades una clave en `es` y olvidas traducirla, TypeScript da error.
 *
 * Aquí solo va texto de interfaz (menú, títulos, etiquetas). El contenido
 * editable (carta, espacio) irá en Content Collections.
 */

export const idiomas = {
  es: 'Español',
  gl: 'Galego',
  en: 'English',
} as const;

export type Idioma = keyof typeof idiomas;

export const idiomaPorDefecto: Idioma = 'es';

const es = {
  // Metadatos
  'sitio.nombre': 'Tres Cafés',
  'sitio.descripcion': 'Café 100 % arábica y desayunos sin prisas.',

  // Accesibilidad
  'salto.contenido': 'Saltar al contenido',

  // Navegación
  'nav.etiqueta': 'Principal',
  'nav.inicio': 'Inicio',
  'nav.carta': 'Carta',
  'nav.espacio': 'Espacio',
  'nav.nosotros': 'Nosotros',
  'nav.visitanos': 'Visítanos',

  // Selector de idioma
  'idioma.etiqueta': 'Idioma',

  // Etiquetas de sección
  'etiqueta.categoria': 'Cafetería · Desayunos',
};

export type ClaveTexto = keyof typeof es;
type Textos = Record<ClaveTexto, string>;

const gl: Textos = {
  'sitio.nombre': 'Tres Cafés',
  'sitio.descripcion': 'Café 100 % arábica e almorzos sen présas.',

  'salto.contenido': 'Saltar ao contido',

  'nav.etiqueta': 'Principal',
  'nav.inicio': 'Inicio',
  'nav.carta': 'Carta',
  'nav.espacio': 'Espazo',
  'nav.nosotros': 'Nós',
  'nav.visitanos': 'Visítanos',

  'idioma.etiqueta': 'Idioma',

  'etiqueta.categoria': 'Cafetaría · Almorzos',
};

const en: Textos = {
  'sitio.nombre': 'Tres Cafés',
  'sitio.descripcion': '100% Arabica coffee and unhurried breakfasts.',

  'salto.contenido': 'Skip to content',

  'nav.etiqueta': 'Main',
  'nav.inicio': 'Home',
  'nav.carta': 'Menu',
  'nav.espacio': 'The space',
  'nav.nosotros': 'About us',
  'nav.visitanos': 'Visit us',

  'idioma.etiqueta': 'Language',

  'etiqueta.categoria': 'Café · Breakfast',
};

export const ui: Record<Idioma, Textos> = { es, gl, en };
