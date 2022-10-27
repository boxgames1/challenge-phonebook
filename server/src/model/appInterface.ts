import { PrismaClient } from '@prisma/client'

export interface Context {
  req: any
  prisma: PrismaClient
}
