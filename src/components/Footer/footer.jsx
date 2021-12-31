import React from 'react';
import { 
    
    Text,
    Flex,
    useColorModeValue,
 } from '@chakra-ui/react'

const Footer = () => {
    const bg = useColorModeValue('blue.300', 'yellow')
    return (
        <footer>
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={1}
        bg={bg}
        color="white">
            <Flex align="center" mr={5} paddingLeft={2}>
                <Text fontSize='xs' color="gray.500">
                    Shristi
                </Text>
                
            </Flex>
        </Flex>
        </footer>
    )
}

export default Footer