
export function slideInFromLeft(delay: number) {
    return {
      hidden: { x: -100, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
}
  
export function slideInFromRight(delay: number) {
    return {
      hidden: { x: 80, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
}
  
export const slideInFromSide = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.01,
        duration: 1,
      },
    },
};
export const slideInFromSide2 = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 1,
      },
    },
};

export const iconVariants = (duration : number) => ({ 
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
        duration: duration,
        ease: "linear",
        repeat: "Infinity",
        repeatType: "reverse",
        }
    },
})