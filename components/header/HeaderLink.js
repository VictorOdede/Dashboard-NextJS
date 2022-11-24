import { Box } from "@chakra-ui/react"
import Link from 'next/link';

const HeaderLink = (props) => {
    return (
        <Box>
            <Link href={props.href}>
                  <a>
                      <Box as='button' fontSize='lg' fontWeight='semibold' color='#000000'  _hover={{color:'#1C75E9'}}>{props.name}</Box>
                  </a>
            </Link>

        </Box>
    )
}

export default HeaderLink;