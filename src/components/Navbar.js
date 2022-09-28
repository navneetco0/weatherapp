import { Flex, Box, Text, filter } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Location } from '../assets/Location'
import { Search } from '../assets/Search'
import { useGetData } from '../hooks/useGetData'
import { CityBox } from './CityBox'

export const Navbar = ({ data }) => {
  const Cities = useGetData('https://crm-na.herokuapp.com/states/get-cities')
  const [search, setSearch] = useState(false)
  const [datas, setDatas] = useState(null)
  const [input, setInput] = useState(null)
  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    const handler = setTimeout(() => {
      input?Cities&&
      setDatas(
        Cities?.data?.data.filter((Element) =>
        Element.toLowerCase().includes(input.toLowerCase()),
        ),
        ):setDatas(null);
    }, 3000)

    return () => {
      clearTimeout(handler)
    }
  }, [input])
  const handleInput = (e) => {
    e.target.value.length > 2 ? setInput(e.target.value) : setInput(null)
  }
  const handleSearch = () => {
    setSearch(!search)
  }
  return (
    <Flex position="fixed" top="0" left="0" w="100%" zIndex="2">
      <Flex width={['100%', '450px']} m="auto" p="10px">
        <Flex
          w={search ? '100%' : '16px'}
          boxShadow={
            search
              ? '6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7)'
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
          {datas?.length && <CityBox data={datas} />}
        </Flex>
        {!search && (
          <Box m="auto">
            <Box w="fit-content">
              <Text fontSize={'24px'} color={'white'}>
                {data ? data.data.name : ''}
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
