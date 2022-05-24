const User = require('../../Models/Users');

class SignUpController {
    static async checkEmail(req, res, next) {
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({
                    error: 'Email already exists'
                });
            }
            next();
        });
    }
}

module.exports = SignUpController;