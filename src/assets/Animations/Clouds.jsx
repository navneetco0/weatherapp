import { Box } from "@chakra-ui/react"
import { Cloud } from "../Cloud"

export const Clouds = ()=>{
    return (
        <Box w="100%" overflow={'hidden'}>
            <Box pos="absolute"><Cloud/></Box>
            <Box pos="absolute"><Cloud/></Box>
            <Box pos="absolute"><Cloud/></Box>
            <Box pos="absolute"><Cloud/></Box>
            <Box pos="absolute"><Cloud/></Box>
            <Box pos="absolute"><Cloud/></Box>
        </Box>
    )
}