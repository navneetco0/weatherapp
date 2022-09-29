import { Box, Center, Flex, Hide, Show, Text } from '@chakra-ui/react'
import { Rain } from '../assets/Rain'
import { Snow } from '../assets/Snow'
import { SunCloud } from '../assets/SunCloud'
import { SunShine } from '../assets/SunShine'
import { Thunder } from '../assets/Thunder'
import { HourModal } from './HourModal'
import { Detail } from './Detail'
import { HourFore } from './HourFore'
import { Day } from './Day'
import Canvas from './Canvas'

export const Main = ({ Data }) => {
  const weakDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const Icons = {
    Rain: <Rain />,
    Clouds: <SunCloud />,
    Clear: <SunShine />,
    Snow: <Snow />,
    Thunder: <Thunder />,
  }
  return (
    <Flex
      flexDir={['column', 'column', 'row']}
      justifyContent={['center', 'center', 'space-evenly']}
      pt="120px"
      w={['100%']}
      zIndex="1"
      backgroundColor="rgba(0, 0, 255, 0.2)"
    >
      <Flex
        flexDir={['column']}
        maxW={'480px'}
        minH={['fit-content', 'fit-content', 'calc(100vh - 120px)']}
        justifyContent="center"
        w={['100%', '100%', 'fit-content']}
        m="auto"
      >
        <Box>
          <Flex w="fit-content" m={['auto']}>
            <Text fontSize="75px">{Data?.data?.data?.hourly[0].temp} </Text>
            <Text>°C</Text>
          </Flex>
          <Text textAlign={'center'} fontSize="25px">
            {Data?.data?.data?.hourly[0].weather[0].main}
          </Text>
          <Show below="768px" p={['10px 10%', '40px']}>
            <Flex justifyContent={'space-between'}>
              <Center>
                {' '}
                <Box mr="5px" w="16px">
                  {Icons[Data?.data?.data?.daily[0].weather[0].main]}
                </Box>{' '}
                Today: {Data?.data?.data?.daily[0].weather[0].main}
              </Center>{' '}
              <Text>
                {Math.round(Data?.data?.data?.daily[0].temp.max)}°/
                {Math.round(Data?.data?.data?.daily[0].temp.min)}°
              </Text>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <Center>
                <Box mr="5px" w="16px">
                  {Icons[Data?.data?.data?.daily[1].weather[0].main]}
                </Box>{' '}
                Tomorrow: {Data?.data?.data?.daily[1].weather[0].main}
              </Center>{' '}
              <Text>
                {Math.round(Data?.data?.data?.daily[1].temp.max)}°/
                {Math.round(Data?.data?.data?.daily[1].temp.min)}°
              </Text>
            </Flex>
            <Flex
              justifyContent={'space-between'}
              height="fit-content"
              alignItems={'center'}
            >
              <Center alignItems={'center'}>
                <Box mr="5px" w="16px">
                  {Icons[Data?.data?.data?.daily[2].weather[0].main]}
                </Box>{' '}
                <Text>
                  {weakDay[(new Date().getDay() + 1) % 7]}:{' '}
                  {Data?.data?.data?.daily[2].weather[0].main}
                </Text>
              </Center>{' '}
              <Text>
                {Math.round(Data?.data?.data?.daily[2].temp.max)}°/
                {Math.round(Data?.data?.data?.daily[2].temp.min)}°{' '}
              </Text>
            </Flex>
          </Show>
          {/* <Flex p="5px" bg="rgba(255, 255, 255, 0.5)" borderRadius={"20px"} w="fit-content" alignItems="center"><Leaf/> <Text>AQl </Text></Flex> */}
        </Box>
        <Hide below="768px">
          <Day data={Data?.data?.data?.daily} Icons={Icons} weakDay={weakDay} />
        </Hide>
        <Show below="768px">
          <HourModal data={Data?.data?.data?.daily} Icons={Icons} weakDay={weakDay} />
        </Show>
      </Flex>
      <Box>
        <Show below="768px">
          <HourFore data={Data?.data?.data?.hourly} Icons={Icons} />
        </Show>
        <Detail data={Data?.data?.data} />
        <Hide below="768px">
          {Data && Data?.data?.data?.hourly && (
            <Canvas data={Data?.data?.data?.hourly} Icons={Icons} />
          )}
        </Hide>
      </Box>
    </Flex>
  )
}
