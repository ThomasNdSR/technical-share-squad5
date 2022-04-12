import { Router } from "express";
import SeedersControllers from "../controllers/SeedersControllers.js";

const router = Router();
router
  .get("/seed", SeedersControllers.createCollection)
  .delete("/seed", SeedersControllers.dropCollection)


export default router;