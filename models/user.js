import sequelize from "@utils/database";
import { Sequelize, DataTypes } from "sequelize";
const User = sequelize.define(
    'users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }, img: {
        type: DataTypes.STRING,
    }
}
)
export default User;

