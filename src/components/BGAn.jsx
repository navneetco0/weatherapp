import { Box } from "@chakra-ui/react"
import { Clouds } from "../assets/Animations/Clouds"

export const BGAn = ({data})=>{
    return (
        <Box pos="absolute" top="0" left={'0'}  w={["100%"]}>
          <Box pos={'relative'}>{data?.hourly[0].weather.main==='Cloud'?"":<Clouds/>}</Box>
        </Box>
    )
}