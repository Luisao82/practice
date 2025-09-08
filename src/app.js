import express, { json } from 'express'
import { routerUsers } from './routers/user.js'

export function init () {
  const app = express()
  const port = 3001

  app.use(json())
  app.use('/', (req, res, next) => {
    console.log('milddelware')
    next()
  })
  app.use('/users', routerUsers)

  app.listen(port, () => {
    console.log(`Servidor inicializado en http://localhost:${port}`)
  })
}
