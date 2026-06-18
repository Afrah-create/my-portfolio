export const fadeUp = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: "easeOut" as const },
  },
});

export const staggerContainer = (stagger = 0.1) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export const springTransition = {
  type: "spring" as const,
  stiffness: 380,
  damping: 30,
};
