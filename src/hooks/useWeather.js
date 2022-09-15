import axios from "axios"
import { useQuery } from "react-query"

const getWeather = (lat, lon)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutelyalerts&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8`)
}

export const useWeather =(lat, lon)=>{
    return useQuery(['getWeatherDetail', lat, lon], ()=>getWeather(lat, lon))
}