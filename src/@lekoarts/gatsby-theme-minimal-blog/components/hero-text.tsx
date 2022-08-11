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
      transform: 'rotate(-1.5deg)',
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
      <Box sx={{}}>
        <Box sx={{ ml: ['auto', 0, 0, '6vw'], mr: ['1em', '12vw'] }}>
          <Box
            sx={{
              pb: '5px',
              mt: ['0px'],
            }}
          >
            <RotateReveal>
              <Text
                sx={{
                  ml: [0, '.6em'],
                  // pl: [0],
                  fontSize: ['2.5rem'],
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
              pl: [0, '5em', '5em'],
              //pr: ['1em', '12vw'],
              // mt: [1, 1, 1],
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
                ml: [0, '-1.15em'],
              }}
            >
              ⤷ &nbsp;
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
                lineHeight: ['50px', '62px'],
              }}
            >
              A front-end developer with an eye for design and a mind for
              strategy
            </Text>
          </Box>

          <Box
            sx={{
              mb: 2,
              mt: '42px',
              //bg: 'white',
              //textAlign: 'center',
              pl: [0, '1.7em', '5.2em', '5.2em'],
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
                  pl: '.2rem',
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
                //verticalAlign: '2px',
                ml: '.5em',
                fontFamily: 'Cormorant Garamond',
                fontStyle: 'italic',
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
                //verticalAlign: '2px',
                ml: '.5em',
                fontFamily: `Cormorant Garamond`,
                fontStyle: 'italic',
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
                //verticalAlign: '2px',
                ml: '.5em',
                fontFamily: `Cormorant Garamond`,
                fontStyle: 'italic',
              }}
            >
              →
            </Text>
          </Box>
        </Box>
      </Box>
    </SectionReveal>
  )
}

export default Hero
