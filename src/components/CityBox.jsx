import { Box, Text } from '@chakra-ui/react'

export const CityBox = ({ data }) => {
  return (
    <>
      <Box
        pos={'absolute'}
        p={data ? '60px 20px 20px' : ''}
        w="100%"
        maxH="100vh"
        h={data ? 'initial' : '0px'}
        transition={data ? '2s' : '0.1s'}
        left="0"
        overflowX={'hidden'}
        bg="white"
        top="0px"
        zIndex={'-1'}
        borderRadius="20px 20px"
      >
        {data &&
          data.map((Element, index) => (
            <Text color="black" key={index} cursor="pointer" _hover={{bg:'rgba(0, 0, 255, 0.1)', p:'0px 5px'}}>{Element.split("'").join('')}</Text>
          ))}
      </Box>
    </>
  )
}
