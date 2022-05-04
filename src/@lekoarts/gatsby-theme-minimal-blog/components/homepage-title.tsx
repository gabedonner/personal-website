/** @jsx jsx */
import { jsx, Box, Grid, Link, Flex, Text } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"

interface HomepageTitleProps {
    title: string,
}

const HomepageTitle = ({title}: HomepageTitleProps) => {
    return (
        <Box gap={2} columns={[1, null, 2]}
            sx={{
                pb: [4, 5],
                //flexGrow: 1,
                // flexBasis: [256, 190, 256, 256],
                //flexBasis: ['27.5%'],
            }}>
            <Text
                sx={{
                fontSize: [1, 2, 2],
                color: 'secondary',
                bg: 'background',
                pr: 4, 
                }}>
                {title}
            </Text>
            <Box sx={{mr: 0, height: '1px', bg: 'divide', mt: '-.9em'}}></Box>
        </Box>
    )
}

export default HomepageTitle
