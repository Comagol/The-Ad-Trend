import { Box, Text, Image, Button, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ServiceCard = ({
  id,
  title = 'Nombre del servicio',
  image = 'https://via.placeholder.com/150',
  description = 'Breve descripción del servicio.'
}) => {
  return (
    <Box borderWidth="1.5px" borderColor="dark.700" borderRadius="lg" p={4} textAlign="center" minW="220px" maxW="250px" bg="dark.800" boxShadow="md" color="bone.100" _hover={{ bg: 'dark.700' }} transition="background 0.2s">
      <VStack spacing={3}>
        <Text fontWeight="bold" fontSize="lg">{title}</Text>
        <Box w="100%" display="flex" justifyContent="center">
          <Image src={image} alt={title} borderRadius="md" boxSize="120px" objectFit="cover" bg="gray.700" />
        </Box>
        <Text fontSize="md" color="bone.100">{description}</Text>
        <Button as={Link} to={`/servicio/${id}`} colorScheme="gray" size="sm" mt={2} variant="solid">ver más</Button>
      </VStack>
    </Box>
  )
}

export default ServiceCard 