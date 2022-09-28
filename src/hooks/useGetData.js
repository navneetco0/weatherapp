import axios from "axios"
import { useQuery } from "react-query"

const getData = (link)=>{
    return axios.get(link)
}

export const useGetData =(link)=>{
    return useQuery(['getLocation', link], ()=>getData(link))
}