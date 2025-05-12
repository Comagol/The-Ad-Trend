import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { useState } from 'react'
import { services } from '../data/services'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = services.map(service => ({
    image: service.image,
    title: service.title,
    description: service.description
  }))

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slideSize = useBreakpointValue({ base: '100%', md: '80%', lg: '60%' })

  return (
    <Box position="relative" height="350px" width="100%" overflow="hidden" borderRadius="lg" mb={8}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          position={index === currentSlide ? 'relative' : 'absolute'}
          top={0}
          left={0}
          width="100%"
          height="100%"
          opacity={index === currentSlide ? 1 : 0}
          transition="opacity 0.5s"
          backgroundImage={`url(${slide.image})`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Overlay */}
          <Box bg="blackAlpha.600" borderRadius="lg" p={8} textAlign="center">
            <Text fontSize="3xl" fontWeight="bold" color="white" mb={2}>
              {slide.title}
            </Text>
            <Text fontSize="xl" color="white">
              {slide.description}
            </Text>
          </Box>
        </Box>
      ))}
      {/* Botones de navegación */}
      <Box
        position="absolute"
        top="50%"
        left="4"
        transform="translateY(-50%)"
        cursor="pointer"
        onClick={handlePrev}
        p={4}
        bg="blackAlpha.300"
        borderRadius="full"
        _hover={{ bg: 'blackAlpha.400' }}
        zIndex={2}
      >
        ←
      </Box>
      <Box
        position="absolute"
        top="50%"
        right="4"
        transform="translateY(-50%)"
        cursor="pointer"
        onClick={handleNext}
        p={4}
        bg="blackAlpha.300"
        borderRadius="full"
        _hover={{ bg: 'blackAlpha.400' }}
        zIndex={2}
      >
        →
      </Box>
    </Box>
  )
}

export default Carousel
