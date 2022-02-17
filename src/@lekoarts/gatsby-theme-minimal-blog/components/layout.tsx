/** @jsx jsx */
import * as React from "react"
import { Global } from "@emotion/react"
import { Box, Container, jsx } from "theme-ui"
import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"
//https://www.framer.com/docs/animate-presence/
import { motion, AnimatePresence } from 'framer-motion';


type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    <Seo />
    <SkipNavLink>Skip to content</SkipNavLink>
    <Container>
      <Header />
      <motion.main
          /* initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }} */
          initial={{ opacity: 0, y: 2.5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2.5 }}
          transition={{
            type: "spring",
            damping: 8,
            mass: 0.25,
            stiffness: 100,
            duration: 5,
            delay: .1,
          }}
        >
        <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
          {children}
        </Box>
      </motion.main>

      <Footer />
    </Container>
  </React.Fragment>
)

export default Layout
