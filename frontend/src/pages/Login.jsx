import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Login = () => {
  return (
    <Box maxW="md" mx="auto">
      <VStack spacing={8}>
        <Heading>Login</Heading>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue" width="full">
          Login
        </Button>
        <Text>
          Don't have an account?{' '}
          <Link as={RouterLink} to="/register" color="blue.500">
            Register here
          </Link>
        </Text>
      </VStack>
    </Box>
  )
}

export default Login 