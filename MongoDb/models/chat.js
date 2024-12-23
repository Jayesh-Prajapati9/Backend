const { kMaxLength } = require('buffer');
const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    message: {
        type: String,
        maxLength :50,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type : String,
        required: true,
    },
    timestamp: {
        type : Date,
        required: true,
    },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;