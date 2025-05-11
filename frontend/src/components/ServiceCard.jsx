import { Box, Text, Image, Button, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ServiceCard = ({
  id,
  title = 'Nombre del servicio',
  image = 'https://via.placeholder.com/150',
  description = 'Breve descripción del servicio.'
}) => {
  return (
    <Box borderWidth="2px" borderRadius="lg" p={4} textAlign="center" minW="220px" maxW="250px" bg="white" boxShadow="md">
      <VStack spacing={3}>
        <Text fontWeight="bold" fontSize="lg">{title}</Text>
        <Box w="100%" display="flex" justifyContent="center">
          <Image src={image} alt={title} borderRadius="md" boxSize="120px" objectFit="cover" bg="gray.100" />
        </Box>
        <Text fontSize="md" color="gray.600">{description}</Text>
        <Button as={Link} to={`/servicio/${id}`} colorScheme="blue" size="sm" mt={2}>ver más</Button>
      </VStack>
    </Box>
  )
}

export default ServiceCard 