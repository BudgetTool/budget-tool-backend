const mongoose = require('mongoose');

module.exports = {
    connectTo: function () {
        return mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
    },
};