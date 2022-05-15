import React from 'react'
import { jsx, Box, Text, Grid, Card, Link, Flex, AspectImage } from 'theme-ui'
import { graphql } from 'gatsby'
import Typewriter from 'typewriter-effect'
import { motion, AnimatePresence } from 'framer-motion'
import backgroundImageHero from '../images/grid-pattern.png'
import { StaticImage } from 'gatsby-plugin-image'
//import TypeIt from "typeit-react";
//import HeroTyper from "../components/hero-typer.tsx";

const TypewriterComponent = () => {
  return (
    <Text
      sx={{
        bg: 'background',
        fontSize: [2, 3],
        color: `text`,
        a: { color: 'primary', textDecoration: 'underline' },
      }}
    >
      <Typewriter
        options={{
          autoStart: true,
          pauseFor: 1000,
          cursor: '|',
          delay: 30,
          loop: true,
          deleteSpeed: 5,
        }}
        onInit={(typewriter) => {
          typewriter.typeString('Hi! ').pauseFor(1000).start()
          typewriter
            .typeString(
              "I'm a developer and designer based out of New York City."
            )
            .pauseFor(2500)
            .start()
            .pauseFor(800)
            .deleteAll(5)
            .pauseFor(800)
          typewriter
            .typeString('I like visual art, philosophy, and ')
            .start()
            .pauseFor(800)
            .changeDelay(100)
          typewriter
            .typeString('um')
            .start()
            .pauseFor(800)
            .deleteChars(2)
            .changeDelay(25)
          typewriter
            .typeString(' ice cream.')
            .pauseFor(1500)
            .start()
            .pauseFor(2500)
            .deleteAll(5)
            .pauseFor(800)
          typewriter
            .typeString('Reloading Gabe_Bot')
            .pauseFor(1500)
            .start()
            .pauseFor(1500)
            .changeDelay(1500)
          typewriter.typeString(' . . .').pauseFor(1500).start().pauseFor(100)
        }}
      />
    </Text>
  )
}

const Hero = () => {
  return (
    <Box>
      <Box sx={{ mb: 2, mt: ['.85em'] }}>
        <Text
          sx={{
            ml: [0, '.5em'],
            pl: [0],
            fontSize: [5, 6, 6],
            fontWeight: `bold`,
            color: `text`,
          }}
        >
          Gabe Donner&nbsp;
        </Text>
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
        }}
      >
        <TypewriterComponent />
      </Box>
    </Box>
  )
}

export default Hero
