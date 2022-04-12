import { Router } from "express";
import upload from "../middleware/uploadImage.js";
import imagesControllers from "../controllers/ImagesControllers.js";

const router = Router();
router
  .get("/image",upload.none(),imagesControllers.listRegister)
  .post("/image/:id",upload.single('profile-image'),imagesControllers.registerImage)


export default router;