import bcrypt from "bcrypt";
import Err from "../err/index.js";
import User from "../models/User.js"

class ValidateUser {
  static async validate(register) {
    const custoHash = 12;
    const newUser = register;
    const values = Object.values(newUser);

    if (Object.Keys(newUser).length === 0) {
      throw new Err();
    }
    values.forEach((value) => {
      if (typeof value !== "string" || value.length === 0 || value.length < 3) {
        throw new Err();
      }
    });
    newUser.password = await bcrypt.hash(register.password, custoHash);
    return newUser;
  }

  static async authenticate(senha, dados) {
    return bcrypt.compare(senha, dados.senha);
  }

  static async checkRegistration(email) {
    const user = await User.findOne({ email: email });
    return user
  }
}

export default ValidateUser;