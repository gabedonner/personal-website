/** @jsx jsx */
import { jsx, AspectImage } from "theme-ui"
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
import { StaticImage } from "gatsby-plugin-image"
// @ts-ignore
import heroSVG from '../images/hero-background.svg'


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
  
  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{  
        position: 'relative', 
        height: '27.5rem',
        pb: [6], pt: [6], mt: -5, mb: -3, 
        p: { fontSize: [2, 3, 3], mt: 3 }, 
        variant: `section_hero`,
        overflow: 'hidden',
        //boxShadow: 'rgb(0 0 0 / 6%) 0px 32px 32px 0px, rgb(0 0 0 / 6%) 0px 16px 16px 0px, rgb(0 0 0 / 6%) 0px 8px 8px 0px, rgb(0 0 0 / 6%) 0px 4px 4px 0px',
        }}>
        <Hero />
        <StaticImage 
          src='../images/old-film.png'
          alt="Welcome" 
          sx={{
              backgroundColor: 'muted', 
              position: 'absolute', 
              top: 0, left: 0, 
              width: [1000], 
              zIndex: [-4],
            }}
        />
      </section>
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
