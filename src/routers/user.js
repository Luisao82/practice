import express from 'express'
import { user } from '../controllers/user.js'

export const routerUsers = express.Router()

routerUsers.get('/', user.getAll)
routerUsers.get('/:id', user.getById)
