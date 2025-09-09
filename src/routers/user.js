import express from 'express'
import { userController as user } from '../controllers/userController.js'

export const routerUsers = express.Router()

routerUsers.get('/', user.getAll)
routerUsers.get('/:id', user.getById)
routerUsers.post('/', user.create)
