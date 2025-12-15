import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
const {DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

async function connectDB(){
    try{
        // Conneting with out DB

        const connection = await mysql.createConnection({
             host:DB_HOST,
             user:DB_USER,
             password:DB_PASSWORD,
        });

        // Create DB if not exists
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);

        // Conneting to DB
        const db = await mysql.createConnection({
             host:DB_HOST,
             user:DB_USER,
             password:DB_PASSWORD,
             database:DB_NAME
        });

        // Create table if not exists
        await db.query(`CREATE TABLE IF NOT EXISTS product_table4 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            price INT NOT NULL,
            description TEXT
            )`);

            console.log("Database and table is ready");
            return db;
    } catch(error){
        console.error("The full error object", error);
        console.error("the error message ", error.message);
        console.error("The error code ", error.code);
        process.exit(1); 

    }
}

export default connectDB;