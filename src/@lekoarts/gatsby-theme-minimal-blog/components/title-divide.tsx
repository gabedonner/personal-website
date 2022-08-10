/** @jsx jsx */
import { jsx, Box, Grid, Link, Flex, Text } from 'theme-ui'

interface HomepageTitleProps {
  title: string
}

const HomepageTitle = ({ title }: HomepageTitleProps) => {
  return (
    <Box
      sx={{
        mb: 60,
        //flexGrow: 1,
        // flexBasis: [256, 190, 256, 256],
        //flexBasis: ['27.5%'],
      }}
    >
      <Text
        sx={{
          fontSize: [2, 3, 3],
          color: 'secondary',
          bg: 'background',
          pr: 4,
          fontFamily: 'Cormorant Garamond',
          fontStyle: 'italic',
        }}
      >
        {title}
      </Text>
      <Box sx={{ mr: 0, height: '1px', bg: 'divide', mt: '-.9em' }}></Box>
    </Box>
  )
}

export default HomepageTitle
