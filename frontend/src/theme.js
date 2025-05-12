import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#181818',
        color: '#F5F5DC',
      },
    },
  },
  colors: {
    bone: {
      100: '#F5F5DC',
    },
    dark: {
      900: '#181818',
      800: '#222222',
      700: '#2c2c2c',
      600: '#333333',
      500: '#444444',
    },
    gray: {
      500: '#333333',
      600: '#444444',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: {
          bg: '#333333',
          color: '#F5F5DC',
          _hover: {
            bg: '#444444',
          },
        },
        outline: {
          borderColor: '#444444',
          color: '#F5F5DC',
          _hover: {
            bg: '#222222',
          },
        },
        ghost: {
          color: '#F5F5DC',
          _hover: {
            bg: '#222222',
          },
        },
      },
    },
  },
})

export default theme 