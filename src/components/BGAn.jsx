import { Box } from "@chakra-ui/react"
import { Clouds } from "../assets/Animations/Clouds"
import { MoonBox } from "./Moon/MoonBox"
import { SunBox } from "./SunBox"

export const BGAn = ({data})=>{
  const duration = +(data?.daily[1].sunrise - data?.daily[0].moonrise);
  const sunduration = +(data?.daily[1].sunrise - data?.daily[0].sunset);
  const rotation =(120/duration* +((+(+new Date()).toString().slice(0, 10)-data?.daily[0].moonrise)));
  const sunrotation = (120/sunduration*+((+(+new Date()).toString().slice(0, 10)-data?.daily[0].sunrise)));
  const [hour] = new Date().toString().slice(16, 24).split(':');
    return (
        <Box pos="absolute" top="0" left={'0'}  w={["100%"]}>
          {/* <Text>{sunrotation+"   "+ sunduration}</Text> */}
          {+(+new Date()).toString().slice(0, 10)>=+new Date(data?.daily[0].sunrise)&&+(+new Date()).toString().slice(0, 10)<+new Date(data?.daily[0].sunset)&&<SunBox duration={sunduration} rotation={sunrotation}/>}
        {+(+new Date()).toString().slice(0, 10)>=+new Date(data?.daily[0].moonrise)&&+(+new Date()).toString().slice(0, 10)<+new Date(data?.daily[1].sunrise)&&<MoonBox left={data?.daily[0].moon_phase} duration={duration} rotation={rotation}/>}
          <Box pos={'relative'} color={+hour>6&&+hour<18?"white":"rgba(0, 0, 0, 0.8)"}>{data?.hourly[0].weather.main==='Cloud'?"":<Clouds/>}</Box>
        </Box>
    )
}