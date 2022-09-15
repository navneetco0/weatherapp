import { Box, Flex } from "@chakra-ui/react"

export const HourFore = ({data})=>{
    // console.log(data)
    const hour = new Date().getHours();
    return (
        <Flex className="hourForecast" m={['10px 0px']} overflowX="scroll" gap="20px">
          {data&&data.map((Element,index)=><Box textAlign={'center'} ml={index===0?"10%":''} mr={index===data.length-1?"10%":''}>
            {index===0?"Now":hour+index===24?new Date().getDate()+1+"/"+(new Date().getMonth()+1):hour+index}
          </Box>)}
        </Flex>
    )
}