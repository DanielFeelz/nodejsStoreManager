import { PrismaClient } from '@prisma/client'
import {
  User,
  UserFindByEmail,
  UserFindResponse,
} from '../interfaces/userInterface'

const prisma = new PrismaClient()

class UserRepository {
  async signin(newUser: User): Promise<void> {
    await prisma.user.upsert({
      create: {
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
      },
      select: {
        id: true,
        email: true,
        name: true,
        store: true,
        password: true,
      },
      update: {},
      where: {
        email: newUser.email,
      },
    })
  }

  async find(user: UserFindByEmail): Promise<UserFindResponse | null> {
    return await prisma.user.findUnique({
      where: {
        email: user.email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        store: true,
      },
    })
  }
}

export default UserRepository
