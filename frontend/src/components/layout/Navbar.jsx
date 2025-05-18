import { Box, Flex, Button, IconButton, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CartButton from '../CartButton'
import { FiUser } from 'react-icons/fi'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <Box bg="dark.700" px={4} py={2} borderRadius="lg" mt={2} mb={4}>
      <Flex alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Link to="/">
          <Box boxSize="40px" mr={8}>
            <Image src={logo} alt="logo" boxSize="100%" objectFit="contain" />
          </Box>
        </Link>
        {/* Navegación centrada y separada */}
        <Flex flex={1} justify="space-evenly" mx={8}>
          <Link to="/servicios"><Button variant="outline" mx={3} color="bone.100">servicios</Button></Link>
          <Link to="/clientes"><Button variant="outline" mx={3} color="bone.100">clientes</Button></Link>
          <Link to="/nosotros"><Button variant="outline" mx={3} color="bone.100">nosotros</Button></Link>
          <Link to="/modelos"><Button variant="outline" mx={3} color="bone.100">modelos</Button></Link>
        </Flex>
        {/* Carrito y login a la derecha */}
        <Flex alignItems="center" ml={8} gap={4}>
          <CartButton />
          <Link to="/login">
            <IconButton aria-label="Iniciar sesión" icon={<FiUser />} variant="outline" color="bone.100" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 