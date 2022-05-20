import React from 'react'
import { jsx, Box, Link, Text } from 'theme-ui'
import DivideTitle from './title-divide'

const ResumeComponent = () => {
  return (
    <Box
      sx={{
        mr: [0, 25],
        mt: 5,
        mb: 40,
        fontSize: ['1rem', '1.25rem'],
        lineHeight: '1.625em',
        letterSpacing: '-0.003em',
        position: 'relative',
      }}
    >
      {/* <DivideTitle title={'about'} /> */}

      <p>This is going to be my resume</p>
    </Box>
  )
}

export default ResumeComponent
