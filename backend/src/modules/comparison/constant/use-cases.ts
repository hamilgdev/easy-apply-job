import { PromptObject } from '@/src/modules/comparison/types';

export const USE_CASES: PromptObject = {
  comparisonJob: {
    prompt: (jobOffer: {
      title: string;
      summary: string;
      description: string;
    }) => `
      Compara la siguiente oferta de trabajo con el perfil del usuario y genera un informe,

      Tu tarea es dar respuesta a la siguiente pregunta:
      - ¿La oferta de trabajo es adecuada para el usuario?
      - ¿Como puede el usuario mejorar su perfil para ser más atractivo para la oferta de trabajo?
        - Tips para mejorar el perfil del usuario.
        - Tips para mejorar la descripción del perfil del usuario.
        - Tips para mejorar las habilidades del usuario.
        - Tips para mejorar la experiencia del usuario.
        - Tips para mejorar la educación del usuario.
      - Siempre responde en español.
      - Siempre responde en formato JSON.
      - No debes dar recomendaciones genéricas, debes de analizar la oferta de trabajo y el perfil del usuario para dar recomendaciones personalizadas.

      Ejemplo de respuesta:
      {
        "is_job_offer_adequate": true o false, de acuerdo a si la oferta de trabajo es adecuada segun el perfil del usuario,
        "user_profile": {
          "username": "Nombre del usuario",
          "role": "Rol del usuario. Segun como lo especifique en su perfil",
          "description": 'Resumen de mi perfil profesional. Alemnos unos 250 caracteres',
          "skills": "Una lista de habilidades del usuario en un array []. Ejemplo: ['JavaScript', 'React', 'Node.js']"
        },
        "job_offer": {
          "title": "El título del puesto de la oferta de trabajo que se está comparando. Si no hay título devolver vacío ''",
          "summary": "Resumen de la oferta de trabajo",
          "description": "Descripción de la oferta de trabajo"
          "key_responsibilities": "Devuelve en una lista las responsabilidades que se mencionan en la oferta agrupadas en un array ['responsabilidad 1', 'responsabilidad 2']. Sino hay responsabilidades devolver vacío []", 
          "company_name": "Devuelve el nombre de la empresa que postulo la oferta laboral sino hay nombre devolver vacío ''",
          "job_type": "Tipo de trabajo que se ofrece. Devolver vacío '' si no se especifica",
          "salary": "Incluir salario que se mendiona en la oferta si es posible sino dejar vacío ''"
        },
        "recommendations": Una lista de recomendaciones para mejorar el perfil del usuario. Debe de devolver un array [] con objetos { title, description } sino hay recomendaciones devolver vacío [],
        "improvements": "Una lista de mejoras sobre lo que falta en el perfil del usuario para aplicar a la oferta. Debe devolver un array [] con objetos { title, description } sino hay recomendaciones devolver vacío []",
        "tips": {
          "profile": "Una lista de recomendaciones para mejorar el perfil del usuario. Debe devolver un array [] con objetos { title, description } sino hay recomendaciones devolver vacío []",
          "description": "Una lista de recomendaciones para mejorar la descripción del perfil del usuario. Debe devolver un array [] con objetos { title, description } sino hay recomendaciones devolver vacío []",
          "skills": "Una lista de recomendaciones para mejorar las habilidades del usuario. Debe devolver un array [] con objetos { title, description } sino hay recomendaciones devolver vacío []",
          "experience": "Una lista de recomendaciones para mejorar la experiencia del usuario. Debe devolver un array [] con objetos { title, description } sino hay recomendaciones devolver vacío []",
          "education": "Una lista de recomendaciones para mejorar la educación del usuario. Debe devolver un array [] con objetos { title, description } sino hay recomendaciones devolver vacío []"
        }
      }
      
      Considerando que el usuario ha proporcionado la siguiente información:
      Oferta de Trabajo:
      ${JSON.stringify(jobOffer)}
    `,
    settings: {
      maxTokens: 2048,
      temperature: 0.7,
      maxRetries: 2,
    },
  },
};
