const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("users", {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: "test_email@tmail.com",
            allowNull: false,
            unique: true
        },
        gender: {
            type: DataTypes.STRING,
            validate: {
                isIn: {
                    args: [['male', 'female', 'm', 'f']],
                    msg: "Value should be male/female/m/f"
                }
            }
        }
    }, {
        //timestamps: false/true
        //updatedAt: 'updated_At' | false/true,
    });
}