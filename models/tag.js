const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Tags", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        createdAt: "created_At",
        updatedAt: "modified_At",
    });
}