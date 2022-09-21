import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { Rain } from '../assets/Rain'
import { Snow } from '../assets/Snow'
import { SunCloud } from '../assets/SunCloud'
import { SunShine } from '../assets/SunShine'
import { Thunder } from '../assets/Thunder'
import { DayFore } from './DayFore'
import { Detail } from './Detail'
import { HourFore } from './HourFore'

export const Main = ({ Data }) => {
  const weakDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const  Icons = { Rain: <Rain />, Clouds: <SunCloud />, Clear: <SunShine/>, Snow: <Snow/>, Thunder: <Thunder/> }
  return (
    <Box
      pt="120px"
      w={['100%']}
      zIndex="1"
      backgroundColor="rgba(0, 0, 255, 0.2)"
    >
      <Box>
        <Flex w="fit-content" m={['auto']}>
          <Text fontSize="75px">{Data?.data?.data?.hourly[0].temp} </Text>
          <Text>°C</Text>
        </Flex>
        <Text textAlign={'center'} fontSize="25px">
          {Data?.data?.data?.hourly[0].weather[0].main}
        </Text>
        <Box p={['10px 10%', '40px']}>
          <Flex justifyContent={'space-between'}>
            <Center>
              {' '}
              <Box mr="5px">{Icons[Data?.data?.data?.daily[0].weather[0].main]}</Box>{' '}
              {Data?.data?.data?.daily[0].weather[0].main}
            </Center>{' '}
            <Text>
              {Math.round(Data?.data?.data?.daily[0].temp.max)}°/
              {Math.round(Data?.data?.data?.daily[0].temp.min)}°
            </Text>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Center>
            <Box mr="5px">{Icons[Data?.data?.data?.daily[1].weather[0].main]}</Box>{' '}
              Tomorrow: {Data?.data?.data?.daily[1].weather[0].main}
            </Center>{' '}
            <Text>
              {Math.round(Data?.data?.data?.daily[1].temp.max)}°/
              {Math.round(Data?.data?.data?.daily[1].temp.min)}°
            </Text>
          </Flex>
          <Flex justifyContent={'space-between'} height="fit-content" alignItems={'center'}>
            <Center alignItems={'center'}>
              <Box mr="5px">{Icons[Data?.data?.data?.daily[2].weather[0].main]}</Box>{' '}
              <Text>
                {weakDay[(new Date().getDay() + 1)%7]}:{' '}
                {Data?.data?.data?.daily[2].weather[0].main}
              </Text>
            </Center>{' '}
            <Text>
              {Math.round(Data?.data?.data?.daily[2].temp.max)}°/
              {Math.round(Data?.data?.data?.daily[2].temp.min)}°{' '}
            </Text>
          </Flex>
        </Box>
        {/* <Flex p="5px" bg="rgba(255, 255, 255, 0.5)" borderRadius={"20px"} w="fit-content" alignItems="center"><Leaf/> <Text>AQl </Text></Flex> */}
      </Box>
      {/* <Show below="480px"> */}
      <DayFore data={Data?.data?.data?.daily} Icons={Icons} weakDay={weakDay} />
      {/* </Show> */}
      <HourFore data={Data?.data?.data?.hourly} Icons={Icons} />
      <Detail data={Data?.data?.data} />
    </Box>
  )
}
