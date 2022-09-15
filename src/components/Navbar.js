import { Plus } from '../assets/Plus'
import { Flex, Box, Text, Tooltip } from '@chakra-ui/react'
import { Location } from '../assets/Location'

export const Navbar = ({ data }) => {
  return (
    <Flex position="fixed" top="0" left="0" w="100%">
      <Flex width={['100%','450px']} m='auto' p='10px' >
        <Tooltip label="add city">
          <Box cursor={'pointer'}>
            <Plus />
          </Box>
        </Tooltip>
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
      </Flex>
    </Flex>
  )
}
