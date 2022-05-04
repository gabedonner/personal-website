/** @jsx jsx */
import { jsx, AspectImage } from "theme-ui"
// import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "./layout"
// import Title from "./title"
// import Listing from "./listing"
// import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import useSiteMetadata from "../hooks/use-site-metadata"
// import replaceSlashes from "../utils/replaceSlashes"
import { visuallyHidden } from "../styles/utils"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Websites from "../texts/home-websites"
// @ts-ignore
import Projects from "../texts/home-projects"
// @ts-ignore
import { StaticImage } from "gatsby-plugin-image"
// @ts-ignore
//import HeroSVG from '../svg/hero-background.inline.svg'
import HeroSVG from '../svg/dot-graph.inline.svg'
// import ThreeHero from '../components/threejs-hero'
import HomepageTitle from './homepage-title'
import HomewebItems from './homeweb-items'


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
      <section sx= {{
        mt: '-1.1em',
        position: 'static',
        overflow: 'hidden',
        height: '21.8em',
        color: 'dots',
      }}>
        <HeroSVG />
      </section>   
      <section sx={{  
        position: 'relative', 
        height: '20em',
        pb: ['4em', '6em'], pt: [0], mt: '-17.65em', mb: 0, 
        p: { fontSize: [2, 3, 3], mt: 3 }, 
        variant: `section_hero`,
        overflow: 'hidden',
        //boxShadow: 'rgb(0 0 0 / 4%) 0px 32px 32px 0px, rgb(0 0 0 / 4%) 0px 16px 16px 0px, rgb(0 0 0 / 4%) 0px 8px 8px 0px, rgb(0 0 0 / 4%) 0px 4px 4px 0px',
        }}>
        <Hero />
      </section>  
      
       
      <section>
        <HomepageTitle title={"Client Websites"} />
        <HomewebItems />
      </section>
      {/* <Websites /> */} 
      <HomepageTitle title={"Design Projects"} />    
       <Projects />
    </Layout>
  )
}

export default Homepage
