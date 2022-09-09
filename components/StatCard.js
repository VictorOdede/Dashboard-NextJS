import { 
    Button,
    Box,
    Stack,
    HStack,
    VStack,
    Text, 
    Center,
    Flex,
    Divider,
    Icon,
    
} from "@chakra-ui/react";
import {AiFillHome, AiFillClockCircle} from 'react-icons/ai'

const StatCard = (props) => {
    // props are: Color, icon, title, amount
    return(
        <Stack>
            <Box margin="4" 
                borderWidth='1px'
                padding="15px" 
                w='300px' 
                h='120px' 
                boxShadow="md" 
                borderRadius='2xl' 
                overflow='visible' 
                _hover={{boxShadow: 'lg'}} 
                _active={{boxShadow: 'sm'}}>
                    <Stack direction="row" >
                        <Box
                            padding="8.5px"
                            pos="relative"
                            bottom="35px"
                            w="70px"
                            h="70px"
                            borderWidth="1px"
                            boxShadow="lg"
                            borderRadius="2xl"
                            backgroundColor={props.color}>
                                <Center>
                                    <Icon marginTop="4.5px" w="40px" h="40px" as={props.icon} />
                                </Center>
                        </Box>

                        <Box w="200px" alignContent="right" >
                            <VStack spacing="3px" align="end" >
                                <Text fontWeight="light" fontSize="lg">
                                        {props.title}
                                </Text>

                                <Text fontSize="3xl" fontWeight="bold" marginRight="15px">
                                    {props.amount}
                                </Text>
                             
                            </VStack>
                        </Box>
                    </Stack>
                    
            </Box>
            
        </Stack>
    )
}

export default StatCard;