import { Router } from "express";
import UsersControllers from "../controllers/UsersControllers.js";

const router = Router();
router
  .get("/user", UsersControllers.userRegistered)
  .get("/user/search",UsersControllers.filterSearch)
  .get("/user/:id",UsersControllers.userProfile)
  .post("/user", UsersControllers.authenticateUser)
  .post("/user/create", UsersControllers.createUser)
  .post("/user/:id/favorite/:idFavorite", UsersControllers.includeFavorite)
  .put("/user/skill/:id",UsersControllers.updateSkillUser)
  .put("/user/project/:id",UsersControllers.updateProjectlUser)
  .delete("/user/:id/favorite/:idFavorite", UsersControllers.removeFavorite)

export default router;