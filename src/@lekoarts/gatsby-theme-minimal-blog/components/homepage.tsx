/** @jsx jsx */
import { jsx, AspectImage } from 'theme-ui'
import Layout from './layout'
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'
import useSiteMetadata from '../hooks/use-site-metadata'
import { visuallyHidden } from '../styles/utils'
import { StaticImage } from 'gatsby-plugin-image'
// @ts-ignore
import DivideTitle from './title-divide'
import HomewebItems from './homeweb-items'
import DevProject from './dev-project'
import { motion } from 'framer-motion'
import HomeBottomSection from './home-bottom-section'
import HomepageHero from './homepage-hero'
import DesignPortfolio from './design-port-section'

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
      <HomepageHero />
      <HomewebItems />
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
      <SectionReveal>
        <DivideTitle title={'Design Portfolio'} />
      </SectionReveal>
      <DesignPortfolio />
      <HomeBottomSection />
    </Layout>
  )
}

export default Homepage
