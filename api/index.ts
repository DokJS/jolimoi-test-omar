import express, { Express, Request, Response } from 'express'
import { convertToRoman } from './utils/convertToRoman'
import { sseMiddleware } from 'express-sse-middleware'
import cors from 'cors'

const app: Express = express()
const port = process.argv[2] || 8000

app.use(cors())
app.use(sseMiddleware)

app.get('/convert/:id', (req: Request, res: Response) => {
    const number = parseInt(req.params.id)
    const roman = convertToRoman(number)
    res.status(200).send({ romanValue: roman })
})

app.get('/convertsse/:id', (req: Request, res: Response) => {
    const number = parseInt(req.params.id)
    const roman = convertToRoman(number)
    const sse = res.sse()
    setTimeout(() => {
        sse.send(roman.toString())
    }, 1000)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
