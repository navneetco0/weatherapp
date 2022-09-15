import { Box, Flex, Text } from '@chakra-ui/react';
import { Location } from "../assets/Location"

export const HourFore = ({ data, Icons }) => {
  const hour = new Date().getHours()
  return (
    <Flex
      w="100%"
      className="hourForecast"
      m={['10px 0px']}
      overflowX="scroll"
      gap="20px"
    >
      {data &&
        data.map((Element, index) => (
          <Box
          key={index}
            textAlign={'center'}
            ml={index === 0 ? '10%' : ''}
            mr={index === data.length - 1 ? '10%' : ''}
          >
           <Text>
            {index === 0
                ? 'Now'
                : hour + index === 24
                ? new Date().getDate() + 1 + '/' + (new Date().getMonth() + 1)
                : hour + index === 48
                ? new Date().getDate() + 2 + '/' + (new Date().getMonth() + 1)
                : hour + index > 48
                ? ((hour + index) % 48).toString().length===1?`0${(hour+index)%48}:00`:`${((hour + index)%48)}:00`
                : hour + index > 24
                ? ((hour + index) % 24).toString().length===1?`0${(hour+index)%24}:00`:`${((hour + index)%24)}:00`
                : (hour + index).toString().length===1?`0${hour+index}:00`:`${(hour + index)}:00`}
           </Text>
           <Text>{Math.round(Element.temp)}°</Text>
           <Box w="fit-content" m={'5px auto'}>{Icons[Element.weather[0].main]}</Box>
           <Flex alignItems={'center'} fontSize='12px'><Box w="fit-content" h="fit-content" transform={`rotate(${Element.wind_deg}deg)`}><Location/></Box> {Element.wind_speed}km/h</Flex>
          </Box>
        ))}
    </Flex>
  )
}
