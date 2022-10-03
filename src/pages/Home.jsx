import { Box, Flex } from "@chakra-ui/react";
import { BGAn } from "../components/BGAn";
// import Canvas from "../components/Canvas";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { useLocation } from "../hooks/useLocation";
import { useWeather } from "../hooks/useWeather";

export const Home = ({ lat, lon }) => {
  const Data = useWeather(lat, lon);
  const location = useLocation(lat, lon);
  return (
    <Box
      w={"100%"}
      minH="100vh"
      backgroundImage="linear-gradient(315deg, #0652C5 0%, #045DE9 74%)"
      color="white"
      pos={'relative'}
    >
      {location?.data&&<Navbar data={location.data}/> }
      {Data?.data&&<BGAn data={Data?.data?.data}/>}
      <Flex overflowX={'hidden'}>
        {Data&&<Main Data={Data}/>}
      </Flex>
    </Box>
  );
};
