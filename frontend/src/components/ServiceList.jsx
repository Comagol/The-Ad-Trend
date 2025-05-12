import { HStack } from '@chakra-ui/react'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

const ServiceList = () => {
  return (
    <HStack spacing={10} justify="center" mt={8} mb={8} bg="transparent">
      {services.map((service, idx) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </HStack>
  )
}

export default ServiceList 