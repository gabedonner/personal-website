/** @jsx jsx */
import { jsx, Link } from 'theme-ui'
import useSiteMetadata from '../hooks/use-site-metadata'

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `right`,
        mt: [5],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`row`, `row`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div sx={{ justifyContent: 'right' }}>
        &copy; {new Date().getFullYear()} {siteTitle}
      </div>
      {/* <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </div> */}
    </footer>
  )
}

export default Footer
