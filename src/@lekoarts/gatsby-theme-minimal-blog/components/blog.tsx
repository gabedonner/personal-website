/** @jsx jsx */
import { jsx, Heading, Link, Flex, Grid, Box, Text } from 'theme-ui'
//import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from './layout'
import Listing from './listing'
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'
import replaceSlashes from '../utils/replaceSlashes'
import Seo from './seo'
import DivideTitle from './title-divide'

// type PostsProps = {
//   posts: {
//     slug: string
//     title: string
//     date: string
//     excerpt: string
//     description: string
//     timeToRead?: number
//     tags?: {
//       name: string
//       slug: string
//     }[]
//   }[]
// }

const Divider = () => {
  return <Box sx={{ mr: 0, height: '1.5px', bg: 'divide', mb: 40 }}></Box>
}

const DesignProjectGrid = ({ children }: any) => {
  return (
    <Grid columns={[1, 1, 2, 2]} sx={{ mb: [90, 120], gap: [30, 60] }}>
      {children}
    </Grid>
  )
}

// const Blog = ({ posts }: PostsProps) => {
const Blog = () => {
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
        <Box>
          <Link>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/lav-deodorant.jpg"
              alt="iconiclinx"
            />
          </Link>
          <Link>
            <StaticImage
              sx={{ mb: 0 }}
              src="../images/design-imgs/deodorant-spread.jpg"
              alt="iconiclinx"
            />
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
            nfuse LLC
          </Text>
          <p>
            nfuse LLC is a bodycare company that specializes in magnesium-based
            products, implementing a patented transdermal delivery system.
          </p>

          <p>
            Since 2016, I've been responsible for the company's branding and
            package design. Today, nfuse products are sold at over 1,000 stores
            around the United States, including CVS and Whole Foods.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.nfusemagnesium.com"
            >
              Click here to see their website &#8594;
            </a>
          </p>
        </Box>
      </DesignProjectGrid>
      <Divider />
      <DesignProjectGrid>
        <Box>
          <Link>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/gatsby-cover-mockup.jpg"
              alt="gatsby cover mockup"
            />
          </Link>
          <Link>
            <StaticImage
              sx={{ mx: 0 }}
              src="../images/design-imgs/gatsby-book-cover.jpg"
              alt="gatsby cover mockup"
            />
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
            Gatsby Book Cover
          </Text>
          <p>A cover mockup for The Great Gatsby</p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Fz5sCV5t3dekwvFpyM2xEgSxSmf2Gn0X/view?usp=sharing"
            >
              Click here to see the full brief &#x2192;
            </a>
          </p>
        </Box>
      </DesignProjectGrid>
      <Divider />
      <DesignProjectGrid>
        <Box>
          <Link>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/rooftop-detail.jpg"
              alt="gatsby cover mockup"
            />
          </Link>
          <Link>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/roof-terrace-iso-right.jpg"
              alt="gatsby cover mockup"
            />
          </Link>
          <Link>
            <StaticImage
              sx={{ mx: 0 }}
              src="../images/design-imgs/rooftop-iso.jpg"
              alt="rooftop iso"
            />
          </Link>
        </Box>
        <Box>
          <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
            Green Rooftop Terrace
          </Text>
          <p>
            A Renderings for a rooftop terrace built using sustainable
            materials.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1dznIwQOUSCeOm1p94C2TXieRYcNue7c3/view?usp=sharing"
            >
              Click here to see the full brief &#x2192;
            </a>
          </p>
        </Box>
      </DesignProjectGrid>
      <Divider />
      <DesignProjectGrid>
        <Link>
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
    </Layout>
  )
}

export default Blog
