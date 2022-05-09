/** @jsx jsx */
import { jsx, Text, Box, Grid, Heading, Link } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'

type DevProjectProps = {
  title: string
  description: string
  visitHref: string
  githubHref: string
}

const DevProject = ({
  title,
  description,
  visitHref,
  githubHref,
}: DevProjectProps) => {
  return (
    <Grid
      gap={[4]}
      columns={[1, 1, 2]}
      sx={{ pb: 6, px: 4, alignItems: 'start' }}
    >
      <StaticImage
        src="../images/iconiclinx-website-snapshot.png"
        alt="iconiclinx"
      />
      <Box sx={{ pt: 2 }}>
        <Heading>{title}</Heading>
        <br />
        <Text sx={{}}>{description}</Text>
        <Box sx={{ pt: 3 }}>
          <Link href={visitHref}>Visit Site</Link>
          <br />
          <Link href={githubHref}>Github</Link>
        </Box>
      </Box>
    </Grid>
  )
}

export default DevProject
