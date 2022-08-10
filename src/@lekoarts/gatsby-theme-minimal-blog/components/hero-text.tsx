import React from 'react'
import { jsx, Box, Text, Grid, Card, Link, Flex, AspectImage } from 'theme-ui'
import { graphql } from 'gatsby'
import Typewriter from 'typewriter-effect'
import { motion, AnimatePresence } from 'framer-motion'
import backgroundImageHero from '../images/grid-pattern.png'
import { StaticImage } from 'gatsby-plugin-image'

const SectionReveal = ({ children }: any) => {
  const sectionRevealAnimations = {
    hidden: { opacity: 0, y: 15, height: '100%' },
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
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

const Hero = () => {
  return (
    <SectionReveal>
      <Box>
        <Box sx={{ mb: 2, mt: ['0px'] }}>
          <Text
            sx={{
              ml: [0, '1em'],
              // pl: [0],
              fontSize: [3, 4, 4],
              fontWeight: `semibold`,
              //color: `primary`,
              color: 'primary',
            }}
          >
            Gabe Donner
          </Text>
          {/* <Text
          sx={{
            ml: [0, '.25em'],
            // pl: [0],
            fontSize: [3, 4, 4],
            fontWeight: `light`,
            //color: `primary`,
            color: 'primary',
          }}
        >
          *
        </Text> */}
        </Box>

        <Box
          sx={{
            bg: 'none',
            //height: ['6em'],
            pt: 1,
            pl: ['3px', '1.7em', '1.7em'],
            pr: '12vw',
            mt: [1, 1, 1],
            mr: [0],
            //borderLeft: '1px solid black',
          }}
        >
          <Text
            sx={{
              // ml: [0, '-.6em'],
              pl: [0],
              fontSize: [5, 6, 6],
              fontWeight: `500`,
              color: `text`,
              fontFamily: `Cormorant Garamond`,
              fontStyle: 'italic',
              lineHeight: '62px',
            }}
          >
            A front-end developer with an eye for design and a mind for strategy
          </Text>
        </Box>

        <Box
          sx={{
            mb: 2,
            mt: '42px',
            pl: ['3px', '1.7em', '1.7em'],
            a: {
              fontWeight: 'regular',
              fontSize: [2, 3, 3],
              color: 'secondary',
              textDecoration: 'none',
              pr: 1,
              ':hover': {
                // color: `primary`,
                textDecoration: 'none',
                pr: '1rem',
              },
            },
          }}
        >
          <Link href="/about">More about me</Link>
          <Text
            sx={{
              fontWeight: 'medium',
              fontSize: [2, 3, 3],
              color: 'secondary',
              verticalAlign: '2px',
            }}
          >
            &nbsp;→
          </Text>
        </Box>
      </Box>
    </SectionReveal>
  )
}

export default Hero
