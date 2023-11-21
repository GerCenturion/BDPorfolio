import { mailer } from "../helpers/mailer.js";
import AutomaticEmail from "../helpers/AutomaticEmail.js";

const sendEmailController = async (req, res) => {
  const { email } = req.params;
  const { name, message } = req.body;

  try {
    const transporter = await mailer();
    const mailOptions = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      replyTo: process.env.EMAIL,
      subject: "Mensaje desde el formulario de contacto",
      html: AutomaticEmail({ name, message }),
    });

    const notificationMailOptions = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: req.params.email,
      subject: `Contact Porfolio ${name}`,
      text: `Nuevo mensaje de ${name}:\n\n${message}`,
    });

    res.status(200).json({ ok: true, message: "Mensaje enviado" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default sendEmailController;
