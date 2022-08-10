import React from 'react'
import { Box, Link, Text } from 'theme-ui'

const LongVersion = () => {
  return (
    <section>
      <Box
        sx={{
          bg: 'none',
          //height: ['6em'],
          pt: 1,
          //pl: ['3px', '1.7em', '1.7em'],
          pr: '12vw',
          mt: [1, 1, 1],
          mr: [0],
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
          Combining the code, design, and language to make projects that hum
        </Text>
      </Box>
      <Box
        sx={{
          mr: [0, 3],
          mt: 5,
          mb: 40,
          fontSize: ['24px'],
          lineHeight: '1.625em',
          letterSpacing: '-0.003em',
          //fontFamily: `Cormorant Garamond`,
          //fontWeight: '500',
          color: 'text',
        }}
      >
        <p>Hi, I'm Gabe. Thanks for stopping by.</p>
        <p>
          Since 2015, I’ve been making websites and filling numerous development
          and design-related roles as a freelancer. In early 2021, I started
          digging into all things front-end, learning as much as possible about
          making applications that are beautiful, functional, and engaging.
        </p>

        <p>
          In 2020, I graduated from{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://gallatin.nyu.edu"
          >
            NYU Gallatin
          </Link>{' '}
          with an individualized major that combined topics from Philosophy,
          Media Studies, and American Studies — in other words, I learned to
          write thoughtfully, think across disciplines, and ask good questions.
          During the same period, I also earned a minor in Graphic Design from{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://steinhardt.nyu.edu/"
          >
            NYU Steinhardt
          </Link>{' '}
          and took classes in Computer Science, Web Development, and Interactive
          Narrative.
        </p>
        <p>
          Ultimately, the most rewarding part of my work has been solving
          problems for clients and materializing their vision. I’ve had the
          opportunity to work for many wonderful small businesses and
          non-profits across the United States, including{' '}
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
          </Link>{' '}
          and{' '}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://accessprojectca.org"
          >
            The Access Project
          </Link>
          {'. '}
        </p>

        {/* <p>Thanks for stopping by, and feel free to reach out!</p> */}
      </Box>
    </section>
  )
}

export default LongVersion
