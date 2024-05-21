import express, { Request, Response } from 'express'
import { ProductRouter } from './modules/product/product.route'
const app = express()
app.use(express.json())
0
app.use('/api/products', ProductRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World...........!')
})

export default app