import { 
    Button,
    Box,
    Stack,
    HStack,
    VStack,
    Text,
    Input, 
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
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'


const DateCard = (props) =>  {
    
    // const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm()

    
    
    return(
        <Flex>

            <Box
                as="button"
                onClick={props.onOpen} 
                height={{base:'50px', md:'50px'}} 
                variant='outline' 
                fontSize='3xl' 
                fontWeight='thin' 
                color='#1C75E9'
                borderWidth="1px"
                borderColor="#1C75E9"
                borderRadius="xl"
                overflow='hidden'
                padding='10px'
                
                 
                _hover={{ color:'#D3D3D3', borderColor:'#D3D3D3'}}
                _active={{ color: '#F2F2F2', borderColor:'#F2F2F2' }}
                marginBottom="30px">

                <Text position='relative' bottom='10px'  >
                {props.startDate}
                </Text>
                    
            </Box>

     
            <Modal isOpen={props.isOpen} onClose={props.onClose}> 
                <ModalOverlay />
                <ModalContent w={{base:"320px", md:"360px"}}>

                    <ModalHeader>
                        Select Date
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>

                        <Input
                            {...register('date')}
                            focusBorderColor='#1C75E9'
                            w={{base:"280px", md: "300px"}}
                            type="date"  
                        />
                        
                    </ModalBody>

                    <ModalFooter>

                        <Button colorScheme='blue' w='90px' mr={3} onClick={handleSubmit( props.submit )}>
                            OK
                        </Button>

                    </ModalFooter>

                </ModalContent>
            </Modal>
        
        </Flex>
    )
}

export default DateCard;