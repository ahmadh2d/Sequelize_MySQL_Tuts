const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Posts", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
        },
        content: {
            type: DataTypes.STRING,
        },
        //user_Id: DataTypes.INT
    }, {
        createdAt: "created_At",
        updatedAt: "modified_At",
    });
}