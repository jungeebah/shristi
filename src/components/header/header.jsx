import React from 'react';
import { Heading } from '@chakra-ui/react'
import { Flex,IconButton,useColorMode,useColorModeValue } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'


const Header= () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('blue.300', 'yellow')
    const icon = useColorModeValue('white', 'black')
    return(
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={5}
        bg={bg}
        color="white">
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"} color="black">
                    Shristi
                </Heading>
                
            </Flex>
            <Flex align="end">
            <IconButton onClick={toggleColorMode}
                _focus={{boxShadow: "none"}}  
                variant="ghost"
                colorScheme='blue.400'>
                <MoonIcon color={icon}>
                {colorMode === 'light' ? 'Dark' : 'Light'}
                </MoonIcon>
                </IconButton>
            </Flex>
        </Flex>
    )
}

export default Header