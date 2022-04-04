import { Router } from "express";
import skillControllers from "../controllers/skillControllers.js";

const router = Router();
router
  .get("/skill", skillControllers.listRegister)
  .post("/skill", skillControllers.register)
  .put("/skill/:id", skillControllers.updateRegistry)
  .delete("/skill/:id", skillControllers.deleteRegistry);

export default router;