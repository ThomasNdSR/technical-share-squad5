import { Router } from "express";
import upload from "../middleware/uploadImage.js";
import imagesControllers from "../controllers/imagesControllers.js";

const router = Router();
router
  .post("/image/:id",upload.single('profile-image'),imagesControllers.registerImage)


export default router;