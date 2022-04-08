import Image from "../models/Image.js";
import User from "../models/User.js";

export default class ImageController {
  static registerImage = async (req, res) => {
    const id = req.params.id;
    if (req.file) {
      new Image({
        originalName: req.file.originalname,
        path: req.file.path,
      })
        .save()
        .then(async (item) => {
          const user = await User.findOne({ _id: id });
          user.img = item._id;
          await user.save((err) => {
            if (err) {
              res.status(500).json(err.message);
            } else {
              res.status(200).send({ message: "Imagem inclusa com sucesso" });
            }
          });
        });
    } else {
      return res.status(400).json({
        message: "Upload não foi realizado com sucesso",
      });
    }
  };
}
