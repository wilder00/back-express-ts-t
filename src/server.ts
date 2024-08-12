import { sum } from '@/utils/sum'
import dotenv from 'dotenv'
import express from 'express'
import type { AddressInfo } from 'net'
// configures dotenv to work in your application
dotenv.config()
const app = express()
const PORT = process.env.PORT

app.get('/', (_request, response) => {
  response.status(200).send('Hello World 2')
})

const appServer = app.listen(PORT, () => {
  const address = appServer.address() as AddressInfo
  const port = address.port
  console.log('Example app listening at port %s', port)
  sum(1, 2)
})

export default appServer
