import { Router } from "express";
import UsersControllers from "../controllers/usersControllers.js";

const router = Router();
router
  .get("/user", UsersControllers.userRegistered)
  .get("/user/:id",UsersControllers.userProfile)
  .post("/user", UsersControllers.authenticateUser)
  .post("/user/create", UsersControllers.createUser)
  .put("/user/skill/:id",UsersControllers.updateSkillUser)

export default router;