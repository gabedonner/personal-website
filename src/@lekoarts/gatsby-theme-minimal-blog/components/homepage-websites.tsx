/** @jsx jsx */
import { jsx, Box, Grid, Link, Flex, Text } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"


const HomeWebsites = () => {
    return (
        <Box gap={2} columns={[1, null, 2]}
            sx={{
                pb: [3, 4],
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
                Websites
            </Text>
            <Box sx={{mr: 0, height: '1px', bg: 'divide', mt: '-.9em'}}></Box>
        </Box>
    )
}

export default HomeWebsites
