import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { BGAn } from "../components/BGAn";
// import Canvas from "../components/Canvas";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { useLocation } from "../hooks/useLocation";
import { useWeather } from "../hooks/useWeather";

export const Home = ({ lat, lon }) => {
  const data = useSelector(store=>store.mainReducer.data);
  const Data = useWeather(lat, lon);
  const location = useLocation(lat, lon);
  const [hour] = new Date().toString().slice(16, 24).split(':');
  return (
    <Box
      w={"100%"}
      minH="100vh"
      backgroundImage = {+hour>6&&+hour<18?"linear-gradient(315deg, #0652C5 0%, #045DE9 74%)":"linear-gradient(315deg, #010f22 0%, #010b1a 74%)"}
      color="white"
      pos={'relative'}
    >
      {location?.data&&<Navbar data={location.data}/> }
      {Data?.data&&<BGAn data={data?(data?.data?.data):(Data?.data?.data)}/>}
      <Flex overflowX={'hidden'}>
        {Data&&<Main Data={data?data:Data}/>}
      </Flex>
    </Box>
  );
};
