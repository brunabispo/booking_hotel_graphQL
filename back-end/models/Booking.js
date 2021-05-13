// Bruna Bispo Abatepaulo - 101200299
// COMP 3133 - Assignment 01

const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    booking_id: {
        type: Number,
        required: [true, 'Please enter the Booking ID'],
        trim: true,
        unique: [true, 'Duplicate Booking ID not allowed']
    },

    hotel_name: {
        type: String,
        required: [true, 'Please enter the Hotel name'],
        trim: true,
    },

    username: {
        type: String,
        required: [true, 'Please enter username'],
        trim: true,
    },

    booking_date: {
        type: String,
        required: [true, 'Please enter the date the booking was made'],
        trim: true,
        // unique: [true, 'Duplicate date not allowed']
    },

    booking_start: {
        type: String,
        required: [true, 'Please enter the start date of the booking'],
        trim: true,
        // unique: [true, 'Duplicate date not allowed']
    },

    booking_end: {
        type: String,
        required: [true, 'Please enter the end date of the booking'],
        trim: true,
        // unique: [true, 'Duplicate date not allowed']
    },

    // user_id: {
    //     type: Number,
    //     required: [true, 'Please enter the User ID'],
    //     trim: true,
    //     // unique: [true, 'Duplicate User ID not allowed']
    // }
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;