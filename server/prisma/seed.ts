import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()
async function main() {
  const contact = await prisma.contacts.create({
    data: {
      firstName: `Eric`,
      lastName: `Elliot`,
      phoneNumber: '222-111-444',
    },
  })

  console.log({ contact })
}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
