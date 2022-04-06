import express from "express";
import users from "./usersRoutes.js"
import skills from "./skillsRoutes.js"
import images from "./imageRoutes.js";
import profiles from "./profileRoutes.js";


const routes = (app) => {
    app.use(express.json(),users,skills,images,profiles);
  };
  
  export default routes