import express from "express";
import projectsRouter from "./routes/ProjectsRoutes.js";
import contactRouter from "./routes/ContactRoutes.js";

const app = express();
app.use(express.json());
app.use(projectsRouter);
app.use(contactRouter);

export default app;
