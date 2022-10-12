const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: "test_email@tmail.com"
        },
        Gender: DataTypes.STRING
    });
}