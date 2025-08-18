import { stagger, Variants } from 'framer-motion';

export const listAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: stagger(0.06),
    },
  },
};

export const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};
