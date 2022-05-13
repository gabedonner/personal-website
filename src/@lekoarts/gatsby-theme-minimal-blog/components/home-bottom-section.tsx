/** @jsx jsx */
import { jsx, Box, Grid, Link, Flex, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import DivideTitle from './title-divide'
import { Link as TLink } from 'gatsby'
//https://blog.maximeheckel.com/posts/advanced-animation-patterns-with-framer-motion/
//how to animate children on hover

interface MiniDivideTitleProps {
  title: string
}

const MiniDivideTitle = ({ title }: MiniDivideTitleProps) => {
  return (
    <Box
      sx={{
        pb: 15,
        mb: 2,
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
          mb: 4,
          pr: 3,
          // mx: 'auto',
          //border: '1px solid black',
        }}
      >
        <MiniDivideTitle title="This Website" />
        <Box sx={{ mt: 40 }}>
          <Text>
            This website was built using React, Gatsby, Theme UI, and Framer
            Motion.
          </Text>
          <br />
          <Box sx={{ pt: 30, fontSize: 18 }}>
            <Link
              href="https://github.com/gabedonner/nyt-critics-picks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github →
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mb: 4,
          // mx: 'auto',
          //border: '1px solid black',
        }}
      >
        <MiniDivideTitle title="See Also" />
        {/* <Link href="/">
          <Box
            sx={{
              p: [90, 25, 90, 25],
              borderRight: '1px solid',
              borderBottom: '1px solid',
              borderLeft: '1px solid',
              borderColor: 'divide',
              textAlign: 'center',
              transition: 'all .5s ease',
              '&:hover': {
                bg: 'divide',
              },
            }}
          >
            <Text sx={{}}>Arrow</Text>
          </Box>
        </Link> */}
        <Box sx={{ pt: 30, fontSize: 18 }}>
          <Link href="/about">About Page →</Link>
        </Box>
        <Box sx={{ pt: 20, fontSize: 18 }}>
          <Link href="/design">Design Portfolio →</Link>
        </Box>
      </Box>
    </Grid>
  )
}

export default HomeBottomSection
