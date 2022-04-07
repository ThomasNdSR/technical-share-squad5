import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers.js";

const router = Router();
router
  .get("/user", UsersControllers.userRegistered)
  .get("/user/:id",UsersControllers.userProfile)
  .post("/user", UsersControllers.authenticateUser)
  .post("/user/create", UsersControllers.createUser)
  .post("/user/:id/up/:idFavorite", UsersControllers.includeFavorite)
  .post("/user/:id/down/:idFavorite", UsersControllers.removeFavorite)
  .put("/user/skill/:id",UsersControllers.updateSkillUser)

export default router;