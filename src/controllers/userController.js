import { IsEmpty } from '../helpers/validations.js'
import user from '../models/user.js'
import { validateParcialUser, validateUser } from '../schemas/users.js'

export class userController {
  static getAll = async (req, res) => {
    // const { data } = (await user.getAll()).orderBy('name')
    const { data } = await user.orderBy('name', 'DESC')
    res.status(200).json(data)
    // res.render('list', { data })
  }

  static getById = async (req, res) => {
    const { id } = req.params
    const { data } = await user.getById(id)
    res.status(200).json(data)
    // res.render('list', { data })
  }

  static create = async (req, res) => {
    const result = validateUser(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    res.json(await user.create(result.data))
  }

  static update = async (req, res) => {
    const { id } = req.params

    const userExists = (await user.getById(id)).data
    if (!IsEmpty(userExists)) {
      return res.status(404).json({ message: 'User not found' })
    }

    const result = validateParcialUser(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    res.status(200).json(await user.update(id, result.data))
  }

  static delete = async (req, res) => {
    const { id } = req.params

    res.status(203).json(await user.delete(id))
  }
}
