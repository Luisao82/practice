import mysql from 'mysql2/promise'

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

export default class User {
  static async getAll () {
    const [users] = await conection.query('SELECT * FROM contacts')
    return users
  }

  static async getById (id) {
    const [users] = await conection.query('SELECT * FROM contacts where id = ?', [id])
    return users
  }

  static async create (data) {
    await conection.query('insert into contacts ( name, email, phone) values (?,?,?)', [data.name, data.email, data.phone])
  }

  static async update (id, data) {
    const query = Object.keys(data).map((element) => `${element} = ?`).join(', ')
    const values = [...Object.values(data), id]

    await conection.query(`UPDATE contacts SET ${query} where id = ?`, values)
  }
}
