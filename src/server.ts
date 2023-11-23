import express, { type Request, type Response } from 'express'

const app = express()

app.get('/', (_request: Request, response: Response) => {
  response.send({ hello: 'word' })
})

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`)
})
