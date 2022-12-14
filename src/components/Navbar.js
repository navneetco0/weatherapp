import { Flex, Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Location } from '../assets/Location'
import { Search } from '../assets/Search'
import { useGetData } from '../hooks/useGetData'
import { CityBox } from './CityBox'

export const Navbar = ({ data }) => {
  const {searched_city} = useSelector(store=>store.mainReducer);
  const Cities = useGetData('https://crm-na.herokuapp.com/states/get-cities')
  const [search, setSearch] = useState(false)
  const [datas, setDatas] = useState(null)
  const [input, setInput] = useState(null)
  // const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    const handler = setTimeout(() => {
      input?(Cities&&
      setDatas(
        Cities?.data?.data.filter((Element) =>
        Element.toLowerCase().includes(input.toLowerCase())
        ),
        )):setDatas(null); 
    }, 3000)
    return () => {
      clearTimeout(handler)
    }
  }, [input, Cities])
  const handleInput = (e) => {
    setInput(e.target.value);
    setTimeout(() => {
      e.target.value?(Cities&&
      setDatas(
        Cities?.data?.data.filter((Element) =>
        Element.toLowerCase().includes(e.target.value.toLowerCase())
        )
        )):setDatas(null); 
    }, 3000)
  }
  const handleSearch = () => {
    setSearch(!search);
  }
  return (
    <Flex position="fixed" top="0" left="0" w="100%" zIndex="2">
      <Flex width={['100%', '450px']} m="auto" p="10px">
        <Flex
          w={search ? '100%' : '16px'}
          boxShadow={
            search
              ? '0px 0px 10px 1px rgba(0, 0, 0, 0.15), 0px 0px 10px 1px rgba(255, 255, 255, 0.7)'
              : ''
          }
          bg={search && 'white'}
          transition={search ? '4s' : '1s'}
          borderRadius={'20px'}
          p={'5px 20px'}
          alignItems="center"
          position={'relative'}
          zIndex="3"
        >
          <input
            style={{
              width: search ? '100%' : '0px',
              transition: '2s',
              border: 0,
              outline: 'transparent',
              background: 'transparent',
              padding: search ? '5px 10px' : '0px',
              color: 'gray',
            }}
            placeholder="Search city here"
            onChange={(e) => handleInput(e)}
          />
          <Box
            onClick={() => handleSearch()}
            transition={'2s'}
            color={search ? 'gray' : 'white'}
            cursor={'pointer'}
          >
            <Search />
          </Box>
          {search&&datas?.length && <CityBox data={datas} setSearch={setSearch} />}
        </Flex>
        {!search && (
          <Box m="auto">
            <Box w="fit-content">
              <Text fontSize={'24px'} color={'white'}>
                {searched_city?searched_city:(data ? data.data.name : '')}
              </Text>
              <Flex w={'100%'}>
                <Box m={'auto'} transform={'rotate(-70deg)'}>
                  <Location />
                </Box>
              </Flex>
            </Box>
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
