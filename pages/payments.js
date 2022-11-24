import { 
    Badge,
    Box,
    Image, 
    Flex, 
    Spacer, 
    Table, 
    Thead, 
    Tbody, 
    Tfoot, 
    Tr, 
    Th, 
    Td, 
    TableCaption, 
    TableContainer, 
    Divider, 
    HStack,
    VStack, 
    Stack, 
    Icon, 
    Button, 
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'
import { AiOutlineMenu, AiOutlineScan, AiOutlineInsertRowAbove } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

const Payments = () => {

    const { data, error } = useSWR('/api/data', fetcher)


    return(

        <Stack>


        </Stack>

    )

}

export default Payments