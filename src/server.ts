import express, { type Request, type Response } from 'express'

const app = express()

app.get('/', (_request: Request, response: Response) => {
  response.send({ hello: 'word' })
})

app.listen(3000, () => {
  console.log(`App is running`)
})
