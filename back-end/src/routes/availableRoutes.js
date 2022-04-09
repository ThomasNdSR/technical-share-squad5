import { Router } from "express";
import AvailableControllers from "../controllers/AvailableControllers.js";

const router = Router();
router
  .post("/user/available/:id", AvailableControllers.register);

export default router;