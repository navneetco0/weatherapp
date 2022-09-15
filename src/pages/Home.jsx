import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { useEffect } from "react";
// import { Leaf } from "../assets/Leaf";
import { Navbar } from "../components/Navbar";
import { useLocation } from "../hooks/useLocation";
import { useWeather } from "../hooks/useWeather";
export const Home = ({ lat, lon }) => {
  const Data = useWeather(lat, lon);
  const location = useLocation(lat, lon);
  useEffect(()=>{
     console.log(Data)
  },[])
  return (
    <Box
      w={"100%"}
      minH="100vh"
      backgroundImage="linear-gradient(315deg, #0652C5 0%, #045DE9 74%)"
      color="white"
    >
      {location?.data&&<Navbar data={location.data}/> }
      <Flex pt="50px">
        <Box>
          {Data&&<Box>
            <Flex>
              <Text fontSize="75px">{Data?.data?.data?.hourly[0].temp} </Text>
              <Text>°C</Text>
            </Flex>
            <Text textAlign={'center'} fontSize='25px'>{Data?.data?.data?.hourly[0].weather[0].main}</Text>
            <Box>
              <Flex justifyContent={'space-between'}><Text>Today: {Data?.data?.data?.daily[0].weather[0].main}</Text> <Text>{Math.round(Data?.data?.data?.daily[0].temp.max)}°/{Math.round(Data?.data?.data?.daily[0].temp.min)}°</Text></Flex>
              <Flex justifyContent={'space-between'}><Text>Tomorrow: {Data?.data?.data?.daily[1].weather[0].main}</Text> <Text>{Math.round(Data?.data?.data?.daily[1].temp.max)}°/{Math.round(Data?.data?.data?.daily[1].temp.min)}°</Text></Flex>
              <Flex justifyContent={'space-between'}><Text>Sat: {Data?.data?.data?.daily[2].weather[0].main}</Text> <Text>{Math.round(Data?.data?.data?.daily[2].temp.max)}°/{Math.round(Data?.data?.data?.daily[2].temp.min)}° </Text></Flex>
            </Box>
           {/* <Flex p="5px" bg="rgba(255, 255, 255, 0.5)" borderRadius={"20px"} w="fit-content" alignItems="center"><Leaf/> <Text>AQl </Text></Flex> */}
          </Box>}
        </Box>
      </Flex>
    </Box>
  );
};
