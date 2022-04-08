import Profile from "../models/Profile.js";
import User from "../models/User.js"

export default class ProfileControllers {
  static listRegister = (__, res) => {
    Profile.find((err, item) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(200).json(item);
      }
    });
  };
  static register = async (req, res) => {
    const id = req.params.id
    const data = new Profile(req.body);

    const user = await User.findOne({ _id: id });
    user.profile = data
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