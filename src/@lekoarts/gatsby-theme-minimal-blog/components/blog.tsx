/** @jsx jsx */
import { jsx, Heading, Link, Flex, Grid, Box, Text } from 'theme-ui'
//import { Link } from 'gatsby'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from './layout'
import Listing from './listing'
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'
import replaceSlashes from '../utils/replaceSlashes'
import Seo from './seo'
import DivideTitle from './title-divide'
import { motion } from 'framer-motion'
import RevealAnimationWrapper from './reveal-animation-wrapper'
import EnterAnimationWrapper from './enter-animation-wrapper'

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
    <Grid columns={[1, 1, 2, 2]} sx={{ mb: [90, 120], gap: [30, 45] }}>
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
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/lav-deodorant.jpg"
              alt="nfuse lavender deodorant"
            />
          </RevealAnimationWrapper>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mb: 0 }}
              src="../images/design-imgs/deodorant-spread.jpg"
              alt="nfuse deodorant spread"
            />
          </RevealAnimationWrapper>
        </Box>
        <EnterAnimationWrapper delayDuration={0.25}>
          <Box sx={{ px: [2, 0] }}>
            <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
              nfuse LLC
            </Text>
            <p>
              nfuse LLC is a bodycare company that specializes in
              magnesium-based products, implementing a patented transdermal
              delivery system.
            </p>

            <p>
              Since 2016, I've been responsible for the company's branding and
              package design, and developed a custom Wordpress e-commerce site
              for their launch. As of 2022, nfuse products are sold at over
              1,000 locations across the United States, including CVS and Whole
              Foods.
            </p>
            <p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.nfusemagnesium.com"
              >
                Click here to see their website &#8594;
              </Link>
            </p>
          </Box>
        </EnterAnimationWrapper>
      </DesignProjectGrid>
      <DesignProjectGrid>
        <Box>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/big-ben-cover1.jpg"
              alt="big ben cover 1"
            />
          </RevealAnimationWrapper>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mx: 0 }}
              src="../images/design-imgs/big-ben-cover2.jpg"
              alt="big ben cover 2"
            />
          </RevealAnimationWrapper>
        </Box>
        <EnterAnimationWrapper delayDuration={0.25}>
          <Box sx={{ px: [2, 0] }}>
            <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
              Big Ben Album Covers
            </Text>
            <p>
              A cover series for two live albums by the Baltimore-based band Big
              Ben.
            </p>
            <p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://bigbenband.bandcamp.com/"
              >
                Check them out on Bandcamp &#x2192;
              </Link>
            </p>
          </Box>
        </EnterAnimationWrapper>
      </DesignProjectGrid>
      <DesignProjectGrid>
        <Box>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/gatsby-cover-mockup.jpg"
              alt="gatsby cover mockup"
            />
          </RevealAnimationWrapper>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mx: 0 }}
              src="../images/design-imgs/gatsby-book-cover.jpg"
              alt="gatsby book cover layout"
            />
          </RevealAnimationWrapper>
        </Box>
        <EnterAnimationWrapper delayDuration={0.25}>
          <Box sx={{ px: [2, 0] }}>
            <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
              Gatsby Book Cover
            </Text>
            <p>A cover mockup for The Great Gatsby.</p>
            <p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1Fz5sCV5t3dekwvFpyM2xEgSxSmf2Gn0X/view?usp=sharing"
              >
                Click here to see the full brief &#x2192;
              </Link>
            </p>
          </Box>
        </EnterAnimationWrapper>
      </DesignProjectGrid>
      <DesignProjectGrid>
        <Box>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/rooftop-detail.jpg"
              alt="rooftop terrace render detail"
            />
          </RevealAnimationWrapper>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mb: 40 }}
              src="../images/design-imgs/roof-terrace-iso-right.jpg"
              alt="rooftop terrace render iso"
            />
          </RevealAnimationWrapper>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{ mx: 0 }}
              src="../images/design-imgs/rooftop-iso.jpg"
              alt="rooftop terrace wireframe iso"
            />
          </RevealAnimationWrapper>
        </Box>
        <EnterAnimationWrapper delayDuration={0.25}>
          <Box sx={{ px: [2, 0] }}>
            <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
              Green Rooftop Terrace
            </Text>
            <p>
              Renderings for a rooftop terrace built using sustainable materials
              and indigenous plants. Made with Sketchup and V-Ray.
            </p>
            <p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1dznIwQOUSCeOm1p94C2TXieRYcNue7c3/view?usp=sharing"
              >
                Click here to see the full design brief &#x2192;
              </Link>
            </p>
          </Box>
        </EnterAnimationWrapper>
      </DesignProjectGrid>
      <DesignProjectGrid>
        <RevealAnimationWrapper>
          <StaticImage
            sx={{ mx: 0 }}
            src="../images/design-imgs/city-magazine-cover.jpg"
            alt="city magazine cover"
          />
        </RevealAnimationWrapper>
        <EnterAnimationWrapper delayDuration={0.25}>
          <Box sx={{ px: [2, 0] }}>
            <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
              City Magazine Cover
            </Text>
            <p>
              A cover mockup and collage illustration for a hypothetical
              magazine called "City" for an issue focusing on Baltimore.
            </p>
          </Box>
        </EnterAnimationWrapper>
      </DesignProjectGrid>
      <DesignProjectGrid>
        <Box sx={{ px: 10 }}>
          <RevealAnimationWrapper>
            <StaticImage
              sx={{
                mb: 0,
                // border: '1px dashed',
                // borderColor: 'muted',
              }}
              src="../images/design-imgs/sns-logo.png"
              alt="station north sound logo"
            />
          </RevealAnimationWrapper>
        </Box>
        <EnterAnimationWrapper delayDuration={0.25}>
          <Box sx={{ px: [2, 0] }}>
            <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
              Station North Sound
            </Text>
            <p>Logo for a Baltimore-based recording studio.</p>
            <p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://http://www.stationnorthsound.com/"
              >
                Check out their website &#8594;
              </Link>
            </p>
          </Box>
        </EnterAnimationWrapper>
      </DesignProjectGrid>
      <Flex sx={{ justifyContent: 'space-between', px: [2, 0] }}>
        <Link sx={{ fontSize: 18 }} href="/">
          &#x2190; Home
        </Link>
        <Link sx={{ fontSize: 18 }} href="/about">
          About &#x2192;
        </Link>
      </Flex>
    </Layout>
  )
}

export default Blog
