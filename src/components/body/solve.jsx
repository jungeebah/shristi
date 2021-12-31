import React,{useState} from 'react';
import {
    Input,
    Box,
    InputGroup,
    InputRightElement,
    Button} 
from '@chakra-ui/react';



const Solve = ({setShowWishes}) =>{
    const answer = "neo"
    const [inputAnswer, setInputAnswer] = useState('');
    
    const handleClick = () => answer === inputAnswer.toLowerCase() ? setShowWishes(true) :setShowWishes(false)
    return (
        <Box spacing={8} mt={5} mb={5}>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder='Feed me the answer'
                    onChange={event => setInputAnswer(event.currentTarget.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm'  onClick={handleClick}>
                    Show
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}

export default Solve