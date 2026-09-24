/**
 * Convierte `*palabras*` en <em class="acento"> (itálica serif) para titulares
 * escritos en Markdown/frontmatter. Escapa el resto del texto.
 */
export function conAcento(texto: string): string {
  const escapado = texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return escapado.replace(/\*([^*]+)\*/g, '<em class="acento">$1</em>');
}

/** Quita los marcadores de acento para usos en texto plano (title, alt, schema). */
export function sinAcento(texto: string): string {
  return texto.replace(/\*([^*]+)\*/g, '$1');
}

/** Número de sección con dos dígitos: 1 → «01». */
export function numero(n: number): string {
  return String(n).padStart(2, '0');
}
