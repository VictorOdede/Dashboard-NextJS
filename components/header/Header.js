import Link from 'next/link';
import { 
    Box, 
    HStack, 
    Container, 
    Stack,
    Flex,
    Image,
    Spacer,
    Button,
    Center
} from '@chakra-ui/react';
import HeaderLink from './HeaderLink';


const Header = () => {
    return (
        <Stack>
            <Flex
                bgColor='#FFFFFF'
              height='96px'
              >
                <Center>
                    <Box>
                        <Link href='/'>
                        <a>
                            < Box marginLeft='60px' maxW='180'>
                                <Image src='/nambari-logo.png' alt='Nambari logo' />
                            </Box>
                        </a>
                        </Link>
                    </Box>         
          

                    <Box
                        marginLeft="80px"  
                        w="480px"
                        padding="2">

                        <HStack spacing='40px' align='flex-end' >

                            <HeaderLink href="/" name="Home" />
                            <HeaderLink href="/about" name="About"/>
                            <HeaderLink href="/contact" name="Contact" />
                            

                        </HStack>
                    </Box>


                    <Box 
                        pos='relative'
                        left='400px'>

                    <HStack spacing='40px'>
                        <HeaderLink href="https://lipa-dashboard.vercel.app/" name="Sign In" />

                        <Link href="mailto:support@nambari.africa?subject=Requesting a demo for Nambari" >
                            <a>
                                <Button w='180px' height='50px' fontSize='md' fontWeight='semibold' color='white' bgColor='#1C75E9'  _hover={{bgColor:'blue.300', boxShadow: 'md'}}
                            _active={{ boxShadow: 'lg' }}>
                                Schedule a demo
                                </Button>
                            </a>
                        </Link>
                        
                    </HStack>
                    </Box>`  
              </Center> 
        </Flex>
        </Stack>
    )
}

export default Header;