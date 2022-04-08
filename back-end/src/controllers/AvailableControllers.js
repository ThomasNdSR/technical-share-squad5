import Available from "../models/Available.js";
import User from "../models/User.js"

export default class AvailableControllers {
  static listRegister = (__, res) => {
    Available.find((err, item) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(200).json(item);
      }
    });
  };
  static register = async (req, res) => {
    const id = req.params.id
    const data = new Available(req.body);

    const user = await User.findOne({ _id: id });
    user.Available = data
    data.save()
    user.save((err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).send(data.toJSON());
      }
    });
  };
}