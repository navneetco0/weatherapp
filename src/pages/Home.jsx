import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { useLocation } from "../hooks/useLocation";
import { useWeather } from "../hooks/useWeather";
export const Home = ({ lat, lon }) => {
  const Data = useWeather(lat, lon);
  const location = useLocation(lat, lon);
  // useEffect(()=>{
  //   console.log(location)
  //   console.log(Data);
  // },[]);
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
          {Data&&<Center>
            <Flex>
              <Text fontSize="75px">{Data?.data?.data?.hourly[0].temp} </Text>
              <Text>°C</Text>
            </Flex>
          
            <Text></Text>
          </Center>}
        </Box>
      </Flex>
    </Box>
  );
};
