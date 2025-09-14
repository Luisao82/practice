import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('mvc', 'root', '', {
  dialect: 'mysql',
  logging: false
})

try {
  await sequelize.authenticate()
  // console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

export const userTabla = sequelize.define(
  'contacts',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    }
  },
  {
    createdAt: false,
    updatedAt: false
  }
)
