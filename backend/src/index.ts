import express, { Application } from "express";
import cors from "cors";
import { route } from "./routes/routes";
import dotenv from 'dotenv'

dotenv.config()

const corsOptions = {
    origin: '*',
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}

const port = process.env.PORT || 8080

const app: Application = express();
app.use(express.json());
app.use(
    cors(corsOptions)
);
app.use("/api/v1", route);

app.listen(port, () => {
    console.log(`Server Listening On Port: ${port}`)
});
