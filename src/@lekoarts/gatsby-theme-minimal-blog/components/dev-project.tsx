/** @jsx jsx */
import { jsx, Text, Box, Grid, Heading, Link, Container } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'

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
    <Container>
      <Grid
        gap={[5]}
        columns={[1, 1, 2]}
        sx={{
          pb: 6,
          px: [0, 0, 0],
          alignItems: 'center',
        }}
      >
        <motion.div
          // whileHover={{
          //   //scale: 1.03,
          //   y: -10,
          //   //x: 5,
          //   opacity: 0.9,
          //   //webkitFilter: `blur(4px)`,
          //   //filter: `blur(35px)`,
          //   transition: { type: 'spring', duration: 0.75 },
          // }}
          whileTap={{ scale: 0.98 }}
        >
          <Box
            sx={{
              transition: 'all 1s ease',
              boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;',
              '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.4) 0px 25px 50px -12px;',
              },
            }}
          >
            <Link
              sx={{
                width: ['auto', '450px', 'auto'],
              }}
              href={visitHref}
            >
              <StaticImage
                src="../images/nyt-critics-picks-screenshot.png"
                alt={title}
              />
            </Link>
          </Box>
        </motion.div>
        <Box sx={{ pr: 4, pt: [0, 1], width: ['450px', '450px', 'auto'] }}>
          <Link href={visitHref} target="_blank" rel="noopener noreferrer">
            <Heading>{title}</Heading>
          </Link>
          <Box sx={{ pt: 3 }}>
            <Text sx={{ pt: 4 }}>{description}</Text>
          </Box>
          <Box sx={{ pt: 3 }}>
            <Link
              sx={{ pr: 3 }}
              href={visitHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site →
            </Link>
            <Link
              sx={{}}
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github →
            </Link>
          </Box>
        </Box>
      </Grid>
    </Container>
  )
}

export default DevProject
