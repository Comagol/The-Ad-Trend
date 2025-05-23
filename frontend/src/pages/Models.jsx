import React, { useState } from 'react'
import {
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
    <Container bg="dark.700" maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" color="bone.100">
          Únete a Nuestra Agencia
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <Card w="100%">
              <CardBody bg="dark.800">
                <VStack spacing={4}>
                  <Heading size="md" color="bone.100">Información Personal</Heading>
                  <Stack w="100%" spacing={4}>
                    <FormControl isRequired>
                      <FormLabel color="bone.100">Nombre</FormLabel>
                      <Input color="bone.100"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="bone.100">Apellido</FormLabel>
                      <Input color="bone.100"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Tu apellido"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="bone.100">Edad</FormLabel>
                      <NumberInput color="bone.100"
                        min={16}
                        max={99}
                        value={formData.age}
                        onChange={(value) => handleNumberChange('age', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper color="bone.100" />
                          <NumberDecrementStepper color="bone.100" />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </Stack>
                </VStack>
              </CardBody>
            </Card>

            <Card w="100%">
              <CardBody bg="dark.800">
                <VStack spacing={4}>
                  <Heading size="md" color="bone.100">Contacto</Heading>
                  <Stack w="100%" spacing={4}>
                    <FormControl isRequired>
                      <FormLabel color="bone.100">Correo electrónico</FormLabel>
                      <Input color="bone.100"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="bone.100">Teléfono</FormLabel>
                      <Input color="bone.100"
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
              <CardBody bg="dark.800">
                <VStack spacing={4}>
                  <Heading size="md" color="bone.100">Medidas</Heading>
                  <Stack w="100%" spacing={4}>
                    <FormControl isRequired>
                      <FormLabel color="bone.100">Altura (cm)</FormLabel>
                      <NumberInput color="bone.100"
                        min={150}
                        max={220}
                        value={formData.height}
                        onChange={(value) => handleNumberChange('height', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper color="bone.100" />
                          <NumberDecrementStepper color="bone.100" />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="bone.100">Peso (kg)</FormLabel>
                      <NumberInput color="bone.100"
                        min={40}
                        max={120}
                        value={formData.weight}
                        onChange={(value) => handleNumberChange('weight', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper color="bone.100" />
                          <NumberDecrementStepper color="bone.100" />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="bone.100">Busto (cm)</FormLabel>
                      <NumberInput color="bone.100"
                        min={70}
                        max={120}
                        value={formData.bust}
                        onChange={(value) => handleNumberChange('bust', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper color="bone.100" />
                          <NumberDecrementStepper color="bone.100" />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="bone.100">Cintura (cm)</FormLabel>
                      <NumberInput color="bone.100"
                        min={50}
                        max={100}
                        value={formData.waist}
                        onChange={(value) => handleNumberChange('waist', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper color="bone.100" />
                          <NumberDecrementStepper color="bone.100" />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color="bone.100">Cadera (cm)</FormLabel>
                      <NumberInput color="bone.100"
                        min={70}
                        max={120}
                        value={formData.hips}
                        onChange={(value) => handleNumberChange('hips', value)}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper color="bone.100" />
                          <NumberDecrementStepper color="bone.100" />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </Stack>
                </VStack>
              </CardBody>
            </Card>

            <Card w="100%">
              <CardBody bg="dark.800">
                <VStack spacing={4}>
                  <Heading size="md" color="bone.100">Experiencia</Heading>
                  <FormControl>
                    <FormLabel color="bone.100">Cuéntanos sobre tu experiencia en el modelaje</FormLabel>
                    <Textarea color="bone.100"
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
              <CardBody bg="dark.800">
                <VStack spacing={4}>
                  <Heading size="md" color="bone.100" >Fotos</Heading>
                  <FormControl isRequired>
                    <FormLabel color="bone.100">Sube tus fotos</FormLabel>
                    <Input color="bone.100"
                      type="file"
                      name="photos"
                      onChange={handleChange}
                      accept="image/*"
                      p={1}
                    />
                    <Text fontSize="sm" color="gray.100" mt={1}>
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