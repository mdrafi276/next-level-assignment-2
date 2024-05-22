import express, { Request, Response } from 'express'
// import cors from 'cors';

import { ProductRouter } from './modules/product/product.route'
import { orderRoute } from './modules/order/order.route'
const app = express()
app.use(express.json())

// app.use(cors());

app.use('/api/products', ProductRouter)

app.use('/api/orders', orderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running...')
})

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found!',
    status: 404,
  });
});

export default app