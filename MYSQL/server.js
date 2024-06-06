import express from "express";
import dbConnect from "./src/Config/database.js";
import dotenv from "dotenv";
import { User } from "./src/Routes/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/user", User.route);
// Connect to the database
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
