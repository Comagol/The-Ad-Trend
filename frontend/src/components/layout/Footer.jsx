import { Box, Container, Flex, IconButton, Button, HStack, Image } from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" py={4} mt="auto" borderRadius="lg">
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Box boxSize="40px">
            <Image src="/logo192.png" alt="logo" boxSize="100%" objectFit="contain" />
          </Box>
          {/* COPY button */}
          <Button variant="outline">COPY</Button>
          {/* Redes */}
          <HStack spacing={2}>
            <IconButton aria-label='Instagram' icon={<FaInstagram />} variant="outline"></IconButton>
            <IconButton aria-label='Facebook' icon={<FaFacebook />} variant="outline"></IconButton>
            <IconButton aria-label='Twitter' icon={<FaTwitter />} variant="outline"></IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer 