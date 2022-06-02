const { Schema, model } = require('mongoose');

const User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    reg_date: { type: String, required: true },
    last_login_date: { type: String, required: false },
    status: { type: String, required: true },
});

module.exports = model('User', User);