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
    StatGroup, } from "@chakra-ui/react"
    import {Bar} from "react-chartjs-2"
    import { Chart as ChartJS } from 'chart.js/auto'
    import {faker} from '@faker-js/faker'


const BarChart1 = (props) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },  
        },
        scales: {
           
            x:
             {
                grid: {
                    display: false,
                    color: '#D3D3D3',
                    tickColor: 'rgba(0,0,0,0)'
                },
                ticks: {
                    color: '#FFFFFF'
                }
            },
            Y: {
                grid: {
                    color: '#D3D3D3',
                    borderColor: 'rgba(0,0,0,0)',
                    borderDash: [5, 4],
                    tickColor: 'rgba(0,0,0,0)'
                },
                ticks: {
                    color: '#FFFFFF'
                }
            },  
          },
      };

      const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100})),
            borderWidth: 4,
            borderRadius: 8,
            borderColor: '#FFFFFF',
            backgroundColor: '#FFFFFF',
            barThickness: 10,                   
          },
        ],
        
      };
    return(
        <Stack>
            <Box margin="4" marginTop = "60px" borderWidth='1px' w={{ md:'420px'}} h={{ md:'330px'}} boxShadow="lg" borderRadius='2xl' overflow='visible'>
                            <VStack spacing = "1" >
                                <Box
                                    margin="4"
                                    pos="relative"
                                    bottom="60px"
                                    bgGradient='linear(to-tr, #1C75E8, #46A0F0)'
                                    padding="2"
                                    borderWidth='1px' 
                                    w={{base:"360px", md:'380px'}} 
                                    h='230px' 
                                    boxShadow="lg"
                                    borderRadius='2xl' 
                                    overflow='hidden'>
                                        <Box padding="10px" pos="relative" top="10px">
                                            <Bar
                                                options={options}
                                                data={data}
                                            />    
                                        </Box>
                                </Box>
                                <Divider  pos="relative"
                                    bottom="50px"/>
                                <Box  pos="relative"
                                    bottom={{md:"60px"}}
                                    w="380px"
                                    padding="15px">
                                    <VStack spacing="3px" align="flex-start" >
                            
                                        <Stat>
                                            <StatLabel>Weekly revenue</StatLabel>
                                            <StatNumber>6,500,670</StatNumber>
                                            <StatHelpText>
                                            <StatArrow type='increase' />
                                            21.4%
                                            </StatHelpText>
                                        </Stat>
                                    </VStack>
                                </Box>
                            </VStack>
            </Box>
        </Stack>
    )
}

export default BarChart1;