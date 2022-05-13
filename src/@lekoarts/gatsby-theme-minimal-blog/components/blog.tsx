/** @jsx jsx */
import { jsx, Heading, Link, Flex, Grid, Box, Text } from 'theme-ui'
//import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from './layout'
import Listing from './listing'
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'
import replaceSlashes from '../utils/replaceSlashes'
import Seo from './seo'

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const DesignProjectGrid = ({ children }: any) => {
  return (
    <Grid columns={[1, 1, 2, 2]} sx={{ mb: 60, gap: 60 }}>
      {children}
    </Grid>
  )
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <Seo title="Design" />
      {/* <Heading>Design</Heading> */}
      {/* <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          Portfolio
        </Heading>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View all tags
        </TLink>
      </Flex> */}
      {/* <Listing posts={posts} sx={{ mt: [4, 5] }} /> */}
      <DesignProjectGrid>
        <Link href="/design/city-magazine-cover">
          <StaticImage
            sx={{ mx: 0 }}
            src="../images/design-imgs/city-magazine-cover.jpg"
            alt="city magazine cover"
          />
        </Link>
        <Box>
          <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
            City Magazine Cover
          </Text>
          {/* <Text variant="webDesc">City Magazine Cover</Text> */}
        </Box>
      </DesignProjectGrid>
      <DesignProjectGrid>
        <Link href="/design/city-magazine-cover">
          <StaticImage
            sx={{ mx: 0 }}
            src="../images/design-imgs/lav-deodorant.jpg"
            alt="iconiclinx"
          />
        </Link>
        <Box>
          <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
            nfuse LLC
          </Text>
        </Box>
      </DesignProjectGrid>
      <DesignProjectGrid>
        <Link href="/design/city-magazine-cover">
          <StaticImage
            sx={{ mx: 0 }}
            src="../images/design-imgs/gatsby-cover-mockup.jpg"
            alt="iconiclinx"
          />
        </Link>
        <Box>
          <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
            Gatsby Book Cover
          </Text>{' '}
        </Box>
      </DesignProjectGrid>
    </Layout>
  )
}

export default Blog
