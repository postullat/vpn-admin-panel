const db = require("../models");
const config = require("../config/db.config");
const User = db.user;

const Op = db.Sequelize.Op;

const userController = {
    async getUsers(req, res) {
            // Save User to Database
        User.findAll()
            .then(users => {
                console.log(users);
                res.render('users', {users, isError: false});
            })
            .catch(err => {
                console.error('Error:', err);
                res.render('users', {users: [], isError: true});
            });

    },

    async getUserById(req, res) {
        // Logic to get a user by ID
        // Example: User.findById(req.params.id)
        res.status(200).send(`User with ID ${req.params.id}`);
    },

    async createUser(req, res) {
        // Logic to create a user
        // Example: User.create(req.body)
        res.status(201).send('User created');
    }
}

module.exports = userController;