import { Router } from "express";
import SeedersControllers from "../controllers/SeedersControllers.js";

const router = Router();
router
  .get("/seed", SeedersControllers.createPopulation)


export default router;