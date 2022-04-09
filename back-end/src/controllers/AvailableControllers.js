import Available from "../models/Available.js";
import User from "../models/User.js"

export default class AvailableControllers {
  static register = async (req, res) => {
    const id = req.params.id
    const data = await new Available(req.body);
    const user = await User.findOne({ _id: id });
    user.available = data
    data.save()
    user.save((err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  };
}