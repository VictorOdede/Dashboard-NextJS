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


const MobileFooter = () => {
    return(
        <Stack>
            <Flex overflow='hidden' padding='30px' bgColor='#000000'>
               
                <Stack direction='column' spacing='30px'>

                    {/* ************************************************************** */}

                        <Stack>

                            <Box 
                            w='180px'>
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
                                            <Box color='#FFFFFF'>
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
                                <Stack spacing='5px'>
                                    <Box>
                                        Nairobi, Kenya
                                    </Box>

                                    <Box>
                                        +254 111951100
                                    </Box>

                                    <Box>
                                        support@lipa.info
                                    </Box>
                                </Stack>
                            </Box>
                                
                        </Stack>
                    


                    {/* ************************************************************** */}


                    
                        <Box 
                        
                        w='180px' 
                        fontWeight='semibold'
                        fontSize='lg'>
                            <Stack spacing='10px'>

                                <Box color='#808080'>
                                    Company
                                </Box>

                                <FooterLink href="/" name="Home"/>
                            
                                <FooterLink href="/about" name="About Us"/>

                                <FooterLink href="/contact" name="Contact"/>
                            </Stack>
                        </Box>                           
                                    
                    

                    


                    {/* ************************************************************** */}


                    <Box
                        w='180px'
                        fontWeight='bold'
                        fontSize='3xl'
                        letterSpacing='normal'
                        color='#FFFFFF'
                        lineHeight='110%'
                        marginBottom='60px' 
                    >
                        Your 

                        <Text color='#1C75E9'>
                            trusted </Text>  
                            
                            business companion.
                    </Box>


                    {/* ************************************************************** */}

                    
                    <Box
                        w='240px'
                        fontWeight='semi-bold'
                        fontSize='md'
                        letterSpacing='normal'
                        color='#FFFFFF'
                        lineHeight='110%'
                        
                        
                    >
                        Copyright © 2022 Nambari Inc. All Rights Reserved.
                    </Box>
            

                
                </Stack>
            

            </Flex>
        </Stack>
    )
}

export default MobileFooter;