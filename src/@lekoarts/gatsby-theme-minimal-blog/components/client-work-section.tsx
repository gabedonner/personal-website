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

const DesignProjectGrid = ({ children }: any) => {
  return (
    <Grid columns={[1, 1, 2, 2]} sx={{ my: [90, 120], columnGap: [30, 60] }}>
      {children}
    </Grid>
  )
}

const HomewebItems2 = () => {
  return (
    <section>
      <RevealAnimationWrapper delayDuration={0}>
        <DivideTitle title={'Featured Work'} />
      </RevealAnimationWrapper>
      <DesignProjectGrid>
        <Box>
          <RevealAnimationWrapper delayDuration={0}>
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
                  width: ['90vw', '70vw', 'auto', 'auto', 'auto'],
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
          {/* <RevealAnimationWrapper delayDuration={0}>
            <StaticImage
              sx={{ mb: 0 }}
              src="../images/design-imgs/deodorant-spread.jpg"
              alt="nfuse deodorant spread"
            />
          </RevealAnimationWrapper> */}
        </Box>
        <EnterAnimationWrapper delayDuration={0.25}>
          <Box
            sx={{
              //mb: 2,
              //mt: '42px',
              //bg: 'white',
              //textAlign: 'center',
              //pl: [0, '1.7em', '5.2em', '5.2em'],
              a: {
                fontWeight: 'medium',
                fontSize: [2, 3, 3],
                color: 'text',
                borderBottom: '1.5px solid',
                borderBottomColor: 'secondary',
                pb: '2px',
                pr: 1,
                ':hover': {
                  color: `primary`,
                  mr: '1rem',
                  //ml: '.2rem',
                  textDecoration: 'none',
                  borderBottomColor: 'primary',
                  letterSpacing: '.005rem',
                },
              },
            }}
          >
            <Link href="/about">Iconiclinx.com</Link>
            <Text
              sx={{
                fontWeight: 'medium',
                fontSize: '22px',
                color: 'text',
                verticalAlign: '-1.75px',
                //ml: '.5em',
                //px: [2, 0],
                fontFamily: 'Cormorant Garamond',
                fontStyle: 'italic',
              }}
            >
              →
            </Text>
          </Box>
          <Box
            sx={{
              //px: [2, 0],
              pt: 3,
              width: ['90vw', '360px'],
              p: {
                //fontFamily: 'Cormorant Garamond',
              },
            }}
          >
            <Text sx={{ fontWeight: 'medium' }}>
              Web Development & Branding
            </Text>
            <p>
              nfuse LLC is a bodycare company that specializes in
              magnesium-based products, implementing a patented transdermal
              delivery system.
            </p>

            <p>
              Since 2016, I've been responsible for the company's branding and
              package design, and developed a custom Wordpress e-commerce site
              for their launch. As of 2022, nfuse products are sold at over
              1,000 locations across the United States, including CVS and Whole
              Foods.
            </p>
            <p>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.nfusemagnesium.com"
              >
                Click here to see their website &#8594;
              </Link>
            </p>
          </Box>
        </EnterAnimationWrapper>
      </DesignProjectGrid>
    </section>
  )
}

export default HomewebItems2
