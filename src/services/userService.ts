import {
  User,
  UserFindByEmail,
  UserFindResponse,
} from '../interfaces/userInterface'
import UserRepository from '../repositories/userRepository'

class UserService {
  private userRepository: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  async signin(newUser: User): Promise<void> {
    await this.userRepository.signin(newUser)
  }

  async find(user: UserFindByEmail): Promise<UserFindResponse | null> {
    return await this.userRepository.find(user)
  }
}

export default UserService
