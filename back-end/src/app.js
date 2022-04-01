import express from "express";
import routes from "./routes/index.js";
import dbConect from "./config/dbConnect.js";

const app = express();

if (process.env.PORT) {
  dbConect(
    `mongodb://mongo-technical_share:27017/technical_share`
  );
} else {
  dbConect(
    `mongodb+srv://squad5:HN84PkpqeGmNsP0a@cluster0.qzefe.mongodb.net/technical_share`
  );
}

const port = process.env.PORT || 8000;

app.use(express.json());
routes(app);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
export default app;
