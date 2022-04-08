import { Router } from "express";
import AppointmentsControllers from "../controllers/AppointmentsControllers.js";

const router = Router();

router
  .get("/user/appointment/:id", AppointmentsControllers.listRegister)
  .post("/user/appointment/:id", AppointmentsControllers.register)
  .delete("/user/appointment/:id", AppointmentsControllers.deleteRegistry);

export default router;