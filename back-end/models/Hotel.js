// Bruna Bispo Abatepaulo - 101200299
// COMP 3133 - Assignment 01

const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,
        required: [true, 'Please enter the Hotel ID'],
        trim: true,
        // unique: [true, 'Duplicate Hotel ID not allowed']
    },

    hotel_name: {
        type: String,
        required: [true, 'Please enter the Hotel name'],
        trim: true,
        // unique: [true, 'Duplicate Hotel name not allowed']
    },

    street: {
        type: String,
        required: [true, 'Please enter the Hotel street'],
        trim: true,
        // unique: [true, 'Duplicate Hotel street not allowed']
    },

    city: {
        type: String,
        required: [true, 'Please enter the Hotel city'],
        trim: true,
        // unique: [true, 'Duplicate Hotel city not allowed']
    },

    postal_code: {
        type: String,
        required: [true, 'Please enter the Hotel postal code'],
        trim: true,
        // unique: [true, 'Duplicate Hotel postal code not allowed']
    },

    price: {
        type: Number,
        required: [true, 'Please enter the Hotel price'],
        trim: true,
        validate(value) {
            if(value < 0.0) {
                throw new Error('Negative price are not allowed');
            }
        }
        // unique: [true, 'Duplicate Hotel price not allowed']
    },

    email: {
        type: String,
        required: [true, 'Please enter the Hotel email address'],
        trim: true,
        // unique: [true, 'Duplicate Hotel email addresses not allowed'],
        validate(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },

    user_id: {
        type: Number,
        // required: [true, 'Please enter the User ID'],
        trim: true,
        // unique: [true, 'Duplicate User ID not allowed']
    }
});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;