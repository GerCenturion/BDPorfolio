import { Router } from "express";
import {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
  getProjectById,
} from "../controllers/ProjectsController.js";

const projectsRouter = Router();

projectsRouter.get("/projects", getProjects);
projectsRouter.post("/projects", createProject);
projectsRouter.put("/projects/:id", updateProject);
projectsRouter.delete("/projects/:id", deleteProject);
projectsRouter.get("/projects/:id", getProjectById);

export default projectsRouter;
