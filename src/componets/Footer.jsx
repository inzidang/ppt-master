import { Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {AiFillFacebook, AiFillTwitterSquare, AiFillYoutube, AiFillInstagram,  } from "react-icons/ai"
import { FaTumblr, FaSnapchatGhost, FaPinterestSquare } from "react-icons/fa"

export default function Footer(){
    return <HStack w="full" bg="gray.800" h="300px" py="20"
    justifyContent="center" alignItems="flex-start"
    >
        <Grid w={{
            md: "3xl",
            lg: "5xl",
            xl: "7xl"
        }} h="full" gap="4" templateColumns={{
            sm:"1fr",
            xl:"1fr 1fr 1fr 1fr"
        }}>
            <GridItem bg="yello.100">
                <Box w="20">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/220px-Marvel_Logo.svg.png"/>
                </Box>
            </GridItem>
            {/* 2번쨰 푸터*/}
            <GridItem w="full">
                <HStack w="full" spacing={8}>
                    <VStack color="gray.100" 
                    fontWeight={600}
                    alignItems={"flex-start"}
                    >
                        <Text>ABOUT MARVEL</Text>
                        <Text>HELP/FAQS</Text>
                        <Text>CAREERSL</Text>
                        <Text>INTERNSHIPS</Text>
                    </VStack>
                    <VStack color="gray.400" 
                    fontWeight={300}
                    alignItems={"flex-start"}
                    >
                        <Text>ADVERTISING</Text>
                        <Text>DISNEY+</Text>
                        <Text>MARVELHQ.COM</Text>
                        <Text>REDEEM DIGITAL</Text>
                    </VStack>
                </HStack>
            </GridItem>
            {/* 3번쨰 푸터 */}
            <GridItem w="full">
                <VStack spacing={6}>
                    <HStack spacing={3}>
                        <Box w="16">
                            <Image src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" alt="footer image" />
                        </Box>
                        <VStack alignItems="flex-start" spacing="0">
                            <Text  fontWeight="600" color="gray.400" >MARVEL INSIDER</Text>
                            <Text  color="gray.400" >Lorem ipsum dolor sit amet.</Text>
                        </VStack>
                    </HStack>
                    <HStack spacing={3}>
                        <Box w="16">
                            <Image src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png" alt="footer image" />
                        </Box>
                        <VStack alignItems="flex-start" spacing="0">
                            <Text  fontWeight="600" color="gray.400" >MARVEL UNLIMITED</Text>
                            <Text  color="gray.400" >Lorem ipsum dolor sit amet.</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </GridItem>
            {/* 4번쨰 푸터 */}
            <GridItem w="full">
                <VStack alignContent="flex-start">
                    <Text fontWeight={600} color="white">FOLLOW MARVEL</Text>
                    <Grid color="gray.500" templateColumns={"repeat(4, 1fr)"} gap={10} fontSize={20}>
                        <GridItem>
                        <Box>
                            <AiFillFacebook />
                        </Box>
                        </GridItem>
                        <GridItem>
                        <Box>
                            <AiFillTwitterSquare />
                        </Box>
                        </GridItem>
                        <GridItem>
                        <Box>
                            <FaSnapchatGhost />
                        </Box>
                        </GridItem>
                        <GridItem>
                        <Box>
                            <FaPinterestSquare />
                        </Box>
                        </GridItem>
                        <GridItem>
                        <Box>
                            <FaTumblr />
                        </Box>
                        </GridItem>
                        <GridItem>
                        <Box>
                            <AiFillYoutube />
                        </Box>
                        </GridItem>
                        <GridItem>
                        <Box>
                            <AiFillInstagram />
                        </Box>
                        </GridItem>
                    </Grid>
                </VStack>
            </GridItem>

        </Grid>
    </HStack>
}