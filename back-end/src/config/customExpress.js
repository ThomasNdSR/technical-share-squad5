import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import routes from "../routes/index.js";

export default () => {
  const app = express();
  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use(express.static("public"));
    routes(app)
    
    return app
};