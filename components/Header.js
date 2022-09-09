import * as React from 'react'
import Link from 'next/link';
import { 
    Box, 
    HStack, 
    Container, 
    Stack,
    Flex,
    Image,
    Spacer,
    Button
 } from '@chakra-ui/react'

// type Props = {
//     data: string
//   }


const Header = () => {
    return (
        <Stack>
            <Flex align="center" 
              boxShadow='md'
              height='96px'
              >
            <Link href='/'>
                <a>
                    < Box marginLeft='24px' maxW='180'>
                        <Image src='/lipa.png' alt='Lipa logo' />
                    </Box>
                </a>
            </Link>
            <Spacer/>

              <HStack spacing='48px' marginRight='36px'>

                <Link href="https://lipa-dashboard.vercel.app/">
                  <a>
                      <Box as='button' fontSize='lg' fontWeight='semibold' color='#18216D'  _hover={{color:'blue.300'}}>DASHBOARD</Box>
                  </a>
                </Link>

                <Link href="https://lipa-dashboard.vercel.app/">
                  <a>
                      <Box as='button' fontSize='lg' fontWeight='semibold' color='#18216D'  _hover={{color:'blue.300'}}>TABLES</Box>
                  </a>
                </Link> 

                <Link href='/schedule-demo' >
                  <a>
                      <Button fontSize='md' fontWeight='semibold' color='white' bgColor='#18216D'  _hover={{bgColor:'blue.300', boxShadow: 'md'}}
                    _active={{ boxShadow: 'lg' }}>
                      SIGN OUT
                      </Button>
                  </a>
                </Link>
              </HStack>
          
        </Flex>
        </Stack>
    )
}

export default Header