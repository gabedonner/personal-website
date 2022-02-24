/** @jsx jsx */
import * as React from "react"
import { Global } from "@emotion/react"
import { Box, Container, jsx } from "theme-ui"
import Seo from "./seo"
import Header from "./header"
import Footer from "./footer"
import CodeStyles from "../styles/code"
import SkipNavLink from "./skip-nav"
//import Transition from "./transition"
import PropTypes from "prop-types"


//https://www.framer.com/docs/animate-presence/
import { motion, AnimatePresence } from 'framer-motion'


// this is an alternate way to structure the animation variants
/* const duration = 0.3

const variants = {
  initial: {
    opacity: 0,
    y: 5
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: duration },
  },
} */

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
          initial={{ opacity: 0, y: 2.5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2.5 }}
          transition={{
            type: "spring",
            //damping: 1,
            mass: .5,
            stiffness: 80,
            // duration: .2,
            delay: .1,
            // bounce: .1,
          }}
          //variants={variants}
          //initial="initial"
          //animate="animate"
          //exit="exit"
        >
        <Box id="skip-nav" sx={{ ...CodeStyles }} className={className}>
          {children}
        </Box>
      </motion.main>
      
      <Footer />
    </Container>
  </React.Fragment>
)


// something from Janessa Garrow's example for page transisitons
// https://janessagarrow.com/blog/gatsby-framer-motion-page-transitions/
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
