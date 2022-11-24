import { 
    Flex,
    Icon,
    Image,
    Box,
    Text, 
    Stack, 
    HStack,
    VStack,
    Center} from "@chakra-ui/react";
import Link from 'next/link';
import {AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"
import FooterLink from './FooterLink'


const Footer = () => {
    return(
        <Stack>
            <Flex overflow='hidden' padding='60px' bgColor='#000000'>
                <Center>
                <VStack>
                <Box>
                    <HStack spacing='40px'>
                        

                        <Box pos='relative' bottom='48px' w='480px'>

                            <VStack>
                                <Box 
                                w='180px'
                                
                                 >
                                    <Link href='/'>
                                        <a>
                                            <Box pos='relative' right='10px'>
                                                <Image src='/nambari-logo-white.png' alt='Lipa logo' />
                                                
                                            </Box>
                                        </a>
                                    </Link>
                                </Box>

                                <Box pos='relative' bottom='30px' >
                                    <HStack spacing='20px'>
                                        <Link href='www.facebook.com'>
                                            <a>
                                                <Box color='#FFFFFF'  >
                                                    <Icon w="30px" h='30px' as={AiFillFacebook} />
                                                </Box>
                                            </a>
                                        </Link>

                                        <Link href='www.instagram.com'>
                                            <a>
                                                <Box color='#FFFFFF'  >
                                                    <Icon w="30px" h='30px' as={AiFillInstagram} />
                                                </Box>
                                            </a>
                                        </Link>

                                        <Link href='www.twitter.com'>
                                            <a>
                                                <Box color='#FFFFFF'  >
                                                    <Icon w="30px" h='30px' as={AiFillTwitterSquare} />
                                                </Box>
                                            </a>
                                        </Link>

                                       

                                        <Link href='https://www.linkedin.com/company/nambari/'>
                                            <a>
                                                <Box color='#FFFFFF'  >
                                                    <Icon w="30px" h='30px' as={AiFillLinkedin} />
                                                </Box>
                                            </a>
                                        </Link>

                                        
                                    </HStack>
                                </Box>

                                

                                <Box
                                    color='#808080'
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    w='180px'>
                                    Nairobi, Kenya
                                </Box>

                                <Box
                                    color='#808080'
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    w='180px'>
                                    +254 111951100
                                </Box>

                                <Box
                                    color='#808080'
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    w='180px'>
                                    support@lipa.info
                                </Box>
                              
                            </VStack>
                        </Box>


                        <Box pos='relative' bottom='30px' w='480px' >
                            <VStack>

                                <Box
                                    color='#808080'
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    w='160px'
                                 >
                                    Company
                                </Box>

                                <Box
                                    color='#808080'
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    w='160px'
                                 >
                                    <FooterLink href="/" name="Home"/>
                                </Box>

                                <Box
                                    color='#808080'
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    w='160px'
                                 >
                                    <FooterLink href="/about" name="About Us"/>
                                </Box>


                                <Box
                                    color='#808080'
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    w='160px'
                                 >
                                    <FooterLink href="/contact" name="Contact"/>
                                </Box>                           
                                
                            </VStack>
                        </Box>
                   

                    <Box
                        w='360px'
                        fontWeight='bold'
                        fontSize={{base:'3xl', md:'5xl'}}
                        letterSpacing='normal'
                        color='#FFFFFF'
                        lineHeight='110%'
                        marginBottom='60px' 
                    >
                        Your 
                        <Text
                            fontWeight='bold'
                            fontSize={{base:'3xl', md:'5xl'}}
                            letterSpacing='normal'
                            color='#1C75E9'
                            lineHeight='110%'
                        >trusted</Text>  business companion.
                    </Box>

                    </HStack>                   
                </Box>
                
                    <Box
                        w='480px'
                        fontWeight='semi-bold'
                        fontSize={{base:'3xl', md:'md'}}
                        letterSpacing='normal'
                        color='#FFFFFF'
                        lineHeight='110%'
                        position='relative'
                        top='30px'
                        
                    >
                        Copyright © 2022 Nambari Inc. All Rights Reserved.
                    </Box>
               

                
                </VStack>
                </Center>

            </Flex>
        </Stack>
    )
}

export default Footer;