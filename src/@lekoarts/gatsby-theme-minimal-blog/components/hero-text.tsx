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
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transform: 'rotate(-1.5deg)',
      letterSpacing: '.03rem',
    },
  }

  const transition = {
    duration: 1,
    ease: [0.6, 0.01, -0.05, 0.9],
    delay: 0.366,
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
        <Box sx={{ ml: ['auto', 0, '3vw', '6vw'], mr: ['1em', '12vw'] }}>
          <Box
            sx={{
              pb: '5px',
              mt: [0, 0, '15px'],
            }}
          >
            <RotateReveal>
              <Text
                sx={{
                  //ml: [0, '.6em'],
                  pl: ['3vw', '.6em'],
                  // pl: [0],
                  fontSize: ['2.5rem'],
                  fontWeight: `semibold`,
                  //color: `primary`,
                  color: 'primary',
                  //transform: ['rotate(-10deg)', 'rotate(0deg)'],
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
              //pl: [0, '5em', '5em'],
              pl: ['3vw', '10vw'],
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
                fontSize: [0, 6, 6],
                fontWeight: `500`,
                color: `text`,
                fontFamily: `Cormorant Garamond`,
                fontStyle: 'italic',
                lineHeight: '62px',
                verticalAlign: '8px',
                ml: ['-1.15em'],
                visibility: ['hidden', 'visible'],
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
              mt: ['30px', '42px'],
              //bg: 'white',
              //textAlign: 'center',
              pl: ['3vw', '4.2em', '5.6em', '6.9em'],
              a: {
                fontWeight: 'regular',
                fontSize: ['1rem', 3, 3],
                color: 'secondary',
                textDecoration: 'none',
                pr: 1,
                ':hover': {
                  color: `primary`,
                  textDecoration: 'none',
                  pr: [1, '1rem'],
                  pl: [0, '.2rem'],
                },
              },
            }}
          >
            <Link href="/about">Who?</Link>
            <Text
              sx={{
                fontWeight: 'medium',
                fontSize: [2, 3, 3],
                color: 'secondary',
                verticalAlign: '2px',
                ml: '.5em',
                fontFamily: 'Cormorant Garamond',
                fontStyle: 'italic',
              }}
            >
              —
            </Text>
            <Link
              sx={{ ml: '1em' }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gabedonner/"
            >
              See the code
            </Link>
            <Text
              sx={{
                fontWeight: 'medium',
                fontSize: [2, 3, 3],
                color: 'secondary',
                verticalAlign: '2px',
                ml: '.5em',
                fontFamily: `Cormorant Garamond`,
                fontStyle: 'italic',
              }}
            >
              —
            </Text>
            <Link sx={{ ml: '1em' }} href="mailto:contact@gabedonner.com">
              Contact
            </Link>
            {/* <Text
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
            </Text> */}
          </Box>
        </Box>
      </Box>

      {/* <Box
        sx={{
          bg: 'divide',
          height: '50px',
          width: '50px',
          position: 'relative',
          bottom: 100,
          right: 0,
          textAlign: 'center',
          mt: '160px',
          ml: '60px',
          mr: 'auto',
        }}
      >
        <motion.div
          transition={{
            //ease: [0.6, 0.01, -0.05, 0.9],
            mass: 30,
            damping: 100,
            repeat: Infinity,
            duration: 1.5,
            //delay: 0.5,
          }}
          animate={{
            //scale: [1, 1.5, 1.5, 1, 1],
            //y: [1, 10, 10, 1, 1],
            y: [0, 0, 10, 10, 0],
            //rotate: [0, 0, 270, 270, 0],
            //borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          }}
        >
          <Text
            sx={{
              fontFamily: 'Cormorant Garamond',
              fontStyle: 'italic',
              fontSize: '72px',
              color: 'secondary',
              position: 'relative',
              top: '-15px',
            }}
          >
            ↓
          </Text>
        </motion.div>
      </Box> */}
    </SectionReveal>
  )
}

export default Hero
