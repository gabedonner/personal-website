/** @jsx jsx */
import { jsx, useColorMode, Flex, Box, Link } from 'theme-ui'
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'
import ColorModeToggle from './colormode-toggle'
import Navigation from './navigation'
import HeaderTitle from './header-title'
import HeaderExternalLinks from './header-external-links'

const Header = () => {
  const { navigation: nav } = useMinimalBlogConfig()
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    e.preventDefault()
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header sx={{ mb: [5] }}>
      {/* <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle />
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex> */}
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          // mt: 3,
          mt: 1,
          color: `secondary`,
          a: { color: `secondary`, ':hover': { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={nav} />
        {/* <HeaderExternalLinks /> */}
        {/* <ColorModeToggle isDark={isDark} toggle={toggleColorMode} /> */}
        <Flex sx={{ alignItems: `center`, justifyContent: `right` }}>
          <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
        </Flex>
      </div>
    </header>
  )
}

export default Header
