/** @jsx jsx */
import React from 'react'
import { jsx, Box } from 'theme-ui'
import HeroText from './hero-text'
// @ts-ignore
import HeroSVG from '../svg/dot-graph.inline.svg'
// @ts-ignore
import LinkedInIcon from '../svg/linkedin-icon.inline.svg'

const SocialIcons = () => {
  return (
    <Box sx={{ position: 'absolute', right: 0, bottom: 0 }}>
      <LinkedInIcon />
    </Box>
  )
}

const HomepageHero = () => {
  return (
    <section>
      <Box
        sx={{
          mt: '-1.1em',
          position: 'static',
          overflow: 'hidden',
          height: '21.8em',
          color: 'dots',
        }}
      >
        <HeroSVG />
      </Box>
      <Box
        sx={{
          position: 'relative',
          height: '20em',
          pb: ['4em', '6em'],
          pt: [0],
          mt: '-17.65em',
          mb: 0,
          p: { fontSize: [2, 3, 3], mt: 3 },
          variant: `section_hero`,
          overflow: 'hidden',
          //boxShadow: 'rgb(0 0 0 / 4%) 0px 32px 32px 0px, rgb(0 0 0 / 4%) 0px 16px 16px 0px, rgb(0 0 0 / 4%) 0px 8px 8px 0px, rgb(0 0 0 / 4%) 0px 4px 4px 0px',
        }}
      >
        <HeroText />
        <SocialIcons />
      </Box>
    </section>
  )
}

export default HomepageHero
