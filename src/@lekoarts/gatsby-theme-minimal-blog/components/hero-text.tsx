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
          height: ['6em'],
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
          mt: '76px',
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
              pr: '.7rem',
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
            verticalAlign: '3px',
          }}
        >
          &nbsp;→
        </Text>
      </Box>
    </Box>
  )
}

export default Hero
