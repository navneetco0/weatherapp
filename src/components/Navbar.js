import { Flex, Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Location } from '../assets/Location'
import { Search } from '../assets/Search';

export const Navbar = ({ data }) => {
  const [search, setSearch] = useState(false)
  return (
    <Flex position="fixed" top="0" left="0" w="100%" zIndex="2">
      <Flex width={['100%', '450px']} m="auto" p="10px">
        <Flex w={search?'100%':'16px'} boxShadow= {search?"6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7)":""} bg={search&&'white'} transition={search?"4s":"1s"} borderRadius={"20px"} p={"5px 20px"} alignItems="center">
          <input
            style={{
              width: search ? '100%' : '0px',
              transition: '2s',
              border:0,
              outline:'transparent',
              background:'transparent',
              padding:search?'5px 10px':'0px',
              color:'gray'
            }}
            placeholder="Search city here"
          />
          <Box
            onClick={() => setSearch(!search)}
            transition={"2s"}
            color={search?"gray":"white"}
            cursor={'pointer'}
          >
            <Search />
          </Box>
        </Flex>
        {
          !search&&<Box m="auto">
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
        }
      </Flex>
    </Flex>
  )
}
