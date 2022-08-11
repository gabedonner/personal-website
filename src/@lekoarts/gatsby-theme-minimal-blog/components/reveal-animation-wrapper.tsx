import React from 'react'
import { motion } from 'framer-motion'

type EnterAnimationWrapperProps = {
  children: any
  delayDuration: number
}

const EnterAnimationWrapper = ({
  children,
  delayDuration,
}: EnterAnimationWrapperProps) => {
  const sectionRevealAnimations = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  }

  const transition = {
    duration: 1,
    ease: [0.6, 0.01, -0.05, 0.9],
    delay: delayDuration,
  }

  return (
    <motion.div
      variants={sectionRevealAnimations}
      // ref={ref}
      initial="hidden"
      //animate={controls}
      transition={transition}
      whileInView="visible"
      viewport={{ once: true, margin: '-90px' }}
    >
      {children}
    </motion.div>
  )
}

export default EnterAnimationWrapper
