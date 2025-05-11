import { Box, Container, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" py={4} mt="auto">
      <Container maxW="container.xl">
        <Text textAlign="center" fontSize="sm">
          © {new Date().getFullYear()} The Ad Trend. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer 