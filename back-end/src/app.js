import express from "express";
import routes from "./routes/index.js";
import config from "./config/config.development.json" assert { type: "json" };
import dbConect from "./config/dbConnect.js";

const app = express();

dbConect(
  `mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`
);

const port = process.env.PORT || 8000;

app.use(express.json());
routes(app);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
export default app;
