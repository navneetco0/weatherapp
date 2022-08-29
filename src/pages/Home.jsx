import { Box, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { useQuery } from "react-query";
import { useState } from "react";
import { useLocation } from "../hooks/useLocation";
export const Home = () => {
  const [position, setPosition] = useState({
    lat:null,
    lon:null,
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  function showPosition(position){
    setPosition({...position, lat:position.coords.latitude, lon:position.coords.longitude});
  }
  const {data} = useLocation(position.lat, position.lon)
  return (
    <Box w={"100%"} minH="100vh" bg={"skyBlue"}>
      <Navbar data={data}  />
    </Box>
  );
};
