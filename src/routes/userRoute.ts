import { Router } from 'express'
import UserController from '../controllers/userController'

const user = Router()
const userController = new UserController()

user.post('/signin', userController.signin)
user.post('/findUserByEmail', userController.find)

export default user
