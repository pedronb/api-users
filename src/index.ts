import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`listening on port ${port}!`));
