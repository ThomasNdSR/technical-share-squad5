import Err from "../err/index.js";
import InvalidArgument from "../err/InvalidArgument.js";
import User from "../models/User.js";
import ValidateUser from "../class/ValidateUser.js";

export default class UsersControllers {
  static userRegistered = (__, res) => {
    User.find((err, item) => {
      if (err) {
        res.status(500).json(err.message);
      }
      res.status(200).json(item);
    });
  };

  static createUser = async (req, res) => {
    try {
      const data = await ValidateUser.validate(req.body);
      const verif = await ValidateUser.checkRegistration(data.email);
      if (!verif) {
        const user = await new User(data);
        user.save((err) => {
          if (err) {
            throw new Error(err);
          } else {
            res.status(201).json({ message: "Usuario cadastrado com Sucesso" });
          }
        });
      } else {
        throw new Err.InvalidArgument("Email já cadastrado");
      }
    } catch (err) {
      if (err instanceof InvalidArgument) {
        res.status(406).json(err.message);
      } else {
        res.status(500).json(err.message);
      }
    }
  };
}
