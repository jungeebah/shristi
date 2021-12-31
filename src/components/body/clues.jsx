import React from 'react';
import { Box,Heading,Text,Stack } from '@chakra-ui/react'


const Feature = ({ title, desc, ...rest }) => {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  
const Clues =() => {
    return (
      <Stack spacing={8}>
        <Feature
          title='Big Brother and Me'
          desc='You once saw me in a concert'
        />
        <Feature
          title='Song'
          desc='I have been loving you too long is one of my song'
        />
        <Feature
          title='Africa'
          desc='I was born in this place but they didnt accept me for my color of skin'
        />
      </Stack>
    )
  }

export default Clues