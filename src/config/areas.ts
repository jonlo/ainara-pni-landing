/** Solo añadir áreas y textos confirmados por Ainara. Hasta entonces no se publican rutas ni tarjetas. */
export interface ConsultationArea {
  slug: string;
  title: string;
  summary: string;
  situations: string[];
  approach: string;
  questions: { question: string; answer: string }[];
}
export const consultationAreas: ConsultationArea[] = [];
