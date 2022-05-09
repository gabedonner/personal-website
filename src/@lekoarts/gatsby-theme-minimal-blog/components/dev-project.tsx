/** @jsx jsx */
import { jsx, Text, Box, Grid, Heading, Link } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'

const DevProject = () => {
  return (
    <Grid
      gap={[4]}
      columns={[1, 1, 2]}
      sx={{ pb: 6, px: 4, alignItems: 'start' }}
    >
      <StaticImage
        sx={{}}
        src="../images/iconiclinx-website-snapshot.png"
        alt="iconiclinx"
      />
      <Box sx={{ pt: 2 }}>
        <Heading>NYT Critic's Picks</Heading>
        <br />
        <Text sx={{}}>
          A searchable collection of all the movies picked by New York Times
          critics. Built with Next.js, the NYT REST API, MUI, and Framer Motion.
        </Text>
        <Box sx={{ pt: 3 }}>
          <Link>Visit Site</Link>
          <br />
          <Link>Github</Link>
        </Box>
      </Box>
    </Grid>
  )
}

export default DevProject
