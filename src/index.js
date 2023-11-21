import app from "./app.js";
import { sequelize } from "./DB/DB.js";
import "./models/Project.js";
import "./models/Contact.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.DB_PORT || 5432;

async function main() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(DB_PORT, () => {
      console.log(`Server is listening on port ${DB_PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
