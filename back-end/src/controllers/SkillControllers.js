import Skill from "../models/Skill.js";

export default class SkillsControllers {
  static listRegister = (__, res) => {
    Skill.find((err, item) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(200).json(item);
      }
    });
  };
  static register = (req, res) => {
    const data = new Skill(req.body);
    data.save((err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).send(data.toJSON());
      }
    });
  };
  static updateRegistry = (req, res) => {
    const id = req.params.id;

    Skill.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Atualizado com sucesso" });
      }
    });
  };
  static deleteRegistry = (req, res) => {
    const id = req.params.id;

    Skill.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Removido com sucesso" });
      }
    });
  };
}