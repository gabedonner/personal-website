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
//import PropTypes from "prop-types"


//https://www.framer.com/docs/animate-presence/
import { motion, AnimatePresence } from 'framer-motion'


// page transition durations
/* const enterDuration = 0.3
const exitDuration = 0.3
const delayDuration = 0.3 */

// variant structure for the page transition animation
/* const variants = {
  initial: {
    opacity: 0,
    y: 2.5
  },
  animate: {
    opacity: 1,
    y: 0,
    //y: [0, -3, 0],
    x: 0,
    //x: [0, 3, 0],
    transition: {
      duration: enterDuration,
      delay: delayDuration,
      when: "beforeChildren",
      staggerChildren: 0.3,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    y: -2.5,
    //transition: { duration: duration },
    transition: { 
      duration: exitDuration,
      type: "spring", 
    },
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
          key="content"
          initial={{ opacity: 0, y: 2.5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2.5 }}
          transition={{
            type: "tween",
            //damping: 1,
            //duration: .2,
            delay: .05,
            // bounce: .1,
          }} 
          /* variants={variants}
          initial="initial"
          animate="animate"
          exit="exit" */
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
