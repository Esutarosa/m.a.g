export const perspective = {
  initial: {
    opacity: 0,
    rotateX: 45,
    translateY: 70,
    translateX: -15,
  },

  enter: () => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5,
      ease: [.215, .61, .355, 1],
      opacity: {
        duration: 0.35
      }
    }
  }),

  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "linear",
      ease: [0.76, 0, 0.24, 1]
    }
  }
};

export const slideIn = {
  initial: {
    opacity: 0,
    y: 220,
  },

  enter: () => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.65,
      ease: [.215, .61, .355, 1]
    }
  }),

  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut"
    }
  }
};

export const variants = {
  open: {
    width: "75%",
    height: "480px",
    top: "2px",
    right: "2px",
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1]
    }
  },

  closed: {
    width: "96px",
    height: "48px",
    top: "8px",
    right: "8px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1]
    }
  }
};