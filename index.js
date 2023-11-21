import app from "./src/app.js";
import { sequelize } from "./src/DB/DB.js";
import "./src/models/Project.js";
import "./src/models/Contact.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.DB_PORT || 5432;

async function main() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
