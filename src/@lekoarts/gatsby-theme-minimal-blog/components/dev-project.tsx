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
      sx={{ pb: 6, px: 3, alignItems: 'start' }}
    >
      <Link sx={{ width: ['450px', '450px', 'auto'] }} href={visitHref}>
        <StaticImage
          src="../images/nyt-critics-picks-screenshot.png"
          alt={title}
        />
      </Link>
      <Box sx={{ pr: 4, pt: 1 }}>
        <Link href={visitHref}>
          <Heading>{title}</Heading>
        </Link>
        <Box sx={{ pt: 3 }}>
          <Text sx={{ pt: 4 }}>{description}</Text>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Link sx={{ pr: 3 }} href={visitHref}>
            Visit Site →
          </Link>
          <Link sx={{}} href={githubHref}>
            Github →
          </Link>
        </Box>
      </Box>
    </Grid>
  )
}

export default DevProject
