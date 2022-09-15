import { Box, Flex, Text } from "@chakra-ui/react"

export const Detail = ({data})=>{
    
    return (
        <Box bg="rgba(255, 255, 255, 0.4)" p="20px" m="20px 10%" borderRadius={'20px'}>
          <Flex justifyContent={'space-between'}>
            <Text>Sunrise </Text>
            <Text>Sunset</Text>
          </Flex>
          <Flex gap="2%" justifyContent={'space-between'}>
            <Box w="49%">
                <Text>Real feel</Text>
            </Box>
            <Box w="49%">
                <Text>Humidity</Text>
            </Box>
          </Flex>
          <Flex gap="2%" justifyContent={'space-between'}>
            <Box w="49%">
                <Text>Chance of Rain</Text>
            </Box>
            <Box w="49%">
                <Text>Pressure</Text>
            </Box>
          </Flex>
          <Flex gap="2%" justifyContent={'space-between'}>
            <Box w="49%">
                <Text>Wild speed</Text>
            </Box>
            <Box w="49%">
                <Text>UV index</Text>
            </Box>
          </Flex>
        </Box>
    )
}