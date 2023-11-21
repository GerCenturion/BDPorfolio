import express from "express";
import cors from "cors";
import projectsRouter from "./routes/ProjectsRoutes.js";
import contactRouter from "./routes/ContactRoutes.js";
import MailRoutes from "./routes/MailRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(projectsRouter);
app.use(contactRouter);
app.use(MailRoutes);

export default app;
