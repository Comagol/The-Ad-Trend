import { Box, Flex, Button, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="gray.100" px={4} py={2}>
      <Flex alignItems="center">
        <Link to="/">
          <Box fontWeight="bold">The Ad Trend</Box>
        </Link>
        <Spacer />
        <Flex gap={4}>
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="blue">Register</Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 