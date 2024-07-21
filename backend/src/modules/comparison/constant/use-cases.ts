import { PromptObject } from '@/src/modules/comparison/types';

export const USE_CASES: PromptObject = {
  comparisonJob: {
    prompt: (jobOffer: {
      title: string;
      summary: string;
      description: string;
    }) => `
      Compara la siguiente oferta de trabajo con el perfil del usuario y genera un informe,
      Debes de responder en formato JSON.

      Tu tarea es dar respuesta a la siguiente pregunta:
      - ¿La oferta de trabajo es adecuada para el usuario?
      - ¿Como puede el usuario mejorar su perfil para ser más atractivo para la oferta de trabajo?
        - Tips para mejorar el perfil del usuario.
        - Tips para mejorar la descripción del perfil del usuario.
        - Tips para mejorar las habilidades del usuario.
        - Tips para mejorar la experiencia del usuario.
        - Tips para mejorar la educación del usuario.

      Ejemplo de respuesta:
      {
        "is_job_offer_adequate": true,
        "tips": {
          "profile": "Debes de mejorar tu perfil profesional",
          "description": "Debes de mejorar la descripción de tu perfil",
          "skills": "Debes de mejorar tus habilidades",
          "experience": "Debes de mejorar tu experiencia",
          "education": "Debes de mejorar tu educación"
        }
      }
      
      Considerando que el usuario ha proporcionado la siguiente información:
      Oferta de Trabajo:
      ${JSON.stringify(jobOffer)}
    `,
    settings: {
      maxTokens: 500,
      temperature: 0.5,
      maxRetries: 1,
    },
  },
};
