import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.json(contacts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createContact = async (req, res) => {
  const { name, Email, message } = req.body;

  try {
    const newContact = await Contact.create({
      name,
      Email,
      message,
    });

    res.json(newContact);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
