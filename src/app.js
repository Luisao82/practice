import path from 'node:path'
import express, { json } from 'express'
import { routerUsers } from './routers/user.js'

export function init () {
  const app = express()
  const port = 3001

  const __dirname = path.resolve()
  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, 'views'))

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
