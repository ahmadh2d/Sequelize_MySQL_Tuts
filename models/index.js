const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sequelize_tut_db1", "root", "1234", {
    port: 3306,
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log("Connected to MySQL DB Successfully");
}).catch((err) => {
    console.log("Error in connecting to DB: ", err)
});

const db = {
    sequelize: sequelize,
    Sequelize: Sequelize
};

db.users = require("./users")(sequelize, DataTypes)

db.sequelize.sync()
.then(() => {
    console.log("Synced! Successfully...")
})
.catch((error) => {
    console.error("Oops! Sync Failed...", error);
});

module.exports = db;