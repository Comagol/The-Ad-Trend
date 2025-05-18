import { Box, Heading, VStack, Text, Image, Button, IconButton } from '@chakra-ui/react'
import { useCart } from '../context/CartContext'
import { FaTrash } from 'react-icons/fa'

const CartView = () => {
  const { cart, clearCart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0)

  return (
    <Box maxW="lg" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg" bg="dark.800">
      <Heading as="h2" size="lg" mb={6}>Carrito de compras</Heading>
      {cart.length === 0 ? (
        <Text>No hay servicios en el carrito.</Text>
      ) : (
        <VStack spacing={5} align="stretch">
          {cart.map((item, idx) => (
            <Box key={idx} borderWidth="1px" borderRadius="md" p={3} display="flex" alignItems="center" gap={4}>
              <Image src={item.image} alt={item.title} boxSize="60px" borderRadius="md" />
              <Box flex={1}>
                <Text fontWeight="bold">{item.title}</Text>
                <Text fontSize="sm" color="gray.600">${item.price}</Text>
                <IconButton aria-label='Eliminar' icon={<FaTrash />} variant="outline" onClick={() => removeFromCart(item.id)} />
              </Box>
            </Box>
          ))}
          <Text fontWeight="bold" fontSize="xl" alignSelf="flex-end">Total: ${total}</Text>
          <Button colorScheme="blue" onClick={clearCart}>Finalizar compra</Button>
        </VStack>
      )}
    </Box>
  )
}

export default CartView 