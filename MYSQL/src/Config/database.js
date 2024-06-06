import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Database Connected Successfully");
    return connection;
  } catch (error) {
    console.error("Database Connection failed", error);
    throw error;
  }
};
export default dbConnect;
