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

const users = require("./users")(sequelize, DataTypes);
const posts = require("./post")(sequelize, DataTypes);
const tags = require("./tag")(sequelize, DataTypes);
const posts_tags = require("./post_tag")(sequelize, DataTypes);

users.hasMany(posts, { as: "postsInfo" });
posts.belongsTo(users, {});

// Many-to-Many
posts.belongsToMany(tags, { through: "Posts_Tags" });
tags.belongsToMany(posts, { through: "Posts_Tags" });

sequelize.sync({ force: false })
.then(() => {
    console.log("Synced! Successfully...");
})
.catch((error) => {
    console.error("Oops! Sync Failed...", error);
});

const db = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    users,
    posts,
    tags,
    posts_tags
};

module.exports = db;