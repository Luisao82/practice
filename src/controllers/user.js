export class user {
  static getAll = (req, res) => {
    res.send('Mostrar todos')
  }

  static getById = (req, res) => {
    const { id } = req.params
    res.send(`La id del usuario es ${id}`)
  }
}
