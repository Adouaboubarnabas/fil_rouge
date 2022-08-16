const mongoose = require('mongoose');
const mongooseuniquevalidator = require('mongoose-unique-validator');

userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now}
});

mongoose.plugin(mongooseuniquevalidator);
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
