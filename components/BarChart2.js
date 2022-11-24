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


const BarChart2 = (props) => {
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
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
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
            <Box margin="4" padding="1" marginTop = "10" borderWidth='1px' w='420px' h='330px' boxShadow="lg" borderRadius='2xl' overflow='visible'>
                <VStack spacing = "1" >
                    <Box
                        margin="4"
                        pos="relative"
                        bottom="60px"
                        bgGradient='linear(to-tr, #D91D61, #EA3D78)'
                        padding="2"
                        borderWidth='1px' 
                        w='380px' h='230px' 
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

                    <Divider  
                        pos="relative"
                        bottom="50px" />
                    
                    <Box  
                        pos="relative"
                        bottom="50px"
                        w="380px"
                        padding="2">
                            
                        <VStack spacing="3px" align="flex-start" >
                
                            <Stat>
                                <StatLabel>Weekly Customers</StatLabel>
                                <StatNumber>5,670</StatNumber>
                                <StatHelpText>
                                <StatArrow type='increase' />
                                15.91%
                                </StatHelpText>
                            </Stat>

                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </Stack>
    )
}

export default BarChart2;