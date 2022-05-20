/** @jsx jsx */
import * as React from 'react'
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout'
import { jsx, Box, Text, Link } from 'theme-ui'
// @ts-ignore
import HeroSVG from '../svg/dot-graph.inline.svg'

const ResumeComponent = () => {
  return (
    <Layout>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: '21.8em',
          color: 'dots',
          left: 0,
          mt: -40,
        }}
      >
        <HeroSVG />
      </Box>
    </Layout>
  )
}

export default ResumeComponent
