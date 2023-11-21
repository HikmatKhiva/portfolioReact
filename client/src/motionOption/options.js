// Sidebar Animations
export const sidebar = {
  open: {
    opacity:1,
    display: 'flex',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}
// Menu Nav Item Animation
export const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
}
export const social = {
  initial: {
    opacity: 0,
    y: 100,
  },
  finished: {
    opacity: 1,
    y: 0,
  },
}
export const fadeCard = (delay) => {
  return {
    start: {
      opacity: 0,
      scale: 0,
    },
    finished: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        delay,
      },
    },
  }
}