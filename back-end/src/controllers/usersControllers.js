import AdmToken from "../token/index.js";
import Err from "../err/index.js";
import InvalidArgument from "../err/InvalidArgument.js";
import User from "../models/User.js";
import ValidateUser from "../class/ValidateUser.js";

export default class UsersControllers {
  static userRegistered = (__, res) => {
    User.find()
      .select({
        name: 1,
        imgId: 1,
        skill: 1,
        profile: 1,
      })
      .populate({
        path: "imgId profile skill",
        options: { _recursed: true },
      }).populate('profile.$*.skill')
      .exec((err, item) => {
        if (err) {
          res.status(500).json(err.message);
        }
        res.status(200).json(item);
      });
  };
  static userProfile = (req, res) => {
    const id = req.params.id;
    User.findById(id)
      .populate("profile")
      .populate("imgId")
      .exec((err, item) => {
        if (err) {
          res.status(500).json(err.message);
        }
        res.status(200).json(item);
      });
  };

  static createUser = async (req, res) => {
    try {
      const data = await ValidateUser.validate(req.body);
      const verif = await ValidateUser.checkData(data.email);
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

  static updateSkillUser = async (req, res) => {
    const id = req.params.id;
    const skillUpdate = req.body;

    const user = await User.findOne({ _id: id });
    user.skill = skillUpdate;
    await user.save((err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(200).send({ message: "Atualizado com sucesso" });
      }
    });
  };
  static authenticateUser = async (req, res) => {
    try {
      const data = req.body;
      const user = await ValidateUser.checkData(data.email);
      if (user) {
        const verify = await ValidateUser.authenticate(data.password, user);
        if (verify) {
          const token = AdmToken.generateToken({
            email: data.email,
            senha: data.password,
          });
          res
            .status(200)
            .set("Authorization", token)
            .json({ name: user.name, email: user.email });
        } else {
          throw new Err.InvalidArgument("senha invalida");
        }
      } else {
        throw new Err.InvalidArgument("Usuario não cadastrado");
      }
    } catch (err) {
      if (err instanceof InvalidArgument) {
        res.status(401).json(err.message);
      } else {
        res.status(500).json(err.message);
      }
    }
  };
}
