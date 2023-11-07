import { Router } from "express";
import {
  createContact,
  getContacts,
} from "../controllers/ContactController.js";

const contactRouter = Router();

contactRouter.get("/contact", getContacts);
contactRouter.post("/contact", createContact);

export default contactRouter;
