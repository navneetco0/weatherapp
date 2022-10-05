import axios from "axios";

export const SEARCHED_CITY = "SEARCHED_CITY";
export const SEARCHED_DATA = "SEARCHED_DATA";

export const City = payload => ({type:SEARCHED_CITY, payload});
export const searched_data = payload => ({type: SEARCHED_DATA, payload});

export const searched_city = (city)=>(dispatch)=>{
   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=10c4cbada812a8d40d0d6e944b86cc8d&units=metric`)
   .then(res=>axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${res?.data?.coord?.lat}&lon=${res?.data?.coord?.lon}&exclude=current,minutelyalerts&units=metric&appid=e4c70ce6a6821649a416cb9521d5f4f8`)
   .then(resp=>{dispatch(searched_data({data:{data:resp.data}})); dispatch(City(city));}))
}