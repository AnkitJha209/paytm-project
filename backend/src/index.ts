import express, { Application } from "express";
import cors from "cors";
import { route } from "./routes/routes";

const app: Application = express();
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use("/api/v1", route);

app.listen(3000);
