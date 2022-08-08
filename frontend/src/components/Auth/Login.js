import React from 'react'
import { useState ,useRef } from 'react'
import { Text, Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, Button } from '@chakra-ui/react'

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);


    function passwordVisibiltyHandler() {
        if(passwordVisible) {
            setPasswordVisible(false);
        }
        else setPasswordVisible(true);
    }

    function loginHandler() {
        console.log(email);
        console.log(password);
    }


  return (
    <VStack spacing='7px'>

        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='Enter your email' autoComplete='off' onChange={(e) => {
                setEmail(e.target.value)
            }} />
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input type={passwordVisible ? 'text' : 'password'} placeholder='Enter your password' autoComplete='off' onChange={(e) => {
                    setPassword(e.target.value) 
                }}/>
                <InputRightElement width='4.5rem' paddingRight='0.05rem' >
                    <Button height='2.35rem' width='4.75rem' onClick={passwordVisibiltyHandler}>{passwordVisible === true ? "Hide" : "Show"}</Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

         
        <Button colorScheme='blue' width='100%' style={{marginTop: 15 }} onClick={loginHandler}>
            Login
        </Button>
        <Button colorScheme='red' width='100%' style={{marginTop: 15 }} 
        onClick={() => {
            setEmail('guest@example.com');
            setPassword('123456');
        }}>
            Get Guest User Credentials
        </Button>
    </VStack>
  )
}

export default Login