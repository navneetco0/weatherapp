import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { ArrowLeft } from '../assets/ArrowLeft'

export const DayFore = ({ data, Icons, weakDay }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef();
  return (
    <Box>
      <Button
        ref={btnRef}
        onClick={onOpen}
        m="10px 10%"
        borderRadius={'40px'}
        w="80%"
        bg="rgba(255, 255, 255, 0.3)"
        _hover={{ bg: 'rgba(255, 255, 255, 0.4)' }}
        _active={{ bg: 'rgba(255, 255, 255, 0.5)' }}
      >
        7-days forecast
      </Button>
      <Box w={['100%', '100px']} pos="relative">
        <Drawer
          pos="absolute"
          right="0"
          m="auto"
          isOpen={isOpen}
          onClose={onClose}
          finalFocusRef={btnRef}
          size={['full']}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Box w="30px" m="20px" onClick={onClose}>
              <ArrowLeft />
            </Box>
            <DrawerHeader>7-days forecast</DrawerHeader>
            <DrawerBody overflow="scroll">
              {data&&data.map((Element, index) => (
                <Flex>
                  <Text>{index===0?'Today':index===1?"Tomorrow":(weakDay[(new Date().getDay() + index-1)%7])}</Text>
                </Flex>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  )
}
