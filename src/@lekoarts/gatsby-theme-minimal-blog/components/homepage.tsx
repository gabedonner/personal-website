/** @jsx jsx */
import { jsx, AspectImage } from 'theme-ui'
// import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from './layout'
// import Title from "./title"
// import Listing from "./listing"
// import List from "./list"
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'
import useSiteMetadata from '../hooks/use-site-metadata'
// import replaceSlashes from "../utils/replaceSlashes"
import { visuallyHidden } from '../styles/utils'
// @ts-ignore
import Hero from '../texts/hero'
import HeroComponent from './hero'
// @ts-ignore
import Websites from '../texts/home-websites'
// @ts-ignore
// @ts-ignore
import { StaticImage } from 'gatsby-plugin-image'
// @ts-ignore
//import HeroSVG from '../svg/hero-background.inline.svg'
import HeroSVG from '../svg/dot-graph.inline.svg'
// import ThreeHero from '../components/threejs-hero'
import DivideTitle from './title-divide'
import HomewebItems from './homeweb-items'
import DevProject from './dev-project'
//import Projects from '../texts/home-projects'
import { motion } from 'framer-motion'
import HomeBottomSection from './home-bottom-section'

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

const SectionReveal = ({ children }: any) => {
  const sectionRevealAnimations = {
    hidden: { opacity: 0, y: 15, height: '100%' },
    visible: { opacity: 1, y: 0 },
  }

  const transition = {
    duration: 1,
    ease: [0.6, 0.01, -0.05, 0.9],
  }

  return (
    <motion.div
      variants={sectionRevealAnimations}
      // ref={ref}
      initial="hidden"
      //animate={controls}
      transition={transition}
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mt: '-1.1em',
          position: 'static',
          overflow: 'hidden',
          height: '21.8em',
          color: 'dots',
        }}
      >
        <HeroSVG />
      </section>
      <section
        sx={{
          position: 'relative',
          height: '20em',
          pb: ['4em', '6em'],
          pt: [0],
          mt: '-17.65em',
          mb: 0,
          p: { fontSize: [2, 3, 3], mt: 3 },
          variant: `section_hero`,
          overflow: 'hidden',
          //boxShadow: 'rgb(0 0 0 / 4%) 0px 32px 32px 0px, rgb(0 0 0 / 4%) 0px 16px 16px 0px, rgb(0 0 0 / 4%) 0px 8px 8px 0px, rgb(0 0 0 / 4%) 0px 4px 4px 0px',
        }}
      >
        <HeroComponent />
      </section>

      <SectionReveal>
        <DivideTitle title={'Development Projects'} />
      </SectionReveal>

      <DevProject
        title={"NYT Critic's Picks"}
        description={
          'A searchable collection of all the movies picked by New York Times critics. Built with Next.js, the NYT REST API, MUI, and Framer Motion.'
        }
        visitHref={`https://nyt-critics-picks.vercel.app`}
        githubHref={`https://github.com/gabedonner/nyt-critics-picks`}
      />
      <HomewebItems />
      <HomeBottomSection />
    </Layout>
  )
}

export default Homepage
