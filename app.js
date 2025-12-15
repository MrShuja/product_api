import express from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

app.get('/', (req, res) =>{
    res.send("Welcome to the product API")

})

export default app;