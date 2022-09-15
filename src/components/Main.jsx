import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { Detail } from "./Detail"
import { HourFore } from "./HourFore"

export const Main = ({Data}) => {
  const weakDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  return (
    <Box w={['100%']}>
        <Box>
          <Flex w="fit-content" m={['auto']}>
            <Text fontSize="75px">{Data?.data?.data?.hourly[0].temp} </Text>
            <Text>°C</Text>
          </Flex>
          <Text textAlign={'center'} fontSize="25px">
            {Data?.data?.data?.hourly[0].weather[0].main}
          </Text>
          <Box p={['10px 10%', '40px']}>
            <Flex justifyContent={'space-between'}>
              <Text>Today: {Data?.data?.data?.daily[0].weather[0].main}</Text>{' '}
              <Text>
                {Math.round(Data?.data?.data?.daily[0].temp.max)}°/
                {Math.round(Data?.data?.data?.daily[0].temp.min)}°
              </Text>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Text>
                Tomorrow: {Data?.data?.data?.daily[1].weather[0].main}
              </Text>{' '}
              <Text>
                {Math.round(Data?.data?.data?.daily[1].temp.max)}°/
                {Math.round(Data?.data?.data?.daily[1].temp.min)}°
              </Text>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Text>{weakDay[new Date().getDay() + 1]}: {Data?.data?.data?.daily[2].weather[0].main}</Text>{' '}
              <Text>
                {Math.round(Data?.data?.data?.daily[2].temp.max)}°/
                {Math.round(Data?.data?.data?.daily[2].temp.min)}°{' '}
              </Text>
            </Flex>
          </Box>
          {/* <Flex p="5px" bg="rgba(255, 255, 255, 0.5)" borderRadius={"20px"} w="fit-content" alignItems="center"><Leaf/> <Text>AQl </Text></Flex> */}
        </Box>
        {/* <Show below="480px"> */}
            <Button m="10px 10%" borderRadius={'40px'} w="80%" bg="rgba(255, 255, 255, 0.3)" _hover={{bg:"rgba(255, 255, 255, 0.4)"}} _active={{bg:"rgba(255, 255, 255, 0.5)"}}>7-days forecast</Button>
        {/* </Show> */}
        <HourFore data={Data?.data?.data?.hourly}/>
        <Detail data={Data?.data?.data}/>
    </Box>
  )
}
