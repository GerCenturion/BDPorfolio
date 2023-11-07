import app from "./app.js";
import { sequelize } from "./DB/DB.js";
import "./models/Project.js";
import "./models/Contact.js";

async function main() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(3001);
    console.log("Server is listening on port", 3001);
  } catch (error) {
    console.error(error);
  }
}

main();
