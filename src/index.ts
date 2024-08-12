import { sum } from '@/utils/sum'
import dotenv from 'dotenv'
import express from 'express'

// configures dotenv to work in your application
dotenv.config()
const app = express()

const PORT = process.env.PORT

app.get('/', (_request, response) => {
  response.status(200).send('Hello World')
})

app
  .listen(PORT, () => {
    console.log('Server running at PORT: ', PORT)
    sum(1, 2)
  })
  .on('error', (error) => {
    // gracefully handle error
    throw new Error(error.message)
  })
