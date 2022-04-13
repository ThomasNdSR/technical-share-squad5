import seeders from "../seeders/index.js";
import User from "../models/User.js";
import Skill from "../models/Skill.js";
import Image from "../models/Image.js";

export default class SeedersControllers {
  static createCollection = (__, res) => {
    const population = [
        {model:Skill, data:seeders.skillSeed,name:"Skills"},
        {model:Image, data:seeders.imageSeed,name:"Images"},
        {model:User, data:seeders.userSeed,name:"Users"},
    ]
    try {
      population.forEach(async(seed)=>{
          const model = seed.model
          const data = seed.data
          
          await model.insertMany(data).then(()=>{
              console.log(`${seed.name} inseridos com sucesso`)
          })
      })
      res.status(201).send({message:"Banco Populado com sucesso!"})
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
  static dropCollection = (__, res) => {
    const population = [
        {model:Skill, name:"skills"},
        {model:Image, name:"images"},
        {model:User, name:"users"},
    ]
    try {
      population.forEach((seed)=>{
         seed.model.db.dropCollection(seed.name).then(()=>{
          console.log(`${seed.name} removido com sucesso`)
        }) 
      
      })
      res.status(201).send({message:"Dados limpados com sucesso!"})
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
}
