/** @jsx jsx */
import { jsx, Box, Grid, Link, Flex, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import DivideTitle from './title-divide'
//https://blog.maximeheckel.com/posts/advanced-animation-patterns-with-framer-motion/
//how to animate children on hover

const HomeBottomSection = () => {
  return (
    <Grid
      columns={[1, 1, 2, 2]}
      sx={{
        gap: ['4em'],
        // columnGap: ['5em'],
        // rowGap: ['3em', '5em'],
        mb: 6,
        ml: [0, 0, 0, 0],
        //px: ['0', '0', 0, '1.7em'],
        flexGrow: 99999,
        flexBasis: 300,
        minWidth: 300,
        //pl: '25%',
        pt: 25,
        a: {
          fontWeight: 'medium',
          fontSize: [2, 3, 3],
          color: 'text',
          textDecoration: 'none',
          pr: 1,
          ':hover': {
            // color: `primary`,
            textDecoration: 'underline',
            pr: '1rem',
          },
        },
      }}
    >
      <Box
        sx={{
          mb: 4,
          // mx: 'auto',
          //border: '1px solid black',
        }}
      >
        <DivideTitle title="This Website" />
        <Text>text here</Text>
      </Box>
      <Box
        sx={{
          mb: 4,
          // mx: 'auto',
          //border: '1px solid black',
        }}
      >
        <DivideTitle title="Design Portfolio" />

        <Text>text here</Text>
      </Box>
    </Grid>
  )
}

export default HomeBottomSection
