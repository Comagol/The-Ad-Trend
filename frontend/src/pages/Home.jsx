import { Box } from '@chakra-ui/react'
import Carousel from '../components/Carousel'
import ServiceList from '../components/ServiceList'

const Home = () => {
  return (
    <Box>
      {/* Carrusel */}
      <Carousel />
      {/* Lista de servicios */}
      <ServiceList />
    </Box>
  )
}

export default Home 