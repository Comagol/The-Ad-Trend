import { Box, Heading, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box>
      <Heading as="h1" size="2xl" mb={6}>
        Welcome to The Ad Trend
      </Heading>
      <Text fontSize="xl">
        Your platform for managing and tracking advertising trends.
      </Text>
    </Box>
  )
}

export default Home 