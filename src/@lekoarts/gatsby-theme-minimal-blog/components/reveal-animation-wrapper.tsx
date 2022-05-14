import React from 'react'
import { motion } from 'framer-motion'

const RevealAnimationWrapper = ({ children }: any) => {
  const sectionRevealAnimations = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  }

  const transition = {
    duration: 1,
    ease: [0.6, 0.01, -0.05, 0.9],
  }

  return (
    <motion.div
      variants={sectionRevealAnimations}
      // ref={ref}
      initial="hidden"
      //animate={controls}
      transition={transition}
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}

export default RevealAnimationWrapper
