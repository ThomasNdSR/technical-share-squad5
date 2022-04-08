import seeders from "../seeders/index.js";
import User from "../models/User.js";
import Skill from "../models/Skill.js";

export default class SeedersControllers {
  static createPopulation = (__, res) => {
    const population = [
        {model:Skill, data:seeders.skillSeed,name:"Skills"},
        {model:User, data:seeders.userSeed,name:"Users"}
    ]
    try {
      population.forEach(async(seed)=>{
          const model = seed.model
          const data = seed.data
          
          await model.insertMany(data).then(()=>{
              console.log(`${seed.name} inseridos com sucesso`)
          })
      })
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
}
