import { Router } from 'express'
import user from './userRoute'

const route = Router()

route.use('/user', user)

export default route
