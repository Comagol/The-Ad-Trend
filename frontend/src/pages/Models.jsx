import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Card,
  CardBody,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'

const Models = () => {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    height: '',
    weight: '',
    bust: '',
    waist: '',
    hips: '',
    experience: '',
    photos: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }))
  }

  const handleNumberChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: Implement backend connection
    console.log('Form submitted:', formData)
    toast({
      title: 'Solicitud enviada',
      description: 'Gracias por tu interés. Nos pondremos en contacto contigo pronto.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Únete a Nuestra Agencia
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <Card w="100%">
              <CardBody>
                <VStack spacing={4}>
                  <Heading size="md">Información Personal</Heading>
                  <Stack w="100%" spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Apellido</FormLabel>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Tu apellido"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Edad</FormLabel>
                      <NumberInput
                        min={16}
                        max={99}
                        value={formData.age}
                        onChange={(value) => handleNumberChange('age', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </Stack>
                </VStack>
              </CardBody>
            </Card>

            <Card w="100%">
              <CardBody>
                <VStack spacing={4}>
                  <Heading size="md">Contacto</Heading>
                  <Stack w="100%" spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Correo electrónico</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Teléfono</FormLabel>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Tu número de teléfono"
                      />
                    </FormControl>
                  </Stack>
                </VStack>
              </CardBody>
            </Card>

            <Card w="100%">
              <CardBody>
                <VStack spacing={4}>
                  <Heading size="md">Medidas</Heading>
                  <Stack w="100%" spacing={4}>
                    <FormControl isRequired>
                      <FormLabel>Altura (cm)</FormLabel>
                      <NumberInput
                        min={150}
                        max={220}
                        value={formData.height}
                        onChange={(value) => handleNumberChange('height', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Peso (kg)</FormLabel>
                      <NumberInput
                        min={40}
                        max={120}
                        value={formData.weight}
                        onChange={(value) => handleNumberChange('weight', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Busto (cm)</FormLabel>
                      <NumberInput
                        min={70}
                        max={120}
                        value={formData.bust}
                        onChange={(value) => handleNumberChange('bust', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Cintura (cm)</FormLabel>
                      <NumberInput
                        min={50}
                        max={100}
                        value={formData.waist}
                        onChange={(value) => handleNumberChange('waist', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Cadera (cm)</FormLabel>
                      <NumberInput
                        min={70}
                        max={120}
                        value={formData.hips}
                        onChange={(value) => handleNumberChange('hips', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </Stack>
                </VStack>
              </CardBody>
            </Card>

            <Card w="100%">
              <CardBody>
                <VStack spacing={4}>
                  <Heading size="md">Experiencia</Heading>
                  <FormControl>
                    <FormLabel>Cuéntanos sobre tu experiencia en el modelaje</FormLabel>
                    <Textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Describe tu experiencia en el mundo del modelaje..."
                      rows={4}
                    />
                  </FormControl>
                </VStack>
              </CardBody>
            </Card>

            <Card w="100%">
              <CardBody>
                <VStack spacing={4}>
                  <Heading size="md">Fotos</Heading>
                  <FormControl isRequired>
                    <FormLabel>Sube tus fotos</FormLabel>
                    <Input
                      type="file"
                      name="photos"
                      onChange={handleChange}
                      accept="image/*"
                      p={1}
                    />
                    <Text fontSize="sm" color="gray.500" mt={1}>
                      Formatos aceptados: JPG, PNG, GIF
                    </Text>
                  </FormControl>
                </VStack>
              </CardBody>
            </Card>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="100%"
              mt={4}
            >
              Enviar Solicitud
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  )
}

export default Models