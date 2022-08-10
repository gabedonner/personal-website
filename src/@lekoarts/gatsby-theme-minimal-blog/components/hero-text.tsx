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

const RotateReveal = ({ children }: any) => {
  const sectionRevealRotateAnimations = {
    hidden: { opacity: 1, height: '100%' },
    visible: {
      opacity: 1,
      transform: 'rotate(-1.2deg)',
      letterSpacing: '.03rem',
    },
  }

  const transition = {
    duration: 1,
    ease: [0.6, 0.01, -0.05, 0.9],
    delay: 0.33,
  }

  return (
    <motion.div
      variants={sectionRevealRotateAnimations}
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
        <Box
          sx={{
            mb: 2,
            pb: '3px',
            mt: ['0px'],
            //transform: 'rotate(-.8deg)',
            // ':hover': {
            //   transform: 'rotate(-1deg)',
            // },
          }}
        >
          <RotateReveal>
            <Text
              sx={{
                ml: [0, '.6em'],
                // pl: [0],
                fontSize: ['2rem'],
                fontWeight: `semibold`,
                //color: `primary`,
                color: 'primary',
              }}
            >
              Gabe Donner
            </Text>
          </RotateReveal>
        </Box>

        <Box
          sx={{
            bg: 'none',
            //height: ['6em'],
            pt: 1,
            pl: ['3px', '1.7em', '5em'],
            pr: '12vw',
            mt: [1, 1, 1],
            mr: [0],
            //borderLeft: '1px solid black',
          }}
        >
          <Text
            sx={{
              // ml: [0, '-.6em'],
              pl: [],
              fontSize: [5, 6, 6],
              fontWeight: `500`,
              color: `text`,
              fontFamily: `Cormorant Garamond`,
              fontStyle: 'italic',
              lineHeight: '62px',
              verticalAlign: '8px',
              ml: '-1.25em',
            }}
          >
            ⤷&nbsp;&nbsp;
          </Text>
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
            pl: ['3px', '1.7em', '5.2em'],
            a: {
              fontWeight: 'regular',
              fontSize: [2, 3, 3],
              color: 'secondary',
              textDecoration: 'none',
              pr: 1,
              ':hover': {
                color: `primary`,
                textDecoration: 'none',
                pr: '1rem',
              },
            },
          }}
        >
          <Link href="/about">Who??</Link>
          <Text
            sx={{
              fontWeight: 'medium',
              fontSize: [2, 3, 3],
              color: 'secondary',
              verticalAlign: '2px',
              ml: '.5em',
            }}
          >
            →
          </Text>
          <Link sx={{ ml: '1em' }} href="/about">
            See the code
          </Link>
          <Text
            sx={{
              fontWeight: 'medium',
              fontSize: [2, 3, 3],
              color: 'secondary',
              verticalAlign: '2px',
              ml: '.5em',
            }}
          >
            →
          </Text>
          <Link sx={{ ml: '1em' }} href="/about">
            Contact
          </Link>
          <Text
            sx={{
              fontWeight: 'medium',
              fontSize: [2, 3, 3],
              color: 'secondary',
              verticalAlign: '2px',
              ml: '.5em',
            }}
          >
            →
          </Text>
        </Box>
      </Box>
    </SectionReveal>
  )
}

export default Hero
