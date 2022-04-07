import { Router } from "express";
import SkillsControllers from "../controllers/SkillControllers.js";

const router = Router();
router
  .get("/skill", SkillsControllers.listRegister)
  .post("/skill", SkillsControllers.register)
  .put("/skill/:id", SkillsControllers.updateRegistry)
  .delete("/skill/:id", SkillsControllers.deleteRegistry);

export default router;