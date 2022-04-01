import { Router } from "express";
import UsersControllers from "../controllers/usersControllers.js";

const router = Router();
router
  .get("/user", UsersControllers.userRegistered)
  .post("/user/create", UsersControllers.createUser)

export default router;