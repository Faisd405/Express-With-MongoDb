var mongoose = require('mongoose');

const Example = mongoose.Schema({
    field1: {
        type: String,
        required: true
    },
    field2: {
        type: Number,
        required: true
    },
    field3: {
        type: Boolean,
    },
});

module.exports = mongoose.model('Example', Example);
