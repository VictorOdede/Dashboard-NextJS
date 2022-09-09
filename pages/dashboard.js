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
} from "@chakra-ui/react";
import Header from '../components/Header'
import StatCardModal from "../components/StatCardModal"
import StatCard from "../components/StatCard"
import RevenueStatCard from "../components/RevenueStatCard";
import {AiOutlineHome, AiOutlineTeam, AiOutlineUsergroupAdd, AiOutlineDollarCircle} from "react-icons/ai"

export default function Dashboard () {
    return(
        <Stack>
            <Header/>
            <VStack spacing="2">

                <Center>
                    <HStack spacing="2" margin="1" >
                        <Center>
                        
                            <StatCardModal color="blue.300" icon={AiOutlineHome} title="Branches" amount="3" />

                            <RevenueStatCard color="orange.300" icon={AiOutlineDollarCircle} title="Today's Revenue" amount="5,500,000"/>

                            <StatCard color="red.400" icon={AiOutlineTeam} title="Today's Customers" amount="35"/>

                            <StatCard color="green.300" icon={AiOutlineUsergroupAdd} title="New Customers" amount="+11"/>

                        </Center>
                    </HStack>
                </Center>


                <Center>
                    <HStack  margin="1" >
                        <Center>

                        <Box margin="4" padding="1" marginTop = "10" borderWidth='1px' w='640px' h='400px' boxShadow="sm" borderRadius='2xl' overflow='hidden' >
                            <Text>
                                Stat 01
                            </Text>
                        </Box>

                        <Box margin="4" padding="1" marginTop = "10" borderWidth='1px' w='640px' h='400px' boxShadow="sm" borderRadius='2xl' overflow='hidden' >
                            <Text>
                                Stat 02
                            </Text>
                        </Box>         

                        </Center>
                    </HStack>

                </Center>


                <Center>
                    <HStack  margin="1" >
                            <Center>

                            <Box margin="4" padding="1" marginTop = "10" borderWidth='1px' w='640px' h='400px' boxShadow="sm" borderRadius='2xl' overflow='hidden' >
                                <Text>
                                    Stat 01
                                </Text>
                            </Box>

                            <Box margin="4" padding="1" marginTop = "10" borderWidth='1px' w='640px' h='400px' boxShadow="sm" borderRadius='2xl' overflow='hidden' >
                                <Text>
                                    Stat 02
                                </Text>
                            </Box>         

                            </Center>
                    </HStack>

                </Center>

            </VStack>
        </Stack>

        
    )
}