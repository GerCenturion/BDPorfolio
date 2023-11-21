import { Router } from "express";
import sendEmailController from "../controllers/sendEmailController.js";
// const sendEmailValidation = require('../middlewares/sendEmailValidation');

const MailRoutes = Router();

MailRoutes.post("/sendemail/:email", (req, res) =>
  sendEmailController(req, res)
);

export default MailRoutes;
