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

    static async SignIn(req, res) {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({
                error: 'Invalid Password'
            });
        }
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        }, process.env.SECRET_KEY, {
            expiresIn: 86400
        });
        res.status(200).json({
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            },
            token: token,
            expiresIn: 86400
        });
    }

    static async User(req, res) {
        // Bearer Token
        const TOKEN = req.headers['x-access-token'];
        if (!TOKEN) {
            return res.status(401).json({
                error: 'Token not found'
            });
        }
        try {
            const decoded = jwt.verify(TOKEN, process.env.SECRET_KEY);
            const user = await User.findOne({
                where: {
                    id: decoded.id
                }
            });
            if (!user) {
                return res.status(404).json({
                    error: 'User not found'
                });
            }
            res.status(200).json({
                user: {
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
            });
        } catch (error) {
            res.status(500).json({
                error: error
            });
        }
    }
}

module.exports = AuthController;