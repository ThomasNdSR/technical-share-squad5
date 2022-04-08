import customExpress from "./config/customExpress.js";
import dbConect from "./config/dbConnect.js";
import dbConfig from "./config/dbConfig.js";

const port = process.env.PORT || 8000;

if (process.env.PORT) {
  dbConect(`mongodb://mongo-technical_share:27017/${dbConfig.database}`);
} else {
  dbConect(
    `mongodb+srv://squad5:${dbConfig.key}@cluster0.qzefe.mongodb.net/${dbConfig.database}`
  );
}
const app = customExpress();
app.listen(port, () => console.log(`servidor rodando na porta ${port}`));
export default app;
