const { QueryTypes } = require("sequelize");
const db = require("../models/");

const Users = db.users;
const Posts = db.posts;
const Tags = db.tags;

module.exports = {
    addUser: async (req, res) => {
        let data;

        try {
            data = await db.users.create({
                name: "anny1",
                email: "anny1@gmail.com",
                gender: "f",
            });

            await db.users.create({
                name: "anny2",
                email: "anny2@gmail.com",
                gender: "female",
            });
        } catch (error) {
            data = error.errors.map(e => e.message).join(". ");
            console.log(data);

        }

        return res.status(200).send(data);
    },
    
    addPosts: async (req, res) => {
        let data;

        try {
            data = await Posts.create({
                name: "article 1",
                title: "Article Name 1",
                content: "xyz",
                userId: 1
            });

            // await db.users.create({
            //     name: "anny2",
            //     email: "anny2@gmail.com",
            //     gender: "female",
            // });
        } catch (error) {
            data = error.errors.map(e => e.message).join(". ");
            console.log(data);

        }

        return res.status(200).send(data);
    },

    rawSQLQuery: async (req, res) => {
        const data = await db.sequelize.query("SELECT * FROM users as u WHERE u.gender in (:gender)", {
            type: QueryTypes.SELECT,
            replacements: {
                gender: ['female', 'male']
            },
            // bind: {
            //     gender: 'f%' // use $gender
            // },
            // replacements: {
            //     gender: 'female'
            // },
            // raw: true,
            // model: db.users,
            // mapToModel: true
        });

        let response = {
            type: "Raw Query",
            data: data
        }

        res.status(200).send(response);
    },

    userHasOne: async (req, res) => {
        const users = await Users.findAll({
            include: Posts
        })

        return res.status(200).send(users);
    },
    
    userHasMany: async (req, res) => {
        const users = await Users.findAll({
            include: {
                model: Posts,
                as: "postsInfo"
            }
        })

        return res.status(200).send(users);
    },
    
    postHasOne: async (req, res) => {
        const posts = await Posts.findAll({
            include: {
                model: Users,
                attributes: ["name"],
            },
        })

        return res.status(200).send(posts);
    },

    manyToMany: async (req, res) => {
        const posts = await Tags.findAll({
            include: [{
                model: Posts,
                attributes: ["name"],
            }],
        })

        return res.status(200).json(posts);
    }
};
