const User = require('../../Models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthController {
    static async SignUp(req, res) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            role: req.body.role
        })
            .then((response) => {
                res.status(200).json({
                    message: 'User created successfully'
                });
            })
            .catch((err) => {
                res.status(500).json({
                    error: err
                });
            })
    }
}

module.exports = AuthController;