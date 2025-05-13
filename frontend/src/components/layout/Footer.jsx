import { Box, Container, Flex, IconButton, Button, HStack, Image } from '@chakra-ui/react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <Box as="footer" bg="dark.700" py={4} mt="auto" borderRadius="lg">
      <Container maxW="container.xl">
        <Flex alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Box boxSize="40px">
            <Image src={logo} alt="logo" boxSize="100%" objectFit="contain" />
          </Box>
          {/* COPY button */}
          <Button variant="outline" color="bone.100">COPY</Button>
          {/* Redes */}
          <HStack spacing={2}>
            <IconButton aria-label='Instagram' icon={<FaInstagram />} variant="outline" color="bone.100"></IconButton>
            <IconButton aria-label='Facebook' icon={<FaFacebook />} variant="outline" color="bone.100"></IconButton>
            <IconButton aria-label='Twitter' icon={<FaTwitter />} variant="outline" color="bone.100"></IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer 