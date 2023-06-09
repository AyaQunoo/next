import { Sequelize } from "sequelize";
const sequelize = new Sequelize("sequelizedemo", "root", "", {
    dialect: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'm1700800800',
    database: 'users',
});

export default sequelize;