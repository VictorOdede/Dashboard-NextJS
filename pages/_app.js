import { ChakraProvider, extendTheme } from '@chakra-ui/react'



function MyApp({ Component, pageProps }) {
  const myTheme = extendTheme({
    colors: {},
    fonts: {},
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    }
  })
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp
