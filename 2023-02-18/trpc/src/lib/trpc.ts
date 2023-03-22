import {httpLink} from '@trpc/client'
import {createTRPCNext} from '@trpc/next'

import type {AppRouter} from '#/pages/api/trpc/[trpc]'

export default createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpLink({
          url: 'http://localhost:3000/api/trpc',
        }),
      ],
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      },
    }
  },
})
