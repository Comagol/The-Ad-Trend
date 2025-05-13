import { useParams, useNavigate } from 'react-router-dom'
import { Box, Heading, Image, Text, Button, VStack, useToast } from '@chakra-ui/react'
import { services } from '../data/services'
import { useCart } from '../context/CartContext'

const ServiceDetail = () => {
  const { id } = useParams()
  const service = services.find(s => String(s.id) === id)
  const { addToCart } = useCart()
  const toast = useToast()
  const navigate = useNavigate()

  if (!service) {
    return <Box p={8}><Text>Servicio no encontrado.</Text></Box>
  }

  const handleAddToCart = () => {
    addToCart(service)
    toast({
      title: 'Servicio agregado al carrito',
      status: 'success',
      duration: 1500,
      isClosable: true,
    })
    setTimeout(() => navigate('/carrito'), 1500)
  }

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg" boxShadow="dark.700" bg="dark.800">
      <VStack spacing={5}>
        <Heading as="h2" size="lg" color="gray.100">{service.title}</Heading>
        <Image src={service.image} alt={service.title} borderRadius="md" boxSize="200px" objectFit="cover" bg="gray.100" />
        <Text fontSize="md" color="gray.100">{service.longDescription || service.description}</Text>
        <Text fontWeight="bold" fontSize="xl" color="gray.100">Valor: ${service.price || 'Consultar'}</Text>
        <Button colorScheme="blue" size="md" onClick={handleAddToCart}>Agregar al carrito</Button>
      </VStack>
    </Box>
  )
}

export default ServiceDetail 