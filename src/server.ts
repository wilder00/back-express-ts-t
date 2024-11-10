import Person from '@/database/models/Person'
import { sum } from '@/utils/sum'
import express from 'express'
import type { AddressInfo } from 'net'
import dbConnection from './database/sequelize'
import config from './global.config'

const app = express()
const PORT = config.server.port
app.use(express.json({ limit: 50000 }))
app.use(express.urlencoded({ extended: true }))

dbConnection.authenticate()

app.get('/', (_request, response) => {
  response.status(200).send('Hello World 2')
})
app.post('/', async (request, response) => {
  const { name } = request.body

  const person = await Person.create({ name })

  response.json(person)
})

const appServer = app.listen(PORT, () => {
  const address = appServer.address() as AddressInfo
  const port = address.port
  console.log('Example app listening at port %s', port)
  sum(1, 2)
})

export default appServer
