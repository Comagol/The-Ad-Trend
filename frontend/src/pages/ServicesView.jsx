import { Box, Heading, VStack } from '@chakra-ui/react'
import ServiceList from '../components/ServiceList'

const ServicesView = () => {
  return (
    <Box>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={8}>Nuestros Servicios</Heading>
        <ServiceList />
      </VStack>
    </Box>
  )
}

export default ServicesView 