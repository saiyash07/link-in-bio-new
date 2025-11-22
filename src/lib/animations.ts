// Framer Motion animation variants for premium interactions

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1
  }
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02
  },
  tap: { scale: 0.98 }
};

export const cardHover = {
  rest: { 
    y: 0
  },
  hover: { 
    y: -6
  }
};

export const glowEffect = {
  animate: {
    boxShadow: [
      "0 0 20px hsla(42, 88%, 65%, 0.3)",
      "0 0 40px hsla(42, 88%, 65%, 0.6)",
      "0 0 20px hsla(42, 88%, 65%, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
