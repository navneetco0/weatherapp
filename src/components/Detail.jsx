import { Box, Flex, Text } from '@chakra-ui/react'

export const Detail = ({ data }) => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.4)"
      p="20px"
      m="20px 10%"
      borderRadius={'20px'}
      h="fit-content"
    >
      <Flex justifyContent={'space-between'}>
        <Text>Sunrise {new Date(data?.daily[0].sunrise * 1000).toString().slice(16, 24)} </Text>
        <Text>Sunset {new Date(data?.daily[0].sunset * 1000).toString().slice(16, 24)}</Text>
      </Flex>
      <Flex m="5px 0px" gap="2%" justifyContent={'space-between'}>
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
      <Flex m="5px 0px" gap="2%" justifyContent={'space-between'}>
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
