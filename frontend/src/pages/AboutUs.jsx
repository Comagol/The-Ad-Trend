import { Box, Flex, Heading, Text, Image, VStack, HStack, Avatar, Divider, Button, useColorModeValue } from '@chakra-ui/react'

// Datos de ejemplo para staff
const staff = [
  {
    name: 'Nazarena Mariscal',
    role: 'Directora Creativa',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Apasionada por el diseño y la innovación, lidera el equipo con más de 10 años de experiencia.'
  },
  {
    name: 'Juan Pérez',
    role: 'Desarrollador Web',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Especialista en tecnologías web, asegura que cada proyecto tenga una base tecnológica sólida.'
  },
  {
    name: 'Sofía Gómez',
    role: 'Community Manager',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Experta en redes sociales y comunicación digital, conecta a la agencia con su comunidad.'
  }
]

const agencyInfo = {
  name: 'Agencia Creativa AddTrend',
  founded: '2018',
  mission: 'Impulsar marcas a través de la creatividad, la tecnología y la pasión por el detalle.',
  vision: 'Ser referentes en innovación y resultados para nuestros clientes.',
  values: ['Creatividad', 'Compromiso', 'Innovación', 'Transparencia'],
  achievements: [
    'Premio a la Mejor Agencia Digital 2022',
    'Más de 100 clientes satisfechos',
    'Campañas virales en redes sociales'
  ]
}

const AboutUs = () => {
  const cardBg = useColorModeValue('gray.100', 'dark.700')
  return (
    <Box>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>Sobre Nosotros</Heading>
      <Flex direction={{ base: 'column', md: 'row' }} align="flex-start" gap={10}>
        {/* Foto y staff */}
        <VStack minW="300px" maxW="350px" mx="auto">
          <Avatar size="2xl" name="Staff principal" src={staff[0].img} mb={4} />
          <Text fontWeight="bold" fontSize="lg">Equipo principal</Text>
          <Divider />
          <VStack spacing={2} align="stretch">
            {staff.map((member, idx) => (
              <HStack key={idx} spacing={3} align="center">
                <Avatar size="sm" name={member.name} src={member.img} />
                <Box>
                  <Text fontWeight="bold">{member.name}</Text>
                  <Text fontSize="sm" color="gray.500">{member.role}</Text>
                </Box>
              </HStack>
            ))}
          </VStack>
        </VStack>
        {/* Información de la agencia */}
        <Box flex={1} bg={"grey.100"} p={6} borderRadius="lg" boxShadow="md">
          <Heading as="h2" size="md" mb={4}>Información de la Agencia</Heading>
          <Text fontSize="lg" fontWeight="bold" mb={2}>{agencyInfo.name}</Text>
          <Text mb={2}><b>Fundada:</b> {agencyInfo.founded}</Text>
          <Text mb={2}><b>Misión:</b> {agencyInfo.mission}</Text>
          <Text mb={2}><b>Visión:</b> {agencyInfo.vision}</Text>
          <Text mb={2}><b>Valores:</b> {agencyInfo.values.join(', ')}</Text>
          <Text mb={2}><b>Logros:</b></Text>
          <VStack align="start" pl={4} mb={2}>
            {agencyInfo.achievements.map((ach, idx) => (
              <Text key={idx} fontSize="sm">• {ach}</Text>
            ))}
          </VStack>
          <Divider my={4} />
        </Box>
      </Flex>
    </Box>
  )
}

export default AboutUs 