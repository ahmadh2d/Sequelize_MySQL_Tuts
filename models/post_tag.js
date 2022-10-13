const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Posts_Tags", { }, {
        timestamps: false
    });
}