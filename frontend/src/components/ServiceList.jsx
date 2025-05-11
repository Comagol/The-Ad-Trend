import { HStack } from '@chakra-ui/react'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Diseño Gráfico',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80',
    description: 'Creamos piezas visuales impactantes para tu marca.'
  },
  {
    title: 'Marketing Digital',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=256&q=80',
    description: 'Estrategias para aumentar tu presencia online.'
  },
  {
    title: 'Fotografía Profesional',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=256&q=80',
    description: 'Capturamos los mejores momentos de tu empresa.'
  }
]

const ServiceList = () => {
  return (
    <HStack spacing={8} justify="center" mt={8} mb={8}>
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </HStack>
  )
}

export default ServiceList 