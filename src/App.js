import './App.css';
import { Home } from './pages/Home';
import { Box } from "@chakra-ui/react";
import { useState } from 'react';

function App() {
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
  return (
    <Box>
     {position.lat&&position.lon&&<Box><Home lat={position.lat} lon={position.lon}/></Box>}
    </Box>
  );
}


export default App;
