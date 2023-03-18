import express, { Express, Request, Response } from 'express'
import { convertToRoman } from './utils/convertToRoman'

import cors from 'cors'

const app: Express = express()
const port = process.argv[2] || 8000

app.use(cors())

app.get('/convert/:id', (req: Request, res: Response) => {
    const number = parseInt(req.params.id)
    const roman = convertToRoman(number)
    res.status(200).send({ romanValue: roman })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
