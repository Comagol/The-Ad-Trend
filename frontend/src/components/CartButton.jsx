import { IconButton } from '@chakra-ui/react'
import { FiShoppingCart } from 'react-icons/fi'

const CartButton = () => {
  return (
    <IconButton
      aria-label="Carrito"
      icon={<FiShoppingCart />}
      borderRadius="full"
      size="lg"
      variant="outline"
    />
  )
}

export default CartButton 