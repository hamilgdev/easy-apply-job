import { BriefcaseIcon, UserScanIcon, SparklesIcon } from '@/components';

export const NAVIGATION_STEPS = [
  {
    title: 'Sube tu CV',
    description: 'Dejanos saber de tus habilidades y experiencias',
    icon: () => <UserScanIcon />,
  },
  {
    title: 'Encuentra tu oferta',
    description: 'Oferta a la que quieres aplicar',
    icon: () => <BriefcaseIcon />,
  },
  {
    title: 'Tips',
    description: 'Recibe tips para mejorar tu perfil y aplicar a la oferta',
    icon: () => <SparklesIcon />,
  },
];
