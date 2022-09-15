import axios from "axios"
import { useQuery } from "react-query"

const getLocation = (lat, lon)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e4c70ce6a6821649a416cb9521d5f4f8`)
}

export const useLocation =(lat,lon)=>{
    return useQuery(['getLocation', lat, lon], ()=>getLocation(lat, lon))
}
