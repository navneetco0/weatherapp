import axios from "axios"
import { useQuery } from "react-query"

const getLocation = (lat, lon)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ddc894a0a38425be12ca6bbf79cb31e5`)
}

export const useLocation =(lat,lon)=>{
    return useQuery(['getLocation', lat, lon], ()=>getLocation(lat, lon))
}