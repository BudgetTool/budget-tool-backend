const mongoose = require('mongoose');

const Message = mongoose.Schema({
    text: { type: String, required: true },
});

module.exports = mongoose.model('Message', Message);