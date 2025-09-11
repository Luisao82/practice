import { IsEmpty } from '../helpers/validations.js'
import User from '../models/user.js'
import { validateParcialUser, validateUser } from '../schemas/users.js'

export class userController {
  static getAll = async (req, res) => {
    const usuarios = await User.getAll()
    res.send(usuarios)
  }

  static getById = async (req, res) => {
    const { id } = req.params
    const usuario = await User.getById(id)
    res.json(usuario)
  }

  static create = async (req, res) => {
    const data = req.body

    const result = validateUser(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    await User.create(result.data)
    res.json(`usuario creado con el nombre ${data.name} creado`)
  }

  static update = async (req, res) => {
    const { id } = req.params

    const hasUser = await User.getById(id)

    if (!IsEmpty(hasUser)) {
      return res.status(404).json({ message: 'user not found' })
    }

    const result = validateParcialUser(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    res.status(202)
    await User.update(id, result.data)
    res.send(`usuario ${id} modificado`)
  }
}
