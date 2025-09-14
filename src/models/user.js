import mysql from 'mysql2/promise'
import { userTabla } from '../helpers/sequelize.js'

// configurar conexion a la base de datos
const database = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mvc'
}

const conection = await mysql.createConnection(database)

conection.connect((err) => {
  if (err) {
    console.error('Error de conexion a la base de datos: ' + err.stack)
  }
})

export default class user {
  static async getAll () {
    // const [users] = await conection.query('SELECT * FROM contacts')
    const users = await userTabla.findAll()
    this.data = users
    return this
  }

  static async getById (id) {
    // const [user] = await conection.query('SELECT * FROM contacts where id = ?', [id])
    const user = await userTabla.findOne({ where: { id } })
    this.data = [user]
    return this
  }

  static async create (data) {
    // await conection.query('insert into contacts ( name, email, phone) values (?,?,?)', [data.name, data.email, data.phone])
    return await userTabla.create(data)
  }

  static async update (id, data) {
    // let { query, values } = object2Sql(data)
    // values = [...values, id]
    // await conection.query(`UPDATE contacts SET ${query} where id = ?`, values)
    return await userTabla.update(data, { where: { id } })
  }

  static async delete (id) {
    // await conection.query('DELETE from contacts WHERE id = ?', id)
    return await userTabla.destroy({ where: { id } })
  }

  /// ORDERS
  static async orderBy (prop, ord = 'ASC') {
    /* Este codigo serviría para que se puediera hacer pipeline encadenando varias funciones.
    const data = this.data
    this.data = data.sort((a, b) => a[prop].toLowerCase().localeCompare(b[prop].toLowerCase()))
    return this
    */
    this.data = await userTabla.findAll({
      order: [
        [prop, ord]
      ]
    })
    return this
  }

  static first () {
    const data = this.data
    this.data = [data.shift()]
    return this
  }
}
