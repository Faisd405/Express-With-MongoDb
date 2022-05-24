var mongoose = require('mongoose');

const Users = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user',
        trim: true
    },
});

module.exports = mongoose.model('Users', Users);
