var mongoose = require('mongoose');

const Users = mongoose.Schema({
    name: {
        type: String,
        required: true.
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user']
    },
});

module.exports = mongoose.model('Users', Users);
