import { Sequelize } from "sequelize"

const dbContent = new Sequelize("user_if_e", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

export default dbContent;