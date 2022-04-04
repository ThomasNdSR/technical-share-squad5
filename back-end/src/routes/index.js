import express from "express";
import users from "./usersRoutes.js"
import skills from "./skillsRoutes.js"


const routes = (app) => {
    app.use(express.json(),users,skills);
  };
  
  export default routes