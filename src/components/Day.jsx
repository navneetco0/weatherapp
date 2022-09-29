import { Box, Flex, Text } from '@chakra-ui/react'

export const Day = ({ data, Icons, weakDay, bg }) => {
  return (
    <Flex gap="20px" mt="50px" bg={bg?"blue":""} w="100%" overflowX="scroll" className="hourForecast" css={{
      '&::-webkit-scrollbar-thumb': {
        background: '#A0A0A0',
        borderRadius: '24px',
        width:['2px', '0px']
      },
    }}>
      {data &&
        data.map((Element, index) => (
          <Box key={index} textAlign="center">
            <Text>
              {index === 0
                ? 'Today'
                : index === 1
                ? 'Tomorrow'
                : weakDay[(new Date().getDay() + index - 1) % 7]}
            </Text>
            <Flex gap="5px">
                <Text color={'rgba(255, 0, 0, 0.8)'} fontWeight="bold" > {Math.round(Element.temp.max)+'°'} </Text>
                <Text color="white" fontWeight={'bold'} > {Math.round(Element.temp.min)+'°'} </Text>
            </Flex>
            <Box h="40px" m={'5px auto'} w="16px" color={'white'}>{Icons[Element.weather[0].main]}</Box>
            <Text>{Element.weather[0].main}</Text>
          </Box>
        ))}
    </Flex>
  )
}
