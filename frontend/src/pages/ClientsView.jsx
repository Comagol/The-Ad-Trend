import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, useColorModeValue, Badge } from '@chakra-ui/react'

const ClientsView = () => {
  const bgColor = useColorModeValue('white', 'dark.700')
  const textColor = useColorModeValue('gray.800', 'bone.100')

  const clients = [
    {
      id: 1,
      name: 'TechStart Solutions',
      description: 'Startup tecnológica que revoluciona el mercado con su plataforma de IA. Hemos desarrollado su estrategia de marca y campañas digitales.',
      category: 'Tecnología',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      name: 'EcoStyle Fashion',
      description: 'Marca de moda sostenible que busca posicionarse en el mercado. Creamos su identidad visual y estrategia en redes sociales.',
      category: 'Moda',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      name: 'FreshBites Restaurant',
      description: 'Cadena de restaurantes saludables. Desarrollamos su estrategia de marketing digital y campañas de fidelización.',
      category: 'Gastronomía',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 4,
      name: 'FitLife Gym',
      description: 'Red de gimnasios premium. Gestionamos su presencia digital y estrategias de captación de leads.',
      category: 'Fitness',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 5,
      name: 'GreenHome Living',
      description: 'Empresa de productos eco-friendly para el hogar. Creamos su estrategia de contenido y campañas de concienciación.',
      category: 'Sostenibilidad',
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 6,
      name: 'EduTech Academy',
      description: 'Plataforma de educación online. Desarrollamos su estrategia de marketing de contenidos y campañas de captación.',
      category: 'Educación',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ]

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="2xl" color="bone.100" mb={4}>
            Nuestros Clientes
          </Heading>
          <Text fontSize="xl" color="bone.100" maxW="2xl" mx="auto">
            Colaboramos con marcas innovadoras y visionarias, transformando sus ideas 
            en estrategias de marketing exitosas que generan resultados medibles.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {clients.map((client) => (
            <Box
              key={client.id}
              bg= "dark.800"
              p={6}
              borderRadius="lg"
              boxShadow="md"
              transition="all 0.3s ease"
              _hover={{ 
                transform: 'translateY(-5px)',
                boxShadow: 'lg'
              }}
            >
              <VStack spacing={4}>
                <Image
                  src={client.image}
                  alt={client.name}
                  borderRadius="lg"
                  boxSize="200px"
                  objectFit="cover"
                />
                <Badge colorScheme="blue" fontSize="sm" px={2} py={1} borderRadius="md">
                  {client.category}
                </Badge>
                <Heading as="h3" size="md" color="bone.100" textAlign="center">
                  {client.name}
                </Heading>
                <Text color="bone.100" textAlign="center" fontSize="sm">
                  {client.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default ClientsView 