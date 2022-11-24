import { useState, useEffect } from "react";
import { 
    Button,
    Box,
    Stack,
    HStack,
    VStack,
    Input,
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
    useDisclosure
} from "@chakra-ui/react";
import Header from '../components/header/Header'
import MobileHeader from '../components/header/MobileHeader'
import Footer from '../components/footer/Footer'
import MobileFooter from '../components/footer/MobileFooter'
import StatCardModal from "../components/StatCardModal"
import StatCard from "../components/StatCard"
import RevenueStatCard from "../components/RevenueStatCard";
import BarChart1 from "../components/BarChart1"
import BarChart2 from "../components/BarChart2"
import LineChart1 from "../components/LineChart1"
import {AiOutlineHome, AiOutlineTeam, AiOutlineUsergroupAdd, AiOutlineDollarCircle} from "react-icons/ai"
import DateCard from "../components/DateCard";
import useSWR from 'swr'
import axios from 'axios'
import { format } from 'date-fns'



export default function Dashboard () {    

    const [mobile, setMobile] = useState(true)
    const [startDate, setStartDate] = useState(format(new Date(2022, 9, 28), 'yyyy-MM-dd'))
    const { isOpen, onOpen, onClose} = useDisclosure()
    const [stats, setStats] = useState({})    

    useEffect(()=>{
        // Configure responsive layout based on screen width
        let w = window.innerWidth;
        if(w < 769) {
        setMobile(true)
        } else{
        setMobile(false)
        }
    },[])


    useEffect( () => { 
        // fetch data during before new render when date input changes
        axios.post('http://localhost:8080/api/dashboard/fd2cfc29-62b5-48d7-9d4c-1faa592a6768', {date: startDate})
        .then((res) => {
            setStats(res.data)
            console.log(res.data)
            })
  
    }, [startDate])


    const onSubmit = async(data) => 
    {
        // trigger re-render when the date changes
        const { date } = data
        // console.log(date)
        setStartDate(new Date(date))
        onClose()
    }

    
    return(
        <Stack>

            { mobile ? <MobileHeader/> : <Header/> }

            <VStack paddingTop="30px" spacing="2">
                         
                <DateCard onOpen={onOpen} onClose={onClose} isOpen={isOpen} startDate={format(new Date(), 'EEEE, do MMM yyyy')} submit={onSubmit} />

                  
                    <Stack direction={{base:"column", md:"row"}} spacing="2" margin="1" >

                        <StatCardModal icon={AiOutlineHome} title="Branches" amount={stats.branches} />

                        <RevenueStatCard icon={AiOutlineDollarCircle} title="Total Revenue" amount={stats.revenue}/>

                        <StatCard gradient='linear(to-tr, #45A149, #64BA68)' icon={AiOutlineTeam} title="Total Customers" amount={stats.customers}/>

                        {/* <StatCard gradient='linear(to-tr, #D91D61, #EA3D78)' icon={AiOutlineUsergroupAdd} title="New Customers" amount="+11"/> */}
    
                    </Stack>

               
                    <Stack direction={{base:"column", md:"row"}}  padding="2" >
                       

                        <BarChart1/>

                        <LineChart1/>

                        <BarChart2/> 

                   
                    </Stack>

            </VStack>

            { mobile ? <MobileFooter/> : <Footer/> }

        </Stack>

        
    )
}