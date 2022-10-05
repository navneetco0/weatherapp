import axios from "axios"
import { useQuery } from "react-query"

const getLocation = (lat, lon)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=10c4cbada812a8d40d0d6e944b86cc8d`)
}

export const useLocation =(lat,lon)=>{
    return useQuery(['getLocation', lat, lon], ()=>getLocation(lat, lon))
}
