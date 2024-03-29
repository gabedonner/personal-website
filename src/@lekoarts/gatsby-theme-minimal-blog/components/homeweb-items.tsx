/** @jsx jsx */
import React from 'react'
import { jsx, Box, Grid, Link, Flex, Text } from 'theme-ui'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import DivideTitle from './title-divide'
import RevealAnimationWrapper from './reveal-animation-wrapper'
import EnterAnimationWrapper from './enter-animation-wrapper'
//https://blog.maximeheckel.com/posts/advanced-animation-patterns-with-framer-motion/
//how to animate children on hover

const HomewebItems = () => {
  return (
    <section>
      <RevealAnimationWrapper>
        <DivideTitle title={'Client Websites'} />
      </RevealAnimationWrapper>
      <Grid
        columns={[1, 1, 2, 2]}
        sx={{
          gap: ['4em'],
          // columnGap: ['5em'],
          // rowGap: ['3em', '5em'],
          //px: ['0', '0', 0, '1.7em'],
          flexGrow: 99999,
          flexBasis: 300,
          minWidth: 300,
          //pl: '25%',
          pt: 60,
          pb: 120,
          a: {
            fontWeight: 'medium',
            fontSize: [2, 3, 3],
            color: 'text',
            textDecoration: 'none',
            pr: 1,
            letterSpacing: '.05rem',
            ':hover': {
              // color: `primary`,
              textDecoration: 'underline',
              pr: '1rem',
            },
          },
        }}
      >
        <Box
          sx={{
            mb: [3, 4],
            mx: 'auto',
            //border: '1px solid black',
          }}
        >
          <RevealAnimationWrapper>
            <motion.div
              whileHover={{
                scale: 1.01,
                //   y: -10,
                //   //x: 5,
                //   opacity: 0.9,
                //   //webkitFilter: `blur(4px)`,
                //   //filter: `blur(35px)`,
                //   transition: { type: 'spring', duration: 0.75 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Box
                sx={{
                  mb: 4,
                  width: ['90vw', '70vw', '325px', 'auto', 'auto'],
                  transition: 'all 1s ease',
                  borderColor: 'pink',
                  overflow: 'none',

                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;',
                  '&:hover': {
                    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 25px 50px -12px;',
                  },
                }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://iconiclinx.com"
                >
                  <StaticImage
                    src="../images/iconiclinx-website-snapshot.png"
                    alt="iconiclinx"
                  />
                </Link>
              </Box>
            </motion.div>
          </RevealAnimationWrapper>
          <EnterAnimationWrapper delayDuration={0}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://iconiclinx.com"
            >
              iconiclinx.com
            </a>
            <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
              &nbsp;→
            </Text>
            <br />
            <Text variant="webDesc">2022 / Webflow + Wordpress</Text>
          </EnterAnimationWrapper>
        </Box>
        <Box
          sx={{
            mb: 4,
            mx: 'auto',
          }}
        >
          <RevealAnimationWrapper>
            <motion.div
              whileHover={{
                scale: 1.01,
                //   y: -10,
                //   //x: 5,
                //   opacity: 0.9,
                //   //webkitFilter: `blur(4px)`,
                //   //filter: `blur(35px)`,
                //   transition: { type: 'spring', duration: 0.75 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Box
                sx={{
                  mb: 4,
                  width: ['90vw', '70vw', '325px', 'auto', 'auto'],
                  transition: 'all 1s ease',
                  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;',
                  '&:hover': {
                    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 25px 50px -12px;',
                  },
                }}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.antique-exchange.com"
                >
                  <StaticImage
                    src="../images/antique-exchange-snapshot.png"
                    alt="A dinosaur"
                  />
                </Link>
              </Box>
            </motion.div>
          </RevealAnimationWrapper>
          <EnterAnimationWrapper delayDuration={0}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antique-exchange.com"
            >
              antique-exchange.com
            </a>
            <Text sx={{ fontWeight: 'medium', fontSize: [2, 3, 3] }}>
              &nbsp;→
            </Text>
            <br />
            <Text variant="webDesc">2021 / Shopify</Text>
          </EnterAnimationWrapper>
        </Box>

        {/* <Box sx={{
            mb: 0,
            mx: 'auto',
            }}>
                <Box sx={{
                    mb: 4,
                    width: ['90vw','70vw', '325px', 'auto', 'auto',],
                    transition: 'all 1s ease',
                    ":hover": {
                        // color: `primary`,
                        //boxShadow: 'rgb(0 0 0 / 4%) 0px 32px 32px 0px, rgb(0 0 0 / 4%) 0px 16px 16px 0px, rgb(0 0 0 / 4%) 0px 8px 8px 0px, rgb(0 0 0 / 4%) 0px 4px 4px 0px',
                    },
                    }}>
                    <motion.div
                        whileHover={{
                            //scale: 1.03,
                            y: -10,
                            //x: 5,
                            opacity: .90,
                            //webkitFilter: `blur(4px)`,
                            //filter: `blur(25px)`,
                            transition: { type: 'spring', duration: .75 },
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.joansabaphotography.com" >
                        <StaticImage 
                            src="../images/joansaba-website-snapshot.png" 
                            alt="Joan Saba Photography" 
                        />
                    </Link>
                    </motion.div>
                </Box>
                <a target="_blank" rel="noopener noreferrer" href="https://www.joansabaphotography.com">joansabaphotography.com</a>
                <Text sx={{fontWeight: 'medium', fontSize: [2,3,3]}}>&nbsp;→</Text>
                <br />
                <Text variant='webDesc'>2021 / Squarespace</Text>  
            </Box> */}
      </Grid>
    </section>
  )
}

export default HomewebItems
