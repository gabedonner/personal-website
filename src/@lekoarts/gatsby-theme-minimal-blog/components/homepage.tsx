/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "./layout"
import Title from "./title"
import Listing from "./listing"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
import replaceSlashes from "../utils/replaceSlashes"
import { visuallyHidden } from "../styles/utils"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
// @ts-ignore
import Projects from "../texts/home-projects"
// @ts-ignore
import { gridPattern } from '../images/grid-pattern.png'
// @ts-ignore
import { getImage } from "gatsby-plugin-image"
// @ts-ignore
import { convertToBgImage } from "gbimage-bridge"
// @ts-ignore
import BackgroundImage from "gatsby-background-image"

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
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  // I have imported what is necessary for the background image
  // and created the query, but I need to figure out how to 
  // break this into a new file or integrate it correctly
  // const GbiBridged = () => {
  //   const { backgroundImage123 } = useStaticQuery(
  //     graphql`
  //       query {
  //         backgroundImage123: file(relativePath: {eq: "grid-pattern.png"}) {
  //           id
  //           childImageSharp {
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //     `
  //   )
  
  // const image = getImage(backgroundImage123)
  // const bgImage = convertToBgImage(image)
  
  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{ 
        backgroundColor: '', 
        //backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Dots_Transparent.svg/120px-Dots_Transparent.svg.png")', 
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Lineatur_Sechsundzwanzig_a_mit_Rand_links_ganzes_Blatt_drucken.svg/744px-Lineatur_Sechsundzwanzig_a_mit_Rand_links_ganzes_Blatt_drucken.svg.png")', 
        //backgroundImage: 'url(${gridPattern})', 
        pb: [6], pt: [6], mt: -5, mb: -3, p: { fontSize: [2, 3, 3], mt: 3 }, variant: `section_hero`,
        backgroundPosition: 'right top',
        backgroundRepeat: 'repeat', }}>
        <Hero />
      </section>
      {/* this is what the background section would look like */}
      {/* <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingConext
      >
        <Hero />
      </BackgroundImage>   */}

      {/* <List sx={{ variant: `section_bottom` }}>
        <Bottom />
      </List>
      <List sx={{ variant: `section_bottom` }}>
        <Projects />
      </List> */}
      
      <Bottom />
      <Projects />
    </Layout>
  )
}

export default Homepage
