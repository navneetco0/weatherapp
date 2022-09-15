import { Box, Flex, Text } from '@chakra-ui/react'

export const Detail = ({ data }) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.4)"
      p="20px"
      m="20px 10%"
      borderRadius={'20px'}
    >
      <Flex justifyContent={'space-between'}>
        <Text>Sunrise </Text>
        <Text>Sunset</Text>
      </Flex>
      <Flex gap="2%" justifyContent={'space-between'}>
        <Box w="49%">
          <Text fontSize="12px" color="rgba(255, 255, 255, 0.6)">
            Real feel
          </Text>
          <Text>
            {new Date().getHours() < 6 || new Date().getHours() > 19
              ? Math.round(data?.daily[0].feels_like.night)
              : new Date().getHours()<9
              ?Math.round(data?.daily[0].feels_like.morn)
              : new Date().getHours()<17
              ?Math.round(data?.daily[0].feels_like.day)
              : new Date().getHours()<19
              ?Math.round(data?.daily[0].feels_like.evening)
              :''}
              °C
          </Text>
        </Box>
        <Box w="49%">
          <Text fontSize="12px" color="rgba(255, 255, 255, 0.6)">
            Humidity
          </Text>
          <Text>{data?.daily[0].humidity}%</Text>
        </Box>
      </Flex>
      <Flex gap="2%" justifyContent={'space-between'}>
        <Box w="49%">
          <Text fontSize="12px" color="rgba(255, 255, 255, 0.6)">
            Pressure
          </Text>
          <Text>{data?.daily[0].pressure}mbar</Text>
        </Box>
        <Box w="49%">
          <Text fontSize="12px" color="rgba(255, 255, 255, 0.6)">
            Wind speed
          </Text>
          <Text>{data?.daily[0].wind_speed}km/h</Text>
        </Box>
      </Flex>
    </Box>
  )
}
