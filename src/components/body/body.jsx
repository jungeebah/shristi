import React,{useState} from 'react';
import { 
    Box,
    Flex,
    Stack,
    Heading,
    Text,
 } from '@chakra-ui/react';
import Clues from './clues';
import Solve from './solve';

const Feature = ({ title, desc, ...rest }) => {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

const FirstNote = () =>{
    const poem = <Text w="100%">
        <p>
        Welcome to your first adventure<br/>
        A website on ur name<br/>
        Lean back and relax<br/>
        The journey has just begun<br/>
        </p>
        <p>
        find the name in the clue<br/>
        use them to built a tool<br/>
        through which you will find<br/>
        a wishful note of mine<br/>

        </p>
    </Text>
    return (
        <Box mt={5} mb={5}>
        <Feature
            title='Lets Begin'
            desc={poem}
            />
    </Box>
    )
}

const FullClue = () =>{
    return(
    <Box mt={5}>
        <Feature
            title='Final Clue'
            desc='Use the first letter from all the above answer and feed the info to the box'
            />
    </Box>
    )
}

const Poem = ({showWishes}) =>{
    return (
            <Box>
            {showWishes ? 
                <Feature
                title='Happy New year'
                desc='Happy new year 2022. Cheers to a chance to have a new beginning.'
                />
           
            :
            <Box></Box>}
            </Box>
    )
}

const Body = () => {
    const [showWishes,setShowWishes] = useState(false);
    return (
        
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={5}
            color="dark">
            <Stack spacing={8} >
                <FirstNote/>
            </Stack>
            <Clues/>
            <Box mb={5}></Box>
            <Stack spacing={8} >
                <FullClue/>
            </Stack>
            <Solve setShowWishes={setShowWishes}/>
            <Stack spacing={8} >
                <Poem showWishes={showWishes}/>
            </Stack>
        </Flex>
     
    )
}

export default Body