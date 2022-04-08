import Appointment from "../models/Appointment.js";

export default class AppointmentsControllers {
  static listRegister = (req, res) => {
    const id = req.params.id
    Appointment.find({user:id})
      .populate("mentor", "name email")
      .exec((err, item) => {
        if (err) {
          res.status(500).json(err.message);
        } else {
          res.status(200).json(item);
        }
      });
  };
  static register = (req, res) => {
    const data = new Appointment(req.body);
    data.save((err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).send(data.toJSON());
      }
    });
  }
  static deleteRegistry = (req, res) => {
    const id = req.params.id;

    Appointment.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).send({ message: "Removido com sucesso" });
      }
    });
  };
}
