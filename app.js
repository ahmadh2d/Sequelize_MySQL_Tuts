const express = require("express");
const userController = require("./controllers/UserController");

require("./models");

const port = 3000;

const app = express();

app.get("/addUser", (req, res) => {
    userController.addUser(req, res)
});

app.get("/addPosts", (req, res) => {
    userController.addPosts(req, res)
});

app.get("/rawQuery", (req, res) => userController.rawSQLQuery(req, res));

app.get("/userHasOne", (req, res) => userController.userHasOne(req, res));

app.get("/userHasMany", (req, res) => userController.userHasMany(req, res));

app.get("/postHasOne", (req, res) => userController.postHasOne(req, res));

app.get("/manyToMany", (req, res) => userController.manyToMany(req, res));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

