import React from 'react'
import { Box, Link, Text } from 'theme-ui'
import RevealAnimationWrapper from '../../../src/@lekoarts/gatsby-theme-minimal-blog/components/reveal-animation-wrapper'

const LongVersion = () => {
  return (
    <section>
      <RevealAnimationWrapper delayDuration={0}>
        <Box
          sx={{
            bg: 'none',
            //height: ['6em'],
            pt: 56,
            //pl: ['3px', '1.7em', '1.7em'],
            pr: ['6vw', '19vw'],
            pl: ['5vw', '10vw'],
            mt: [1, 1, 1],
            mr: [0],
          }}
        >
          <Text
            sx={{
              // ml: [0, '-.6em'],
              pl: [0],
              fontSize: ['2.5rem', 6, 6],
              fontWeight: `500`,
              color: `text`,
              fontFamily: `Cormorant Garamond`,
              fontStyle: 'italic',
              lineHeight: ['50px', '62px'],
            }}
          >
            Intensely curious;
            <br />
            Lover of art, ideas, and technology.
          </Text>
        </Box>
      </RevealAnimationWrapper>
      <RevealAnimationWrapper delayDuration={0.5}>
        <Box
          sx={{
            mr: ['3vw', '10vw', '20vw'],
            pl: ['13vw', '10vw'],
            mt: 5,
            mb: 40,
            fontSize: ['18px', '28px'],
            lineHeight: '1.625em',
            //letterSpacing: '-0.003em',
            fontFamily: `Cormorant Garamond`,
            //fontFamily: 'Inter',
            fontWeight: 'regular',
            color: 'text',
          }}
        >
          <Text sx={{ ml: ['-1.7rem', '-2.6rem'] }}>
            1. &nbsp;&nbsp;&nbsp;Since 2015, I’ve been a jack-of-all-trades
            freelancer helping clients add value to their organizations. When
            I'm not building websites, I'm assisting with product design,
            photography, presentations, pitch decks, and fundraising campaigns
            for organizations like{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://nfusemagnesium.com"
            >
              nfuse
            </Link>
            ,{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.maysles.org"
            >
              Maysles Documentary Center
            </Link>
            , and{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://accessprojectca.org"
            >
              The Access Project
            </Link>
            .
            {/* In early 2021, I started digging into all things
             front-end, learning as much as possible about making applications
            that are beautiful, functional, and engaging. */}
          </Text>
          <Box sx={{ mt: '60px' }}>
            <Text sx={{ ml: ['-1.7rem', '-2.6rem'] }}>
              2. &nbsp;&nbsp;&nbsp;In 2020, I graduated from{' '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://gallatin.nyu.edu"
              >
                NYU Gallatin
              </Link>{' '}
              with an individualized major that combined topics from Philosophy,
              Media Studies, and American Studies, and wrote a final project
              that investigated the philosophic history of image analysis.
              During the same period, I also earned a minor in Graphic Design
              from{' '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://steinhardt.nyu.edu/"
              >
                NYU Steinhardt
              </Link>{' '}
              and took classes in Computer Science, Web Development, and
              Interactive Narrative.
            </Text>
          </Box>
        </Box>

        <Box
          sx={{
            pb: '60px',
            mt: '42px',
            //bg: 'white',
            //textAlign: 'center',
            pl: ['13vw', '10vw'],
            a: {
              fontWeight: 'regular',
              fontSize: ['1rem', 2, 2],
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
          <Link href="mailto:contact@gabedonner.com">Email</Link>
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
            /
          </Text>
          <Link
            sx={{ ml: '1em' }}
            target="_blank"
            rel="noopener noreferrer"
            href={`/Resume-2022.pdf`}
          >
            Resume
          </Link>
          <Text
            sx={{
              fontWeight: 'medium',
              fontSize: [2, 2, 3],
              color: 'secondary',
              verticalAlign: '2px',
              ml: '.5em',
              fontFamily: `Cormorant Garamond`,
              fontStyle: 'italic',
            }}
          >
            /
          </Text>
          <Link
            sx={{ ml: '1em' }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/gabedonner/"
          >
            Github
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
            /
          </Text>
          <Link
            sx={{ ml: '1em' }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/gabedonner/"
          >
            LinkedIn
          </Link>
        </Box>
      </RevealAnimationWrapper>
    </section>
  )
}

export default LongVersion
