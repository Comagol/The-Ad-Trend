import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ServiceDetail from './pages/ServiceDetail'
import CartView from './pages/CartView'
import ServicesView from './pages/ServicesView'
import AboutUs from './pages/AboutUs'
import { CartProvider } from './context/CartContext'
import theme from './theme'
import Models from './pages/Models'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/servicio/:id" element={<ServiceDetail />} />
              <Route path="/carrito" element={<CartView />} />
              <Route path="/servicios" element={<ServicesView />} />
              <Route path="/nosotros" element={<AboutUs />} />
              <Route path="/modelos" element={<Models />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </ChakraProvider>
  )
}

export default App
