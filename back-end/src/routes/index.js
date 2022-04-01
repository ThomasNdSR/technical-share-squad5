import express from "express";
import users from "./users.js"


const routes = (app) => {
    app.use(express.json(),users);
  };
  
  export default routes