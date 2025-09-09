export class userController {
  static getAll = (req, res) => {
    res.send('Mostrar todos')
  }

  static getById = (req, res) => {
    const { id } = req.params
    res.send(`La id del usuario es ${id}`)
  }

  static create = (req, res) => {
    const { name } = req.body
    res.status(201)
    res.send(`usuario creado con el nombre ${name}`)
  }
}
