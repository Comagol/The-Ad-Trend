import { Box, Text } from '@chakra-ui/react'

const ServiceCard = ({ title = 'servicios' }) => {
  return (
    <Box borderWidth="2px" borderRadius="lg" p={8} textAlign="center" minW="200px">
      <Text fontSize="2xl">{title}</Text>
    </Box>
  )
}

export default ServiceCard 