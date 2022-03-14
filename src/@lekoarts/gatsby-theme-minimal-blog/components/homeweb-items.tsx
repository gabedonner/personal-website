/** @jsx jsx */
import { jsx, Box, Grid, Link, Flex, Text } from "theme-ui"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion'


const HomewebItems = () => {
    return (
        <Grid columns={[1, 1, 2, 2]}
        sx={{
            //gap: ['4em'],
            columnGap: ['5em'],
            rowGap: ['5em'],
            mb: 6,
            ml: [0, 0, 0, 0],
            px: ['0', '5em', 0, 1],
            flexGrow: 99999,
            flexBasis: 300,
            minWidth: 300,
            mt: '4em',
            //pl: '25%',
            a: {
            fontWeight: 'medium',
            fontSize: [2, 3, 3],
            color: 'text',
            textDecoration: 'none',
            pr: 1,
            ":hover": {
                // color: `primary`,
                textDecoration: 'underline',
                pr: '1rem',
            },
            }
            }}>
            <Box sx={{
            mb: 4,
            mx: 'auto',
            //border: '1px solid black',
            }}>
                
                <Box sx={{
                mb: 4,
                width: ['80vw','500px', '325px', 'auto', 'auto',],
                transition: 'all 1s ease',
                ":hover": {
                    // color: `primary`,
                    opacity: .75,
                },
                }}>
                    <motion.div
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: .5 },
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                    <Link target="_blank" rel="noopener noreferrer" href="https://iconiclinx.webflow.io" >
                        <StaticImage 
                            src="../images/iconiclinx-website-snapshot.png" 
                            alt="A dinosaur" 
                        />
                    </Link>
                    </motion.div>
                </Box>

                <a target="_blank" rel="noopener noreferrer" href="https://iconiclinx.webflow.io">iconiclinx.com</a>
                <Text sx={{fontWeight: 'medium', fontSize: [2,3,3]}}>&nbsp;→</Text>
                <br />
                <Text variant='webDesc'>Media Consulting | Webflow (WIP)</Text>
            </Box>


            <Box sx={{
            mb: 4,
            mx: 'auto',
            }}>
                <Box sx={{
                mb: 4,
                width: ['80vw','500px', '325px', 'auto', 'auto',],
                transition: 'all 1s ease',
                ":hover": {
                    // color: `primary`,
                    opacity: .75,
                },
                }}>
                <motion.div
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                <Link target="_blank" rel="noopener noreferrer" href="https://www.antique-exchange.com" >
                    <StaticImage 
                        src="../images/antique-exchange-snapshot.png" 
                        alt="A dinosaur" 
                    />
                </Link>
                </motion.div>
            </Box>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antique-exchange.com">antique-exchange.com</a>
            <Text sx={{fontWeight: 'medium', fontSize: [2,3,3]}}>&nbsp;→</Text>
            <br />
            <Text variant='webDesc'>Antique Consignment | Shopify</Text>  
            </Box>

            <Box sx={{
            mb: 0,
            mx: 'auto',
            }}>
            <Box sx={{
                mb: 4,
                width: ['80vw','500px', '325px', 'auto', 'auto',],
                transition: 'all 1s ease',
                ":hover": {
                    // color: `primary`,
                    opacity: .75,
                    boxShadow: 'rgb(0 0 0 / 4%) 0px 32px 32px 0px, rgb(0 0 0 / 4%) 0px 16px 16px 0px, rgb(0 0 0 / 4%) 0px 8px 8px 0px, rgb(0 0 0 / 4%) 0px 4px 4px 0px',
                },
                }}>
                <motion.div
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.9 }}
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
            <Text variant='webDesc'>Travel Photography | Squarespace</Text>  
            </Box>




        </Grid>
    )
}

export default HomewebItems
