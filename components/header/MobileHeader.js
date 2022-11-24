
import Link from 'next/link';
import { 
    Box, 
    HStack,
    VStack,
    Divider, 
    Container, 
    Stack,
    Flex,
    Image,
    Spacer,
    Button,
    Icon,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useDisclosure
 } from '@chakra-ui/react'
 import { AiOutlineMenu, AiOutlineScan, AiOutlineInsertRowAbove } from 'react-icons/ai'

 

const MobileHeader = () => {

  const { isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Stack direction='column'>
            <Flex
            boxShadow='md'
            height='96px'
            > 
                < Box pos='relative' top='-10px' marginLeft='15px' maxW='180px'>
                    <Link href='/'>
                    <a>
                    
                        <Image src='/nambari-logo.png'  alt='Nambari logo' />
                
                    </a>
                    </Link>
                </Box>

                <Spacer/>
                
                <Box marginRight='24px'>
                    <Button 
                    pos='relative' top='30px'
                    color='#1C75E9' 
                    bgColor='white' 
                    _active={{ boxShadow: 'lg' }} 
                    onClick={onOpen}>
                        <Icon w='35px' h='35px' as={AiOutlineMenu} />
                    </Button>

                    <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    >
                        <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton w='30px' h='30px' color='#1C75E9'
                                />
                               
                                <DrawerHeader>
                                    < Box
                                    pos='relative'
                                    left='-10px'
                                    top='-30px'   
                                    maxW='180px'>
                                        <Link href='/'>
                                        <a>
                                        
                                            <Image src='/nambari-logo.png'  alt='Nambari logo' />
                                    
                                        </a>
                                        </Link>
                                    </Box>
                                </DrawerHeader>
                            
                                <DrawerBody pos='relative' top='-30px'>
                                <Stack  direction='column' spacing='2.5' >

                                <Divider/>

                                    <Box>
                                        <Link href='/'>
                                            <a>
                                                <Box as='button' fontSize='2xl' fontWeight='normal' color='#0' _hover={{color:'#1C75E9'}}>
                                                    Home
                                                </Box>
                                            </a>
                                        </Link>
                                    </Box>

                                    <Divider/>

                                    <Box>
                                        <Link href='/about'>
                                            <a>
                                                <Box as='button' fontSize='2xl' fontWeight='normal' color='#0' _hover={{color:'#1C75E9'}}>
                                                    About Us
                                                </Box>
                                            </a>
                                        </Link>
                                    </Box>

                                    <Divider/>

                                    <Box>
                                        <Link href='/contact'>
                                            <a>
                                                <Box as='button' fontSize='2xl' fontWeight='normal' color='#0' _hover={{color:'#1C75E9'}}>
                                                    Contact
                                                </Box>
                                            </a>
                                        </Link>
                                    </Box>

                                    <Divider/>


                                    <Box>
                                        <Link href="mailto:support@lipa.info?subject=Requesting a demo of Nambari">
                                            <a>
                                                <Box as='button' fontSize='2xl' fontWeight='normal' color='#0' _hover={{color:'#1C75E9'}}>
                                                    Schedule a demo
                                                </Box>      
                                            </a>
                                        </Link>
                                    </Box>

                                    

                                    <Divider/>

                                    <Box>
                                        <Link href='https://lipa-dashboard.vercel.app/'>
                                            <a>
                                                <Box as='button' fontSize='2xl' fontWeight='normal' color='#000000' _hover={{color:'#1C75E9'}}>
                                                    Sign In
                                                </Box>
                                            </a>
                                        </Link>
                                    </Box>


                                    <Divider/>

                                </Stack>

                                </DrawerBody>

                                <Divider />

                                <DrawerFooter>
                                    
                                    <Stack align='center' >
                                   
                                        <Box color='#808080' fontSize='lg' fontWeight='normal'>
                                            Nambari © 2022.
                                        </Box>
                                    </Stack>

                                </DrawerFooter>
                        </DrawerContent>
                    </Drawer> 
                </Box>
            </Flex>
        </Stack>
    )
}

export default MobileHeader;
