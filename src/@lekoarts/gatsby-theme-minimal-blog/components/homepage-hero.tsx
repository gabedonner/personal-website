/** @jsx jsx */
import React from 'react'
import { jsx, Box, Link, Flex } from 'theme-ui'
import HeroText from './hero-text'
// @ts-ignore
import HeroSVG from '../svg/dot-graph.inline.svg'
// @ts-ignore
import LinkedInIcon from '../svg/linkedin-icon.inline.svg'
// @ts-ignore
import GithubIcon from '../svg/github-icon.inline.svg'

const SocialIcons = () => {
  return (
    <Flex
      sx={{
        position: 'absolute',
        flexDirection: 'row',
        right: 15,
        bottom: [38, 38],
        gap: 2,
        opacity: 0.5,
      }}
    >
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/gabedonner/"
        sx={{
          color: 'dots',
          mr: 2,
          ':hover': {
            // color: `primary`,
            color: 'primary',
          },
        }}
      >
        <LinkedInIcon />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.github.com/gabedonner"
        sx={{
          color: 'dots',
          ':hover': {
            // color: `primary`,
            color: 'primary',
          },
        }}
      >
        <GithubIcon />
      </Link>
    </Flex>
  )
}

const HomepageHero = () => {
  return (
    <section>
      <Box
        sx={{
          mt: '-1.7em',
          position: 'static',
          overflow: 'hidden',
          height: '21.8em',
          color: 'dots',
        }}
      >
        {/* <HeroSVG /> */}
      </Box>
      <Box
        sx={{
          position: 'relative',
          height: '25em',
          pl: '3.33vw',
          pb: ['4em', '6em'],
          pt: [0],
          mt: '-18.65em',
          mb: 0,
          variant: `section_hero`,
          overflow: 'hidden',
          //boxShadow: 'rgb(0 0 0 / 4%) 0px 32px 32px 0px, rgb(0 0 0 / 4%) 0px 16px 16px 0px, rgb(0 0 0 / 4%) 0px 8px 8px 0px, rgb(0 0 0 / 4%) 0px 4px 4px 0px',
        }}
      >
        <HeroText />
        {/* <SocialIcons /> */}
      </Box>
    </section>
  )
}

export default HomepageHero
