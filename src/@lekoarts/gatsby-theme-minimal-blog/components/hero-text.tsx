import React from 'react'
import { jsx, Box, Text, Grid, Card, Link, Flex, AspectImage } from 'theme-ui'
import { graphql } from 'gatsby'
import Typewriter from 'typewriter-effect'
import { motion, AnimatePresence } from 'framer-motion'
import backgroundImageHero from '../images/grid-pattern.png'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <Box>
      <Box sx={{ mb: 2, mt: ['-4px'] }}>
        <Text
          sx={{
            ml: [0, '.7em'],
            pl: [0],
            fontSize: [4, 5, 5],
            fontWeight: `semibold`,
            //color: `primary`,
            color: 'primary',
          }}
        >
          Gabe Donner&nbsp;
        </Text>
      </Box>

      {/* <Box
        sx={{
          bg: 'none',
          height: ['6em'],
          pt: 1,
          pl: ['3px', '1.7em', '1.7em'],
          pr: '12vw',
          mt: [1, 1, 1],
          mr: [0],
        }}
      >
        <TypewriterComponent />
      </Box> */}
      <Box
        sx={{
          bg: 'none',
          height: ['6em'],
          pt: 1,
          pl: ['3px', '1.7em', '1.7em'],
          pr: '12vw',
          mt: [1, 1, 1],
          mr: [0],
        }}
      >
        <Text
          sx={{
            //ml: [0, '.5em'],
            pl: [0],
            fontSize: [5, 6, 6],
            //fontWeight: `500`,
            color: `text`,
            fontFamily: `Cardo`,
            fontStyle: 'italic',
          }}
        >
          A front-end developer with an eye for design and a mind for strategy
        </Text>
      </Box>
    </Box>
  )
}

export default Hero
