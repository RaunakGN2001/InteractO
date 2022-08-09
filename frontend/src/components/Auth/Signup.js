import React from 'react'
import { useState ,useRef } from 'react'
import { Text, Stack, HStack, VStack, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, Button } from '@chakra-ui/react'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();


    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);


    function passwordVisibiltyHandler() {
        if(passwordVisible) {
            setPasswordVisible(false);
        }
        else setPasswordVisible(true);
    }

    function confirmPasswordVisibiltyHandler() {
        if(confirmPasswordVisible) {
            setConfirmPasswordVisible(false);
        }
        else setConfirmPasswordVisible(true);
    }

    function submitHandler() {
        
    }


  return (
    <VStack spacing='7px'>
        
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Enter your name' onChange={(e) => {
                setName(e.target.value)
            }} autoComplete='off'/>
        </FormControl>

        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='Enter your email' autoComplete='off' onChange={(e) => {
                setEmail(e.target.value)
            }}/>
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input type={passwordVisible ? 'text' : 'password'} placeholder='Enter your password' autoComplete='off' onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <InputRightElement width='4.5rem' paddingRight='0.05rem' >
                    <Button height='2.35rem' width='4.75rem' onClick={passwordVisibiltyHandler}>{passwordVisible === true ? "Hide" : "Show"}</Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='confirm-password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input type={confirmPasswordVisible ? 'text' : 'password'} placeholder='Please re-enter your password' autoComplete='off' onChange={(e) => {
                    setConfirmPassword(e.target.value);
                }}/>
                <InputRightElement width='4.5rem' paddingRight='0.05rem'>
                    <Button height='2.35rem' width='4.75rem' onClick={confirmPasswordVisibiltyHandler}>{confirmPasswordVisible === true ? "Hide" : "Show"}</Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl marginBottom='10px'>
            <FormLabel>Upload your picture</FormLabel>
            <Input type='file' p={1.5} accept='image/*' ref={pic} border='none' onChange={(e) => {
                setPic(e.target.value)
            }}/>
        </FormControl>

        <Button colorScheme='blue' width='100%' onClick={submitHandler} style={{marginTop: 15 }}>
            Sign Up
        </Button>
        
    </VStack>
  )
}

export default Signup