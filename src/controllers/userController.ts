import { Request, Response } from 'express'
import UserService from '../services/userService'

const userService = new UserService()

class UserController {
  async signin(req: Request, res: Response): Promise<void> {
    const response = await userService.signin(req.body)
    res.json(response)
  }

  async find(req: Request, res: Response): Promise<void> {
    const response = await userService.find(req.body)
    res.json(response)
  }
}

export default UserController
