import {
    Box,
    VStack,
    Icon,
    Text,
    Button
} from '@chakra-ui/react'

import {AiOutlineUpload} from 'react-icons/ai'
import {useRef} from 'react'


const UploadPage = () => {

    const thisDoc = useRef()

    const buttonClick = () => {
        console.log(`This doc is called: ${thisDoc.current.files[0].name}`)
        console.log(`This is the Metadadta: ${thisDoc.current.files[0].toString()}`)
    }

    return(
        <VStack spacing={6} >
            <Text marginTop="5" fontWeight="bold" fontSize={24} color="gray.500" >
                        UPLOAD YOUR M-PESA STATEMENT:
                    </Text>
            <Box as='button' padding="10" marginTop = "10" borderWidth='1px' w='400px' h='400px' boxShadow="sm" borderRadius='lg' overflow='hidden' _hover={{boxShadow: 'lg'}} _active={{boxShadow: 'sm'}} >
                <VStack>
                    <Icon as={AiOutlineUpload} w={72} h={72} color="gray.300" />
                </VStack>
                <input type="file" ref={thisDoc}/>
            </Box>

            <Button onClick={buttonClick} background="blue.300" color="white" boxShadow="sm" _hover={{boxShadow:"lg"}} _active={{background:"blue.500", boxShadow:"sm"}}>
                UPLOAD
            </Button>
            
        </VStack>
    )
}

export default UploadPage;