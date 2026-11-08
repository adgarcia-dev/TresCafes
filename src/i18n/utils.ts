import { getRelativeLocaleUrl } from 'astro:i18n';
import { idiomaPorDefecto, idiomas, ui, type ClaveTexto, type Idioma } from './ui';

export function esIdioma(valor: string | undefined): valor is Idioma {
  return valor !== undefined && valor in idiomas;
}

/** Idioma a partir del parámetro de ruta `[...lang]` (undefined = español). */
export function getIdioma(param: string | undefined): Idioma {
  return esIdioma(param) ? param : idiomaPorDefecto;
}

/** Devuelve `t(clave)` para un idioma: `const t = useTranslations(lang)`. */
export function useTranslations(lang: Idioma) {
  return (clave: ClaveTexto): string => ui[lang][clave];
}

/**
 * Rutas estáticas de una página en todos los idiomas.
 * Español sin prefijo (lang: undefined → "/carta"), el resto con prefijo
 * ("/gl/carta", "/en/carta"). Úsalo en el getStaticPaths de cada página.
 */
export function rutasPorIdioma() {
  return (Object.keys(idiomas) as Idioma[]).map((lang) => ({
    params: { lang: lang === idiomaPorDefecto ? undefined : lang },
  }));
}

/** URL de una página en un idioma: rutaLocal('en', 'carta') → "/en/carta". */
export function rutaLocal(lang: Idioma, ruta = ''): string {
  return getRelativeLocaleUrl(lang, ruta);
}

/** Quita el prefijo de idioma de una ruta: "/gl/carta" → "carta". */
export function rutaSinIdioma(pathname: string): string {
  const partes = pathname.split('/').filter(Boolean);
  if (esIdioma(partes[0])) partes.shift();
  return partes.join('/');
}
