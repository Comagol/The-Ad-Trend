import { Box, Container, Flex, Text, Button, HStack, Image } from '@chakra-ui/react'

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
            <Button variant="outline">REDES</Button>
            <Button variant="outline">REDES</Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer 