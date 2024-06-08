import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app

app.listen(PORT, () => {console.log(`Server is running on port: http://localhost:${PORT}`)});