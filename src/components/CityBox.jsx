import { Box, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

export const CityBox = ({ data }) => {
  useEffect(()=>{
    console.log('box',data)
  },[])
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
            <Text color="black" key={index}>{Element.split("'").join('')}</Text>
          ))}
      </Box>
    </>
  )
}
