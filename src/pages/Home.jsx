import {Box, Text} from "@chakra-ui/react"
import { Navbar } from "../components/Navbar"

export const Home = ()=>{
    return (
        <Box w={"100%"} minH="100vh" bg={'skyBlue'}>
            <Navbar/>
        </Box>
    )
}