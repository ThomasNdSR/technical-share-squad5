import express from "express";
import appointments from "./appointmentsRoutes.js";
import images from "./imageRoutes.js";
import available from "./availableRoutes.js";
import seeders from "./seedersRoutes.js"
import skills from "./skillsRoutes.js";
import users from "./usersRoutes.js";

const routes = (app) => {
  app.use(express.json(), users, skills, images, available, appointments,seeders);
};

export default routes;
