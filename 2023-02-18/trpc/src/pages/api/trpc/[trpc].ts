import {z} from 'zod'

import {initTRPC} from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'

import prisma from '#/lib/prisma'

const t = initTRPC.create()
const appRouter = t.router({
  todos: t.router({
    all: t.procedure
      .input(
        z
          .object({
            completed: z.boolean().optional(),
          })
          .optional()
      )
      .query(({input}) => {
        return prisma.todo.findMany({
          select: {
            completed: true,
            id: true,
            title: true,
          },
          where: {
            completed: input?.completed,
          },
        })
      }),
    create: t.procedure
      .input(
        z.object({
          title: z.string(),
        })
      )
      .mutation(async ({input}) => {
        await prisma.todo.create({
          data: {
            title: input.title,
          },
        })
      }),
  }),
})

export type AppRouter = typeof appRouter

export default trpcNext.createNextApiHandler({
  router: appRouter,
})
