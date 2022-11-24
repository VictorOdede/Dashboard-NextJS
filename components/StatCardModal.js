
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
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Select,
} from "@chakra-ui/react";

const StatCardModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(   
        <Stack>               
            <Box margin="4"
                as="button"
                onClick={onOpen} 
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
                            bgGradient='linear(to-tr, #1E1E1F, #3E3E46)'>
                                <Center>
                                    <Icon marginTop="4.5px" w="40px" h="40px" as={props.icon} color="#FFFFFF" />
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
                        

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader>Select Branch</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Select  placeholder='All branches'>
                                <option value='option1'>Branch 1</option>
                                <option value='option2'>Branch 2</option>
                                <option value='option3'>Branch 3</option>
                                </Select>
                               
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                                </Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>
                </Stack>
                        
    )
}

export default StatCardModal;