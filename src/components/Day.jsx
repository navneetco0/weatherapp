import { Box, Flex, Text } from '@chakra-ui/react'

export const Day = ({ data, Icons, weakDay }) => {
  return (
    <Flex gap="20px" mt="50px">
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
            <Box w="fit-content" h="40px" m={'5px auto'}>{Icons[Element.weather[0].main]}</Box>
            <Text>{Element.weather[0].main}</Text>
          </Box>
        ))}
    </Flex>
  )
}
