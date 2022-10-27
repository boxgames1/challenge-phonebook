import { Context } from './model/appInterface'

export const resolvers = {
  Query: {
    getContacts: async (_: any, __: any, { prisma }: Context) => {
      return await prisma.contacts.findMany()
    },
    getContactsByLastName: async (
      _: any,
      { lastName },
      { prisma }: Context,
    ) => {
      return await prisma.contacts.findMany({
        where: {
          lastName: {
            contains: lastName,
          },
        },
      })
    },
  },
  Mutation: {
    createContact: async (
      _: any,
      { contact: { firstName, lastName, phoneNumber } },
      { prisma }: Context,
    ) => {
      return await prisma.contacts.create({
        data: {
          firstName,
          lastName,
          phoneNumber,
        },
      })
    },
    updateContact: async (
      _: any,
      { contact: { firstName, lastName, phoneNumber }, id },
      { prisma }: Context,
    ) => {
      return await prisma.contacts.update({
        where: {
          id,
        },
        data: {
          firstName,
          lastName,
          phoneNumber,
        },
      })
    },
    deleteContact: async (_: any, { id }, { prisma }: Context) => {
      await prisma.contacts.delete({
        where: {
          id,
        },
      })
      return true
    },
  },
}
