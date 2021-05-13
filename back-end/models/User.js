// Bruna Bispo Abatepaulo - 101200299
// COMP 3133 - Assignment 01

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: [true, 'Please enter the User ID'],
        trim: true,
        unique: [true, 'Duplicate User ID not allowed']
    },

    username: {
        type: String,
        required: [true, 'Please enter the username'],
        trim: true,
        unique: [true, 'Duplicate username not allowed']
    },

    password: {
        type: String,
        required: [true, 'Please enter the password'],
        trim: true,
        // unique: [true, 'Duplicate password not allowed']
    },

    email: {
        type: String,
        required: [true, 'Please enter the Hotel email address'],
        trim: true,
        unique: [true, 'Duplicate Hotel email addresses not allowed'],
        validate(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;