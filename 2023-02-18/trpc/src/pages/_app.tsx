import type {AppProps} from 'next/app'

import {ChakraProvider, Container} from '@chakra-ui/react'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import trpc from '#/lib/trpc'
import theme from '#/theme'

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <Component {...pageProps} />
      </Container>
      <ReactQueryDevtools />
    </ChakraProvider>
  )
}

export default trpc.withTRPC(App)
