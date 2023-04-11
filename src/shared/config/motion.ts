

// fade up spring
export const fadeUpSpring = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 60,
    },
  },

  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 60,
    },
  },
};

// fade left
export const fadeLeft = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    x: -200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


// fade bottom
export const fadeBottom = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: -200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


// fade right
export const fadeRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    x: 200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


// fade top
export const fadeTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


// worked li
export const worked_1 = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


export const worked_2 = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


export const worked_3 = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },

  hidden: {
    opacity: 0,
    y: 150,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};


// initial step
export const motionStep = {
  initial : "hidden",
  whileInView : "visible",
  viewport : { once: true }
}