import { useParams } from 'react-router-dom'
import { Box, Heading, Image, Text, Button, VStack } from '@chakra-ui/react'
import { services } from '../data/services'

const ServiceDetail = () => {
  const { id } = useParams()
  const service = services.find(s => String(s.id) === id)

  if (!service) {
    return <Box p={8}><Text>Servicio no encontrado.</Text></Box>
  }

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg" bg="white">
      <VStack spacing={5}>
        <Heading as="h2" size="lg">{service.title}</Heading>
        <Image src={service.image} alt={service.title} borderRadius="md" boxSize="200px" objectFit="cover" bg="gray.100" />
        <Text fontSize="md" color="gray.700">{service.longDescription || service.description}</Text>
        <Text fontWeight="bold" fontSize="xl" color="blue.600">Valor: ${service.price || 'Consultar'}</Text>
        <Button colorScheme="blue" size="md">Agregar al carrito</Button>
      </VStack>
    </Box>
  )
}

export default ServiceDetail 