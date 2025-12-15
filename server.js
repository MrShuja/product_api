import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import {setDB} from './models/productModel.js';


dotenv.config();
const PORT = process.env.PORT || 3000;
const startServer = async ()=>{
    try {
        const dbConnection = await connectDB();
        setDB(dbConnection);


app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
});
    } catch(error){
        console.log("fail to start server")
    }
}

// Start the server
startServer();