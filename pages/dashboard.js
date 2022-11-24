import { useRef, useEffect } from "react";
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
    Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import Header from '../components/Header'
import StatCardModal from "../components/StatCardModal"
import StatCard from "../components/StatCard"
import RevenueStatCard from "../components/RevenueStatCard";
import BarChart1 from "../components/BarChart1"
import BarChart2 from "../components/BarChart2"
import LineChart1 from "../components/LineChart1"
import {AiOutlineHome, AiOutlineTeam, AiOutlineUsergroupAdd, AiOutlineDollarCircle} from "react-icons/ai"




export default function Dashboard () {    

    return(
        <Stack>
            <Header/>
            <VStack spacing="2">

             
                    <HStack spacing="2" margin="1" >
                        <Center>
                        
                            <StatCardModal icon={AiOutlineHome} title="Branches" amount="3" />

                            <RevenueStatCard icon={AiOutlineDollarCircle} title="Today's Revenue" amount="500,000"/>

                            <StatCard gradient='linear(to-tr, #45A149, #64BA68)' icon={AiOutlineTeam} title="Today's Customers" amount="35"/>

                            <StatCard gradient='linear(to-tr, #D91D61, #EA3D78)' icon={AiOutlineUsergroupAdd} title="New Customers" amount="+11"/>

                        </Center>
                    </HStack>
               
                    <HStack  padding="2" >
                        <Center>

                        <BarChart1/>

                        <LineChart1/>

                        <BarChart2/>           

                        </Center>
                    </HStack>

            </VStack>
        </Stack>

        
    )
}