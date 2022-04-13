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
        img: 1,
        role:1,
        skill: 1,
        available: 1,
        project:1
      })
      .populate({
        path: "img skill",
        options: { _recursed: true },
      })
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
      .select({
        name: 1,
        img: 1,
        role:1,
        skill: 1,
        email: 1,
        available: 1,
        project:1,
        favorite: 1,
      })
      .populate({
        path: "img skill",
        options: { _recursed: true },
      })
      .populate("favorite", "name img skill role available project")
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
  static includeFavorite = async (req, res) => {
    const newFavorite = req.params.idFavorite;
    const user = await User.findOne({ _id: req.params.id });
    user.favorite.push(newFavorite);
    user.save((err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).json({ message: "favorito incluso com sucesso" });
      }
    });
  };
  static removeFavorite = async (req, res) => {
    const disfavor = req.params.idFavorite;
    const user = await User.findOne({ _id: req.params.id });
    user.favorite.splice(user.favorite.indexOf(disfavor), 1);
    user.save((err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).json({ message: "favorito removido com sucesso" });
      }
    });
  };
  static filterSearch = async (req, res) => {
    const skill = req.query.skill;
    // const weekdayNow = new Date().getDay()
    const weekdayNow = 6;
    const hourNow = new Date().getHours();

    User.find({ skill: skill, "available.week.weekday": weekdayNow })
      .select({
        name: 1,
        img: 1,
        skill: 1,
        available: 1,
      })
      .populate({
        path: "img skill",
        options: { _recursed: true },
      })
      .exec((err, users) => {
        res.status(200).send(users);
      });
  };
}
