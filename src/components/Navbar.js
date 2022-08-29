import { Plus } from "../assets/Plus";
import { Flex, Box, Text, Tooltip} from "@chakra-ui/react";
import { Location } from "../assets/Location";

export const Navbar = ({data})=>{
    return (
        <Flex position="fixed" w="100%" p="20px 4%">
            <Tooltip label="add city"><Box cursor={"pointer"}><Plus/></Box></Tooltip>
            <Box m="auto">
                <Box w="fit-content">
                    <Text fontSize={'24px'} color={'white'}>{data?data.data.name:""}</Text>
                    <Flex w={'100%'}><Box m={'auto'}><Location/></Box></Flex>
                </Box>
            </Box>
        </Flex>
    )
}