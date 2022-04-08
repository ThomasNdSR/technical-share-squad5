import { Router } from "express";
import AvailableControllers from "../controllers/AvailableControllers.js";

const router = Router();
router
  .get("/user/profile", AvailableControllers.listRegister)
  .post("/user/profile/:id", AvailableControllers.register);

export default router;