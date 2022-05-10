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
      gap={[5]}
      columns={[1, 1, 2]}
      sx={{ pb: 6, px: [0, 0, 4], alignItems: 'center' }}
    >
      <Link
        sx={{
          width: ['450px', '450px', 'auto'],
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;',
          '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 25px 50px -12px;',
          },
        }}
        href={visitHref}
      >
        <StaticImage
          src="../images/nyt-critics-picks-screenshot.png"
          alt={title}
        />
      </Link>
      <Box sx={{ pr: 4, pt: 1, width: ['450px', '450px', 'auto'] }}>
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
