import "reflect-metadata";
import express from "express";
const app = express();
import "./database";
import { routes } from "./routes";

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running"));