/** @jsx jsx */
import { jsx, Box, Grid, Link, Flex, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import DivideTitle from './title-divide'
import { Link as TLink } from 'gatsby'
//https://blog.maximeheckel.com/posts/advanced-animation-patterns-with-framer-motion/
//how to animate children on hover
import RevealAnimationWrapper from './reveal-animation-wrapper'

interface MiniDivideTitleProps {
  title: string
}

const MiniDivideTitle = ({ title }: MiniDivideTitleProps) => {
  return (
    <RevealAnimationWrapper>
      <Box
        sx={{
          mb: 60,
          //flexGrow: 1,
          // flexBasis: [256, 190, 256, 256],
          //flexBasis: ['27.5%'],
        }}
      >
        <Text
          sx={{
            fontSize: [1, 2, 2],
            color: 'secondary',
            bg: 'background',
            pr: 4,
          }}
        >
          {title}
        </Text>
        <Box sx={{ mr: 0, height: '1px', bg: 'divide', mt: '-.9em' }}></Box>
      </Box>
    </RevealAnimationWrapper>
  )
}

const HomeBottomSection = () => {
  return (
    <Grid
      columns={[1, 1, 2, 2]}
      sx={{
        gap: ['4em'],
        // columnGap: ['5em'],
        // rowGap: ['3em', '5em'],
        // mb: 6,
        ml: [0, 0, 0, 0],
        //px: ['0', '0', 0, '1.7em'],
        flexGrow: 99999,
        flexBasis: 300,
        minWidth: 300,
        //pl: '25%',
        pt: 25,
      }}
    >
      <Box
        sx={{
          mb: [3, 4],
          pr: 3,
          // mx: 'auto',
          //border: '1px solid black',
        }}
      >
        <MiniDivideTitle title="This Website" />
        <RevealAnimationWrapper>
          <Box sx={{}}>
            <Text>
              This website was built using React, Gatsby, Typescript, Theme UI,
              and Framer Motion.
            </Text>
            <br />
            <Box sx={{ pt: 30, fontSize: 18 }}>
              <Link
                href="https://github.com/gabedonner/personal-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the code →
              </Link>
            </Box>
          </Box>
        </RevealAnimationWrapper>
      </Box>
      <Box
        sx={
          {
            // mx: 'auto',
            //border: '1px solid black',
          }
        }
      >
        <MiniDivideTitle title="See Also" />
        <RevealAnimationWrapper>
          <Box sx={{ fontSize: 18 }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={`/Resume-2022.pdf`}
            >
              Resume →
            </Link>
          </Box>
          <Box sx={{ pt: 20, fontSize: 18 }}>
            <Link href="/about">About Page →</Link>
          </Box>
          <Box sx={{ pt: 20, fontSize: 18 }}>
            <Link href="/design">Design Portfolio →</Link>
          </Box>
        </RevealAnimationWrapper>
      </Box>
    </Grid>
  )
}

export default HomeBottomSection
