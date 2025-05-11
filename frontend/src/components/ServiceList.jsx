import { HStack } from '@chakra-ui/react'
import ServiceCard from './ServiceCard'

const ServiceList = () => {
  return (
    <HStack spacing={8} justify="center" mt={8} mb={8}>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </HStack>
  )
}

export default ServiceList 