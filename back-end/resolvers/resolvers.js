// Bruna Bispo Abatepaulo - 101200299
// COMP 3133 - Assignment 01

const Hotel = require('../models/Hotel');
const Booking = require('../models/Booking');
const User = require('../models/User');

exports.resolvers = {
    Query: {
        getHotels: async (parent, args) => {
            return await Hotel.find({});
        },

        getHotelByName: async (parent, args) => {
            return await Hotel.find({'hotel_name': args.hotel_name});
        },

        getHotelByCity: async (parent, args) => {
            return await Hotel.find({'city': args.city});
        },

        getBookings: async (parent, args) => {
            return await Booking.find({});
        },

        getUsers: async (parent, args) => {
            return await User.find({});
        },

        getHotelByID: async (parent, args) => {
            return await Hotel.findById(args.hotel_id);
        },

        getUserByID: async (parent, args) => {
            return await User.findById(args.user_id);
        },

        getBookingByID: async (parent, args) => {
            return await Booking.findById(args.booking_id);
        },

        getUserByName: async (parent, args) => {
            return await User.find({'username': args.username});
        },
        
        getBookingByUsername: async (parent, args) => {
            return await Booking.find({'username': args.username});
        }
    }, 

    Mutation: {
        createHotel: async (parent, args) => {
            console.log(args);
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase());

            if(!isValidEmail) {
                throw new Error('Email entered is not in the proper format.');
            }

            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                user_id: args.user_id
            });

            return await newHotel.save();
        },

        bookHotel: async (parent, args) => {
            console.log(args);

            let newBooking = new Booking({
                booking_id: args.booking_id,
                hotel_name: args.hotel_name,
                username: args.username,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                // user_id: args.user_id
            });

            return await newBooking.save();
        },

        createUser: async (parent, args) => {
            console.log(args);
            const emailExpression = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            const isValidEmail =  emailExpression.test(String(args.email).toLowerCase());

            if(!isValidEmail) {
                throw new Error('Email entered is not in the proper format.');
            }

            let newUser = new User({
                user_id: args.user_id,
                username: args.username,
                password: args.password,
                email: args.email
            });

            return await newUser.save();
        },
    }
};