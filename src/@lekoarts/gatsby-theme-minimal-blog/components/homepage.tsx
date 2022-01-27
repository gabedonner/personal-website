/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
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
      <section sx={{ mb: [6, 6, 6, 6], pt: 4, p: { fontSize: [2, 3, 3], mt: 3 }, variant: `section_hero` }}>
        <Hero />
      </section>
      <List sx={{ variant: `section_bottom` }}>
        <Bottom />
      </List>
      <section sx={{ mb: [6, 6, 6, 6] }}>
      </section>
      <List sx={{ variant: `section_bottom` }}>
        <Projects />
      </List>
      <section sx={{ mb: [6, 6, 6, 6] }}>
      </section>
      {/* <Title text="Projects">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>See all</Link>
      </Title>*/}
    </Layout>
  )
}

export default Homepage
